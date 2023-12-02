import { useState } from 'react';
import { ReactComponent as AddIcon } from '../../img/faq/add.svg';
import { ReactComponent as MinusIcon } from '../../img/faq/minus.svg';
import ArrowIcon from '../../img/arrow.svg';
import {
  FaqAddQues,
  FaqAddinionalLink,
  FaqAddinionalWrapper,
  FaqAnsver,
  FaqButton,
  FaqList,
  FaqListItem,
  FaqQuestion,
  FaqQuestionWrapper,
  FaqSection,
  FaqTitle,
  FaqTitleTab,
  TouchLink,
} from './FAQ.styled';

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
    answer:
      'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
  {
    question:
      'How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?',
    answer:
      'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
  {
    question:
      'What measures does EcoSolution take to ensure the environmental sustainability of its products?',
    answer:
      'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
  {
    question:
      'How does EcoSolution engage with local communities and support a just transition to renewable energy?',
    answer:
      'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = index => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <FaqSection>
      <FaqTitle>Frequently Asked Questions</FaqTitle>

      <FaqList>
        {faqData.map((item, index) => (
          <FaqListItem key={index}>
            <FaqButton
              type="button"
              aria-label="Toggle answer"
              onClick={() => handleToggle(index)}
            >
              {openIndex === index ? <MinusIcon /> : <AddIcon />}
            </FaqButton>
            <FaqQuestionWrapper>
              <FaqQuestion>{item.question}</FaqQuestion>
              {openIndex === index && <FaqAnsver>{item.answer}</FaqAnsver>}
            </FaqQuestionWrapper>
          </FaqListItem>
        ))}
      </FaqList>

      <FaqAddinionalWrapper>
        <FaqTitleTab>Frequently Asked Questions</FaqTitleTab>
        <FaqAddinionalLink>
          <FaqAddQues>Didn't find the answer to your question? </FaqAddQues>
          <TouchLink href="#">
            Contact Us
            <div>
              <img src={ArrowIcon} alt="arrow icon" />
            </div>
          </TouchLink>
        </FaqAddinionalLink>
      </FaqAddinionalWrapper>
    </FaqSection>
  );
}

export default FAQ;
