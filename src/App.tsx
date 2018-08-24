import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import routes from './routes';

const Header = () => (
  <header className="App-header">
    <Link to="/" className="App-link">
      <h1 className="App-title">
        <span role="img" aria-label="poopie" style={{ marginRight: '0.2em' }}>💩</span>
        ~ Fake News ~
        <span role="img" aria-label="poopie" style={{ marginLeft: '0.4em' }}>💩</span>
      </h1>
    </Link>
  </header>
);

const App = () => (
  <div className="App">
    <Header />
    {routes}
  </div>
);

export default App;
