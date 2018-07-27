import React from 'react';
import routes from './routes';
import './App.css';

const Header = () => (
  <header className="App-header">
    <h1 className="App-title">
      <span role="img" aria-label="poopie" style={{ marginRight: '0.2em' }}>💩</span>
      ~ Fake News ~
      <span role="img" aria-label="poopie" style={{ marginLeft: '0.4em' }}>💩</span>
    </h1>
  </header>
);

const App = () => (
  <div className="App">
    <Header />
    {routes}
  </div>
);

export default App;
