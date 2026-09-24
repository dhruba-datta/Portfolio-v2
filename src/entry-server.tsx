import { StrictMode } from 'react';
import { StaticRouter } from 'react-router-dom';
import { prerenderToNodeStream } from 'react-dom/static';
import { AppShell } from './App';
import ErrorBoundary from './components/ui/ErrorBoundary';

/** Render a route to static HTML, waiting for lazy routes and sections to resolve. */
export async function render(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <ErrorBoundary>
        <StaticRouter location={url}>
          <AppShell />
        </StaticRouter>
      </ErrorBoundary>
    </StrictMode>
  );

  const chunks: Buffer[] = [];
  for await (const chunk of prelude) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}
