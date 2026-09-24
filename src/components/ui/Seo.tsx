import { useEffect } from 'react';

export const SITE_URL = 'https://dhruba-datta.netlify.app';
export const DEFAULT_IMAGE = `${SITE_URL}/images/Headshot.webp`;

interface SeoProps {
  title: string;
  description: string;
  /** Route path, e.g. "/about". Used for canonical, og:url and twitter:url. */
  path: string;
  /** Absolute URL or site-relative path. Defaults to the headshot. */
  image?: string;
  type?: 'website' | 'article';
}

/**
 * Per-route metadata via React 19's native <title>/<meta>/<link> hoisting.
 * index.html ships home-page defaults marked `data-default`; once a route
 * renders its own tags, those defaults are removed so crawlers see one set.
 */
const Seo = ({ title, description, path, image, type = 'website' }: SeoProps) => {
  const url = `${SITE_URL}${path === '/' ? '/' : path}`;
  const imageUrl = !image ? DEFAULT_IMAGE : image.startsWith('http') ? image : `${SITE_URL}${image}`;

  useEffect(() => {
    document.head.querySelectorAll('[data-default]').forEach((el) => el.remove());
  }, []);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
};

export default Seo;
