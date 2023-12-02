import { useState } from 'react';
import { ReactComponent as AddIcon } from '../../img/faq/add.svg';
import { ReactComponent as MinusIcon } from '../../img/faq/minus.svg';
import { TouchLink } from '../Header/Header.styled';
import ArrowIcon from '../../img/arrow.svg';

const faqData = [
  {
    question:
      'How do wind turbines and solar panels work together in a renewable energy system?',
    answer:
      'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
  {
    question:
      "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    answer: 'Answer for the second question goes here.',
  },
  {
    question:
      'How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?',
    answer: 'Answer for the third question goes here.',
  },
  {
    question:
      'What measures does EcoSolution take to ensure the environmental sustainability of its products?',
    answer: 'Answer for the fourth question goes here.',
  },
  {
    question:
      'How does EcoSolution engage with local communities and support a just transition to renewable energy?',
    answer: 'Answer for the fifth question goes here.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = index => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqData.map((item, index) => (
          <li key={index}>
            <div>
              <p>{item.question}</p>
              <button
                type="button"
                aria-label="Toggle answer"
                onClick={() => handleToggle(index)}
              >
                {openIndex === index ? <MinusIcon /> : <AddIcon />}
              </button>
            </div>
            {openIndex === index && <p>{item.answer}</p>}
          </li>
        ))}
      </ul>

      <p>Didn't find the answer to your question? </p>
      <TouchLink href="#">
        Contact Us
        <div>
          <img src={ArrowIcon} alt="arrow icon" />
        </div>
      </TouchLink>
    </section>
  );
}

export default FAQ;
