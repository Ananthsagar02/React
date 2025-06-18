import React, { Suspense } from 'react';

// Lazy load the component
const LazyComponent = React.lazy(() => import('./MyComponent'));

function LazyExample() {
  return (
    <div>
      {/* Show fallback while loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default LazyExample;
