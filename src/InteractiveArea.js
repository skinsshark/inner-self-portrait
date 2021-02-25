import './InteractiveArea.css';
import grid from './grid.svg';

import { useState } from 'react';

function InteractiveArea() {
  const [responses, setResponse] = useState(new Array(7));

  const setQuestionResponse = (i, value) => {
    let newResponses = [...responses];
    newResponses[i] = value;

    setResponse(newResponses);
  }

  return (
    <section className="interactive-section">
      <div className="question-area">
        <ul>
          <li>
            <div className="question">
              <p>I'm mostly a(n)</p>
              <label>
                <input type="radio" id="1" value="introvert" checked={false}
                onChange={(e) => setQuestionResponse(e.target.id, e.target.value)}/>
                <span>introvert</span>
              </label>
              <label>
                <input type="radio" id="1" value="extrovert" checked={false}
                onChange={(e) => setQuestionResponse(e.target.id, e.target.value)}/>
                <span>extrovert</span>
              </label>
            </div>
          </li>
          <li>
            <div className="question">
              <p>I'm mostly</p>
              <label>
                <input type="radio" id="2" value="competitive" checked={false}
                onChange={(e) => setQuestionResponse(e.target.id, e.target.value)}/>
                <span>competitive</span>
              </label>
              <label>
                <input type="radio" id="2" value="cooperative" checked={false}
                onChange={(e) => setQuestionResponse(e.target.id, e.target.value)}/>
                <span>cooperative</span>
              </label>
            </div>
          </li>
          <li>
            <div className="question">
              <p>I'm primarily an</p>
            </div>
          </li>
          <li>
            <div className="question">
              <p>I lean towards being more</p>
            </div>
          </li>
          <li>
            <div className="question">
              <p>I mainly tend to</p>
            </div>
          </li>
          <li>
            <div className="question">
              <p>I am primarily an</p>
            </div>
          </li>
          <li>
            <div className="question">
              <p>I mainly have a</p>
            </div>
          </li>
          <li>
            <div className="question">
              <p>Most of the time, I like to</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="drawing">
        <img className="grid" src={grid} alt="grid" />
        {Array.from(responses).map((response, i) => {
          if (response != null) {
            const layerImage = `./assets/${response}.svg`;
            return (
              <div key={`layer-${i}`} className={`layer layer-${i}`}
                style={{
                  backgroundImage: `url(${layerImage})`
                }}/>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}

export default InteractiveArea;
