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
              <QuestionSelector
                i={0}
                value1="optimist"
                value2="pessimist"
                onChange={setQuestionResponse}
              />
            </div>
          </li>
          <li>
            <div className="question">
              <p>I'm mostly</p>
              <QuestionSelector
                i={1}
                value1="competitive"
                value2="cooperative"
                onChange={setQuestionResponse}
              />
            </div>
          </li>
          <li>
            <div className="question">
              <p>I'm primarily an</p>
              <QuestionSelector
                i={2}
                value1="extrovert"
                value2="introvert"
                onChange={setQuestionResponse}
              />
            </div>
          </li>
          <li>
            <div className="question">
              <p>I lean towards being more</p>
              <QuestionSelector
                i={3}
                value1="sensitive"
                value2="thick-skinned"
                onChange={setQuestionResponse}
              />
            </div>
          </li>
          <li>
            <div className="question">
              <p>I mainly tend to</p>
              <QuestionSelector
                i={4}
                value1="value-tradition"
                value2="embrace-rebellion"
                onChange={setQuestionResponse}
              />
            </div>
          </li>
          <li>
            <div className="question">
              <p>I am primarily an</p>
              <QuestionSelector
                i={5}
                value1="analytical-thinker"
                value2="intuitive-thinker"
                onChange={setQuestionResponse}
              />
            </div>
          </li>
          <li>
            <div className="question">
              <p>I mainly have a</p>
              <QuestionSelector
                i={6}
                value1="serious-disposition"
                value2="playful-disposition"
                onChange={setQuestionResponse}
              />
            </div>
          </li>
          <li>
            <div className="question">
              <p>Most of the time, I like to</p>
              <QuestionSelector
                i={7}
                value1="have-a-plan"
                value2="be-spontaneous"
                onChange={setQuestionResponse}
              />
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

const QuestionSelector = (props) => {
  const {i, value1, value2, onChange} = props;
  const [selectedValue, setSelectedValue] = useState(null);
  return (
    <>
      <label>
        <input type="radio" id={i} value={value1} checked={selectedValue === value1}
        onChange={(e) => {
          setSelectedValue(e.target.value)
          onChange(e.target.id, e.target.value)
        }}/>
        <span>{value1}</span>
      </label>
      <label>
        <input type="radio" id={i} value={value2} checked={selectedValue === value2}
        onChange={(e) => {
          setSelectedValue(e.target.value)
          onChange(e.target.id, e.target.value)
        }}/>
        <span>{value2}</span>
      </label>
    </>
  );
}

export default InteractiveArea;
