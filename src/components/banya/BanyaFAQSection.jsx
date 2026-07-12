import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// === STYLED COMPONENTS — Minimalist Pasture Style ===

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const Overline = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(19, 50, 56, 0.25);
    margin-right: 1rem;
  }
`;

const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`;

const Subtitle = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 0 4rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 3rem;
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid rgba(19, 50, 56, 0.08);

  &:first-child {
    border-top: 1px solid rgba(19, 50, 56, 0.08);
  }
`;

const QuestionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 1.5rem;
`;

const QuestionText = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #133238;
  margin: 0;
  line-height: 1.4;
  flex: 1;
`;

const ToggleIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid rgba(19, 50, 56, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  transition: background 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${props => props.$isOpen ? '#133238' : 'transparent'};
  border-color: ${props => props.$isOpen ? '#133238' : 'rgba(19, 50, 56, 0.15)'};
  transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${props => props.$isOpen ? '#fffef6' : '#133238'};
    transition: background 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 1px;
  }

  &::before {
    width: 12px;
    height: 1.5px;
  }

  &::after {
    width: 1.5px;
    height: 12px;
  }
`;

const AnswerWrapper = styled.div`
  display: grid;
  grid-template-rows: ${props => props.$isOpen ? '1fr' : '0fr'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transition: grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  > div {
    overflow: hidden;
  }
`;

const AnswerText = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(19, 50, 56, 0.6);
  margin: 0;
  padding-bottom: 1.75rem;
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-8px)'};
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

// === COMPONENT ===

const BanyaFAQSection = () => {
  const { t } = useTranslation();
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqData = [
    {
      question: t('banya.faq.questions.panoramic.question', "What's special about the panoramic banya?"),
      answer: t('banya.faq.questions.panoramic.answer', "Our banya is unique with several features: 150 square meters with panoramic jungle windows, built from Siberian cedar and Altai linden - premium natural materials. It's the only panoramic Russian banya in Phuket where you can enjoy traditional banya rituals with tropical nature views.")
    },
    {
      question: t('banya.faq.questions.procedures.question', 'What procedures are included in the banya ritual?'),
      answer: t('banya.faq.questions.procedures.answer', "Depending on your chosen program you'll receive: classic banya ritual with birch brooms, aromatherapy with essential oils, herbal infusions and teas, option to order massage in the steam room, and personal accompaniment by a master attendant for VIP programs.")
    },
    {
      question: t('banya.faq.questions.materials.question', 'What materials is the banya built from?'),
      answer: t('banya.faq.questions.materials.answer', 'The banya is built exclusively from natural eco-friendly materials: Siberian cedar, Altai linden, Karelian birch. All finishes are natural, without chemical additives. Such materials create a special microclimate and provide natural aromatherapy.')
    }
  ];

  return (
    <SectionContainer>
      <ContentWrapper>
        <Overline>{t('banya.faq.badge', 'Questions & Answers')}</Overline>
        <Title>{t('banya.faq.title_plain', 'Frequently Asked Questions')}</Title>
        <Subtitle>
          {t('banya.faq.subtitle', 'Answers to the most popular questions about our banya')}
        </Subtitle>

        <FAQList>
          {faqData.map((item, index) => (
            <FAQItem key={index}>
              <QuestionButton onClick={() => toggleItem(index)}>
                <QuestionText>{item.question}</QuestionText>
                <ToggleIcon $isOpen={openItem === index} />
              </QuestionButton>
              <AnswerWrapper $isOpen={openItem === index}>
                <div>
                  <AnswerText $isOpen={openItem === index}>{item.answer}</AnswerText>
                </div>
              </AnswerWrapper>
            </FAQItem>
          ))}
        </FAQList>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default BanyaFAQSection;
