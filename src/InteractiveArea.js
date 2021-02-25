import './InteractiveArea.css';
import grid from './assets/grid.svg';

function InteractiveArea() {
  return (
    <section className="interactive-section">
      <div className="question-area">
        <ul>
          <li>I'm mostly a(n)</li>
          <li>I'm mostly</li>
          <li>I'm primarily an</li>
          <li>I lean towards being more</li>
          <li>I mainly tend to</li>
          <li>I am primarily an</li>
          <li>I mainly have a</li>
          <li>Most of the time, I like to</li>
        </ul>
      </div>
      <div className="drawing">
        <img src={grid} alt="grid" />
        <div className="layer layer-1" />
        <div className="layer layer-2" />
        <div className="layer layer-3" />
        <div className="layer layer-4" />
        <div className="layer layer-5" />
        <div className="layer layer-6" />
        <div className="layer layer-7" />
        <div className="layer layer-8" />
      </div>
    </section>
  );
}

export default InteractiveArea;
