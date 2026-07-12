import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Header from '../components/layout/Header';
import PageHead from '../components/layout/PageHead';

// Styled Components
const PaymentContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 2rem 1rem;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(144, 179, 167, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: moveGrid 20s linear infinite;
  }

  @keyframes moveGrid {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`;

const BackButton = styled(motion.button)`
  position: absolute;
  top: 7rem;
  left: 2rem;
  background: rgba(144, 179, 167, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid #90B3A7;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  color: #2C3E2D;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    background: #90B3A7;
    color: white;
    transform: translateX(-5px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const PaymentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  position: relative;
  z-index: 10;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormSection = styled(motion.div)`
  background: white;
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Playfair Display', serif;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #90B3A7;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #90B3A7;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: ${props => props.cols || '1fr 1fr'};
  gap: 1rem;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(144, 179, 167, 0.4);
    background: linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Credit Card Component
const CreditCard = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1.586;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  background: ${props => props.back
    ? 'linear-gradient(135deg, #2a2a2a 0%, #000000 100%)'
    : 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const CardFront = styled(CardFace)`
  z-index: 2;
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
`;

const CardChip = styled.div`
  width: 50px;
  height: 40px;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35px;
    height: 25px;
    border: 2px solid rgba(0,0,0,0.3);
    border-radius: 4px;
  }
`;

const CardLogo = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: #90B3A7;
  text-transform: uppercase;
  font-style: italic;
  opacity: 0.9;
  font-family: 'Playfair Display', serif;
  letter-spacing: 2px;
`;

const CardNumber = styled.div`
  font-size: 1.5rem;
  color: white;
  letter-spacing: 2px;
  margin-top: 2rem;
  font-family: 'Courier New', monospace;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  margin-top: 1rem;
`;

const CardHolder = styled.div`
  div:first-child {
    font-size: 0.75rem;
    opacity: 0.7;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }
  div:last-child {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const CardExpiry = styled.div`
  text-align: right;
  div:first-child {
    font-size: 0.75rem;
    opacity: 0.7;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }
  div:last-child {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

const MagneticStripe = styled.div`
  width: 100%;
  height: 50px;
  background: #000;
  margin-top: 1.5rem;
`;

const CVVBox = styled.div`
  background: white;
  height: 40px;
  margin-top: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  color: #000;
  font-size: 1.125rem;
  font-family: 'Courier New', monospace;
`;

const OrderSummary = styled.div`
  background: rgba(144, 179, 167, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(144, 179, 167, 0.2);
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #2d3748;

  &:last-child {
    margin-bottom: 0;
    padding-top: 1rem;
    border-top: 2px solid rgba(144, 179, 167, 0.3);
    font-weight: 700;
    font-size: 1.125rem;
    color: #2C3E2D;
  }
`;

const PaymentPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);
  const [cardData, setCardData] = useState({
    number: '',
    holder: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  });
  const [processing, setProcessing] = useState(false);

  // Format card number
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'number') {
      const formatted = formatCardNumber(value);
      if (formatted.replace(/\s/g, '').length <= 16) {
        setCardData({ ...cardData, [name]: formatted });
      }
    } else if (name === 'cvv') {
      if (value.length <= 4 && /^\d*$/.test(value)) {
        setCardData({ ...cardData, [name]: value });
      }
    } else if (name === 'holder') {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setCardData({ ...cardData, [name]: value.toUpperCase() });
      }
    } else {
      setCardData({ ...cardData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      // Navigate to success page or show success message
      alert(t('payment.success', 'Payment successful!'));
      navigate('/');
    }, 3000);
  };

  // Generate month options
  const months = Array.from({ length: 12 }, (_, i) => {
    const month = (i + 1).toString().padStart(2, '0');
    return <option key={month} value={month}>{month}</option>;
  });

  // Generate year options
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => {
    const year = (currentYear + i).toString();
    return <option key={year} value={year}>{year}</option>;
  });

  return (
    <>
      <Header />
      <PageHead
        titleKey="page_titles.payment"
        description={t('payment.description', 'Secure payment for KAIF services and restaurant orders')}
        keywords="payment, KAIF, restaurant, delivery, spa services"
      />
      <PaymentContainer>
        <BackButton
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeftIcon />
          {t('common.back', 'Back')}
        </BackButton>

      <PaymentWrapper>
        <CardSection>
          <CreditCard flipped={flipped}>
            <CardFront>
              <div>
                <CardChip />
                <CardLogo>KAIF</CardLogo>
              </div>

              <CardNumber>
                {cardData.number || '#### #### #### ####'}
              </CardNumber>

              <CardInfo>
                <CardHolder>
                  <div>{t('payment.card_holder', 'Card Holder')}</div>
                  <div>{cardData.holder || 'FULL NAME'}</div>
                </CardHolder>
                <CardExpiry>
                  <div>{t('payment.expires', 'Expires')}</div>
                  <div>
                    {cardData.expMonth || 'MM'}/{cardData.expYear?.slice(-2) || 'YY'}
                  </div>
                </CardExpiry>
              </CardInfo>
            </CardFront>

            <CardBack back>
              <MagneticStripe />
              <CVVBox>{cardData.cvv || '***'}</CVVBox>
              <CardLogo style={{ bottom: '1.5rem', top: 'auto' }}>
                KAIF
              </CardLogo>
            </CardBack>
          </CreditCard>
        </CardSection>

        <FormSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FormTitle>{t('payment.title', 'Payment Details')}</FormTitle>

          <OrderSummary>
            <SummaryItem>
              <span>{t('payment.subtotal', 'Subtotal')}</span>
              <span>฿890</span>
            </SummaryItem>
            <SummaryItem>
              <span>{t('payment.delivery', 'Delivery')}</span>
              <span>฿50</span>
            </SummaryItem>
            <SummaryItem>
              <span>{t('payment.tax', 'Tax')}</span>
              <span>฿66</span>
            </SummaryItem>
            <SummaryItem>
              <span>{t('payment.total', 'Total')}</span>
              <span>฿1,006</span>
            </SummaryItem>
          </OrderSummary>

          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>{t('payment.card_number', 'Card Number')}</Label>
              <Input
                type="text"
                name="number"
                value={cardData.number}
                onChange={handleInputChange}
                placeholder="0000 0000 0000 0000"
                maxLength="19"
                required
                onFocus={() => setFlipped(false)}
              />
            </InputGroup>

            <InputGroup>
              <Label>{t('payment.card_holder', 'Card Holder')}</Label>
              <Input
                type="text"
                name="holder"
                value={cardData.holder}
                onChange={handleInputChange}
                placeholder="JOHN DOE"
                required
                onFocus={() => setFlipped(false)}
              />
            </InputGroup>

            <Row>
              <InputGroup>
                <Label>{t('payment.expiry_date', 'Expiry Date')}</Label>
                <Row>
                  <Select
                    name="expMonth"
                    value={cardData.expMonth}
                    onChange={handleInputChange}
                    required
                    onFocus={() => setFlipped(false)}
                  >
                    <option value="">{t('payment.month', 'Month')}</option>
                    {months}
                  </Select>
                  <Select
                    name="expYear"
                    value={cardData.expYear}
                    onChange={handleInputChange}
                    required
                    onFocus={() => setFlipped(false)}
                  >
                    <option value="">{t('payment.year', 'Year')}</option>
                    {years}
                  </Select>
                </Row>
              </InputGroup>

              <InputGroup>
                <Label>{t('payment.cvv', 'CVV')}</Label>
                <Input
                  type="text"
                  name="cvv"
                  value={cardData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength="4"
                  required
                  onFocus={() => setFlipped(true)}
                  onBlur={() => setFlipped(false)}
                />
              </InputGroup>
            </Row>

            <SubmitButton
              type="submit"
              disabled={processing}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {processing
                ? t('payment.processing', 'Processing...')
                : t('payment.pay_now', 'Pay Now')}
            </SubmitButton>
          </form>
        </FormSection>
      </PaymentWrapper>
      </PaymentContainer>
    </>
  );
};

export default PaymentPage;