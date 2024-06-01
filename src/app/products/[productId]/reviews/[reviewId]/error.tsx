'use client';

export default function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div>
      <h2>Error in product review. {error.message}</h2>
      <button onClick={reset}>Try Again</button>
    </div>
  )
}
