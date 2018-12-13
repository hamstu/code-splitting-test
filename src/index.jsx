import React, { Component, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

const LazyComponent = lazy(() => import('./components/LazyComponent'));

class App extends Component {
  state = {
    showLazy: false,
  }
  render() {
    return (
      <>
        <h1>This is my App. Hello!</h1>
        <a href="#" onClick={() => this.setState({ showLazy: true })}>
          Click here to load a lazy component!
        </a>
        <hr />
        <Suspense fallback={<div>Loading...</div>}>
          {this.state.showLazy && <LazyComponent />}
        </Suspense>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
