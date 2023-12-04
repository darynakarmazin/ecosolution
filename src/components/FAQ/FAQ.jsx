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
import { faqData } from '../data/faqData';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = index => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <FaqSection id="faq">
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
              <FaqQuestion onClick={() => handleToggle(index)}>
                {item.question}
              </FaqQuestion>
              {openIndex === index && <FaqAnsver>{item.answer}</FaqAnsver>}
            </FaqQuestionWrapper>
          </FaqListItem>
        ))}
      </FaqList>

      <FaqAddinionalWrapper>
        <FaqTitleTab>Frequently Asked Questions</FaqTitleTab>
        <FaqAddinionalLink>
          <FaqAddQues>Didn't find the answer to your question? </FaqAddQues>
          <TouchLink href="#contactUs">
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
