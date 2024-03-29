import './App.css';

import InteractiveArea from './InteractiveArea';

function App() {
  return (
    <div className="page-wrapper">
      <header>
        <div className="main-headline">
          <h1>Inner Self Portrait</h1>
          <p>Choose the responses that best describe you most of the time to create a drawing using your personal “data”.</p>
        </div>
        <div className="subtitle">
          <p>
            {'Original workshop by '}
            <a href="https://www.instagram.com/metaopenarts" target="_blank" rel="noreferrer">Open Arts</a>
            {' & '}
            <a href="https://stefanieposavec.com/" target="_blank" rel="noreferrer">Stefanie Posavec</a>
          </p>
        </div>
      </header>

      <InteractiveArea />
    </div>
  );
}

export default App;
