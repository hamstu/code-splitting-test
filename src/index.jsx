import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom';

const LazyComponent = lazy(() => import(/* webpackChunkName: 'lazy-component' */'./components/LazyComponent'));

function App() {
  const [showLazy, setShowLazy] = useState(false);
  return (
    <>
      <h1>This is my App. Hello!</h1>
      <button type="button" href="#" onClick={() => setShowLazy(true)}>
        Click here to load a lazy component!
      </button>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        {showLazy && <LazyComponent />}
      </Suspense>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
