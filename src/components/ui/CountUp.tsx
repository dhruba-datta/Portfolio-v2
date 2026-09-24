import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

const getDecimalPlaces = (num: number) => {
  const str = num.toString();

  if (str.includes('.')) {
    const decimals = str.split('.')[1];

    if (parseInt(decimals) !== 0) {
      return decimals.length;
    }
  }

  return 0;
};

/**
 * Renders the final value in the initial markup so crawlers, link-preview bots,
 * screen readers and no-JS readers see the real number. On the client it resets
 * to the start value and animates when scrolled into view; with
 * prefers-reduced-motion it stays on the final value.
 */
export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const startValue = direction === 'down' ? to : from;
  const endValue = direction === 'down' ? from : to;
  const motionValue = useMotionValue(startValue);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const format = (value: number) => {
    const hasDecimals = maxDecimals > 0;

    const options: Intl.NumberFormatOptions = {
      useGrouping: !!separator,
      minimumFractionDigits: hasDecimals ? maxDecimals : 0,
      maximumFractionDigits: hasDecimals ? maxDecimals : 0
    };

    const formattedNumber = Intl.NumberFormat('en-US', options).format(value);

    return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
  };

  // Client only: reset to the start value so the in-view animation has somewhere to count from.
  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;
    ref.current.textContent = format(startValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion, startValue]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(endValue);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') onEnd();
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, endValue, delay, onStart, onEnd, duration, prefersReducedMotion]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest: number) => {
      if (ref.current) {
        ref.current.textContent = format(latest);
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [springValue, separator, maxDecimals]);

  return (
    <span className={className} ref={ref}>
      {format(endValue)}
    </span>
  );
}
