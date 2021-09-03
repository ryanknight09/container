/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

//@ts-ignore
const Header = React.lazy(() => import('app1/Header'));

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Container Application</p>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Header />
        </React.Suspense>
      </header>
    </div>
  );
};

export default App;
