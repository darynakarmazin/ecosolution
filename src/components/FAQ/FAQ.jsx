import { useState } from 'react';
import { ReactComponent as AddIcon } from '../../img/faq/add.svg';
import { ReactComponent as MinusIcon } from '../../img/faq/minus.svg';

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggles = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <div>
            <p>
              How do wind turbines and solar panels work together in a renewable
              energy system?
            </p>
            <button
              type="button"
              aria-label="Open answer"
              onClick={handleToggles}
            >
              {isOpen ? <MinusIcon /> : <AddIcon />}
            </button>
          </div>
          {isOpen && (
            <p>
              Wind turbines and solar panels generate electricity through
              different mechanisms. Wind turbines harness the kinetic energy of
              the wind to turn blades, which then drive a generator. Solar
              panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these
              technologies complement each other by providing a continuous and
              reliable power supply. Wind power is often more abundant during
              certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </p>
          )}
        </li>
        <li>
          <div>
            <p>
              What sets EcoSolution's renewable energy solutions apart from
              others on the market?
            </p>
            <button
              type="button"
              aria-label="Open answer"
              onClick={handleToggles}
            >
              {isOpen ? <MinusIcon /> : <AddIcon />}
            </button>
          </div>
          {isOpen && (
            <p>
              Wind turbines and solar panels generate electricity through
              different mechanisms. Wind turbines harness the kinetic energy of
              the wind to turn blades, which then drive a generator. Solar
              panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these
              technologies complement each other by providing a continuous and
              reliable power supply. Wind power is often more abundant during
              certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </p>
          )}
        </li>
        <li>
          <div>
            <p>
              How can businesses and communities benefit from integrating
              renewable energy solutions from EcoSolution?
            </p>
            <button
              type="button"
              aria-label="Open answer"
              onClick={handleToggles}
            >
              {isOpen ? <MinusIcon /> : <AddIcon />}
            </button>
          </div>
          {isOpen && (
            <p>
              Wind turbines and solar panels generate electricity through
              different mechanisms. Wind turbines harness the kinetic energy of
              the wind to turn blades, which then drive a generator. Solar
              panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these
              technologies complement each other by providing a continuous and
              reliable power supply. Wind power is often more abundant during
              certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </p>
          )}
        </li>
        <li>
          <div>
            <p>
              What measures does EcoSolution take to ensure the environmental
              sustainability of its products?
            </p>
            <button
              type="button"
              aria-label="Open answer"
              onClick={handleToggles}
            >
              {isOpen ? <MinusIcon /> : <AddIcon />}
            </button>
          </div>
          {isOpen && (
            <p>
              Wind turbines and solar panels generate electricity through
              different mechanisms. Wind turbines harness the kinetic energy of
              the wind to turn blades, which then drive a generator. Solar
              panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these
              technologies complement each other by providing a continuous and
              reliable power supply. Wind power is often more abundant during
              certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </p>
          )}
        </li>
        <li>
          <div>
            <p>
              How does EcoSolution engage with local communities and support a
              just transition to renewable energy?
            </p>
            <button
              type="button"
              aria-label="Open answer"
              onClick={handleToggles}
            >
              {isOpen ? <MinusIcon /> : <AddIcon />}
            </button>
          </div>
          {isOpen && (
            <p>
              Wind turbines and solar panels generate electricity through
              different mechanisms. Wind turbines harness the kinetic energy of
              the wind to turn blades, which then drive a generator. Solar
              panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these
              technologies complement each other by providing a continuous and
              reliable power supply. Wind power is often more abundant during
              certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </p>
          )}
        </li>
      </ul>
    </section>
  );
}

export default FAQ;
