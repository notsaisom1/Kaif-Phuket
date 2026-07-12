import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// === STYLED COMPONENTS — Minimalist Pasture Style ===

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1300px;
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

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 380px;
    gap: 4rem;
  }
`;

/* FAQ accordion */
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

/* Support sidebar */
const SupportSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const SupportCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`;

const SupportTitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.75rem;
  text-transform: uppercase;
  letter-spacing: -0.01em;
`;

const SupportDescription = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(19, 50, 56, 0.5);
  line-height: 1.5;
  margin: 0 0 1.25rem;
`;

const SupportInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InfoItem = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  color: rgba(19, 50, 56, 0.45);
  font-weight: 400;
`;

// === COMPONENT ===

const FAQSection = () => {
  const { t } = useTranslation();
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = useMemo(() => [
    {
      question: t('faq.questions.what_includes.question'),
      answer: t('faq.questions.what_includes.answer')
    },
    {
      question: t('faq.questions.working_hours.question'),
      answer: t('faq.questions.working_hours.answer')
    },
    {
      question: t('faq.questions.how_to_book.question'),
      answer: t('faq.questions.how_to_book.answer')
    },
    {
      question: t('faq.questions.memberships.question'),
      answer: t('faq.questions.memberships.answer')
    },
    {
      question: t('faq.questions.experience_needed.question'),
      answer: t('faq.questions.experience_needed.answer')
    },
    {
      question: t('faq.questions.payment_methods.question'),
      answer: t('faq.questions.payment_methods.answer')
    }
  ], [t]);

  return (
    <SectionContainer id="faq">
      <ContentWrapper>
        <Overline>{t('faq.badge', 'FAQ')}</Overline>
        <Title>{t('faq.title')}</Title>
        <Subtitle>{t('faq.subtitle')}</Subtitle>

        <FAQGrid>
          {/* FAQ Accordion */}
          <FAQList>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <QuestionButton onClick={() => toggleFAQ(index)}>
                  <QuestionText>{faq.question}</QuestionText>
                  <ToggleIcon $isOpen={openFAQ === index} />
                </QuestionButton>
                <AnswerWrapper $isOpen={openFAQ === index}>
                  <div>
                    <AnswerText $isOpen={openFAQ === index}>{faq.answer}</AnswerText>
                  </div>
                </AnswerWrapper>
              </FAQItem>
            ))}
          </FAQList>

          {/* Support sidebar */}
          <SupportSection>
            <SupportCard>
              <SupportTitle>{t('faq.support.title')}</SupportTitle>
              <SupportDescription>{t('faq.support.description')}</SupportDescription>
              <SupportInfo>
                <InfoItem>{t('faq.support.location')}</InfoItem>
                <InfoItem>{t('faq.support.hours')}</InfoItem>
              </SupportInfo>
            </SupportCard>

            <SupportCard>
              <SupportTitle>{t('faq.whatsapp.title')}</SupportTitle>
              <SupportDescription>{t('faq.whatsapp.description')}</SupportDescription>
              <SupportInfo>
                <InfoItem>{t('faq.whatsapp.instant_replies')}</InfoItem>
                <InfoItem>{t('faq.whatsapp.personal_manager')}</InfoItem>
              </SupportInfo>
            </SupportCard>

            <SupportCard>
              <SupportTitle>{t('faq.consultation.title')}</SupportTitle>
              <SupportDescription>{t('faq.consultation.description')}</SupportDescription>
              <SupportInfo>
                <InfoItem>{t('faq.consultation.free')}</InfoItem>
              </SupportInfo>
            </SupportCard>
          </SupportSection>
        </FAQGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default FAQSection;
