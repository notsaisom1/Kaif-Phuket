import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaStar,
  FaInstagram,
  FaUserFriends,
  FaHome,
  FaWalking,
  FaCommentDots,
  FaCheck,
  FaTimes,
  FaCut,
  FaEye,
  FaHandPaper
} from 'react-icons/fa';
import { 
  MdSpa,
  MdFace,
  MdAutorenew
} from 'react-icons/md';
import { HiSparkles } from 'react-icons/hi';
import { BsCheckCircleFill } from 'react-icons/bs';
import PageScrollReset from '../components/common/PageScrollReset';
import PageHead from '../components/layout/PageHead';

const SurveyContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #f0f9f5 0%, #e8f6ea 70%, #90b3a7 100%);
  padding: 2rem 1rem;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 0;
  margin-bottom: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: -30%;
    right: -30%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(144, 179, 167, 0.08) 0%, transparent 70%);
    animation: float 20s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -30%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(168, 197, 184, 0.08) 0%, transparent 70%);
    animation: float 25s ease-in-out infinite reverse;
  }
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, -30px) rotate(120deg); }
    66% { transform: translate(-20px, 20px) rotate(240deg); }
  }
  
  @media (min-width: 768px) {
    padding: 4rem 2rem;
    padding-bottom: 0;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const HeaderSection = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const LogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #90b3a7 0%, #a8c5b8 100%);
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.3);
  
  svg {
    font-size: 2.5rem;
    color: white;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #6B7280;
  font-family: 'Inter', sans-serif;
`;

const SurveyCard = styled(motion.div)`
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #90b3a7 0%, #d4a574 50%, #b8c4a8 100%);
  }
`;

const FormContainer = styled.form`
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const QuestionBlock = styled(motion.div)`
  margin-bottom: 2.5rem;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const QuestionNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #90b3a7 0%, #a8c5b8 100%);
  color: white;
  border-radius: 50%;
  font-size: 0.875rem;
  font-weight: 600;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const QuestionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1F2937;
  font-family: 'Inter', sans-serif;
  line-height: 1.4;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const OptionCard = styled(motion.label)`
  display: flex;
  align-items: center;
  padding: 1.25rem;
  background: #f9fafb;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    border-color: #90b3a7;
    background: #f0f9f5;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(144, 179, 167, 0.15);
  }
  
  &:has(input:checked) {
    border-color: #90b3a7;
    background: linear-gradient(135deg, rgba(144, 179, 167, 0.1) 0%, rgba(168, 197, 184, 0.1) 100%);
    
    &::after {
      content: '';
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      width: 24px;
      height: 24px;
      background: #90b3a7;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const OptionText = styled.span`
  font-size: 1rem;
  color: #374151;
  font-family: 'Inter', sans-serif;
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (min-width: 640px) {
    justify-content: flex-start;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const RatingButton = styled(motion.label)`
  position: relative;
  width: 60px;
  height: 60px;
  background: ${props => props.$isSelected ? 'linear-gradient(135deg, #90b3a7 0%, #a8c5b8 100%)' : '#f3f4f6'};
  border: 2px solid ${props => props.$isSelected ? '#90b3a7' : '#e5e7eb'};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.$isSelected ? 'white' : '#6b7280'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    border-color: #90b3a7;
    box-shadow: 0 4px 12px rgba(144, 179, 167, 0.2);
  }
  
  svg {
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 1rem;
    color: #f59e0b;
    opacity: ${props => props.$showStar ? 1 : 0};
    transition: opacity 0.3s ease;
  }
`;

const TextInput = styled(motion.input)`
  width: 100%;
  padding: 1rem 1.25rem;
  background: #f9fafb;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #90b3a7;
    background: white;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const TextArea = styled(motion.textarea)`
  width: 100%;
  padding: 1rem 1.25rem;
  background: #f9fafb;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #90b3a7;
    background: white;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const AnimatedPhoneInput = styled(motion.div)`
  margin-top: 1rem;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1.25rem 2rem;
  margin-top: 3rem;
  background: linear-gradient(135deg, #90b3a7 0%, #a8c5b8 100%);
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 4px 20px rgba(144, 179, 167, 0.3);
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(144, 179, 167, 0.4);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: linear-gradient(135deg, #90b3a7 0%, #a8c5b8 100%);
    transform: none !important;
  }
`;

const SuccessContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const SuccessIcon = styled(motion.div)`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #90b3a7 0%, #a8c5b8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.3);
  
  svg {
    font-size: 3.5rem;
    color: white;
  }
`;

const SuccessTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

const SuccessText = styled.p`
  font-size: 1.125rem;
  color: #6B7280;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
`;

const FloatingDecoration = styled(motion.div)`
  position: absolute;
  width: ${props => props.$size || '200px'};
  height: ${props => props.$size || '200px'};
  background: linear-gradient(135deg, ${props => props.$color1 || '#90B3A7'} 0%, ${props => props.$color2 || '#A8C5B8'} 100%);
  border-radius: 50%;
  opacity: 0.1;
  z-index: -1;
  pointer-events: none;
`;

const SurveyPage = () => {
  const [formData, setFormData] = useState({
    services: [],
    source: '',
    otherSource: '',
    serviceRating: '',
    resultRating: '',
    masterName: '',
    improvements: '',
    wantsOffers: null,
    phoneNumber: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const services = [
    { id: 'manicure', label: 'Маникюр / педикюр', icon: <FaHandPaper /> },
    { id: 'facial', label: 'Уход за лицом', icon: <MdFace /> },
    { id: 'brows', label: 'Брови / ресницы', icon: <FaEye /> },
    { id: 'hair', label: 'Стрижка / укладка', icon: <FaCut /> },
    { id: 'massage', label: 'Массаж', icon: <MdSpa /> },
    { id: 'other', label: 'Другое', icon: <MdAutorenew /> }
  ];

  const sources = [
    { id: 'instagram', label: 'Instagram', icon: <FaInstagram /> },
    { id: 'recommendation', label: 'По рекомендации', icon: <FaUserFriends /> },
    { id: 'resident', label: 'Проживаю в KAIF', icon: <FaHome /> },
    { id: 'passing', label: 'Проходил(а) мимо', icon: <FaWalking /> },
    { id: 'other', label: 'Другое', icon: <FaCommentDots /> }
  ];

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // URL вашего Google Apps Script
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxmqEA8Vojx-Lsr8wNTtuoFbCXTkqLS40RkXgZOtTq_kEiDze7SvkQTd6vBDZGiBKbL/exec';
      
      console.log('Начинаем отправку формы...');
      console.log('Данные формы:', formData);

      // Используем метод отправки через изображение (pixel tracking)
      const params = new URLSearchParams();
      params.append('services', JSON.stringify(formData.services));
      params.append('source', formData.source || '');
      params.append('otherSource', formData.otherSource || '');
      params.append('serviceRating', formData.serviceRating || '');
      params.append('resultRating', formData.resultRating || '');
      params.append('masterName', formData.masterName || '');
      params.append('improvements', formData.improvements || '');
      params.append('wantsOffers', String(formData.wantsOffers));
      params.append('phoneNumber', formData.phoneNumber || '');

      console.log('Отправляем данные через GET...');
      
      // Создаем скрытое изображение для отправки GET запроса
      const img = new Image();
      img.style.display = 'none';
      
      // Обработчики событий
      img.onload = () => {
        console.log('Данные успешно отправлены!');
        document.body.removeChild(img);
      };
      
      img.onerror = () => {
        console.log('Ошибка при отправке, но данные могли быть получены');
        document.body.removeChild(img);
      };
      
      // Устанавливаем URL с параметрами
      img.src = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;
      document.body.appendChild(img);

      // Ждем отправки
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Форма отправлена успешно!');
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      setError('Произошла ошибка при отправке анкеты. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <SurveyContainer>
        <PageScrollReset />
        <ContentWrapper>
          <SuccessContainer
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <SuccessIcon
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <BsCheckCircleFill />
            </SuccessIcon>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <SuccessTitle>Спасибо за ваш отзыв!</SuccessTitle>
              <SuccessText>
                Мы очень ценим ваше мнение и постараемся стать еще лучше для вас.
                Ваши предложения помогают нам совершенствовать наш сервис.
              </SuccessText>
            </motion.div>
          </SuccessContainer>
        </ContentWrapper>
      </SurveyContainer>
    );
  }

  return (
    <SurveyContainer>
      <PageHead 
        titleKey="page_titles.survey"
        description="Анкета клиента бьюти-салона KAIF Beauty"
        keywords="KAIF survey, feedback, customer satisfaction"
      />
      <PageScrollReset />
      
      <FloatingDecoration
        $size="300px"
        $color1="#90B3A7"
        $color2="#A8C5B8"
        style={{ top: '-150px', right: '-100px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      
      <FloatingDecoration
        $size="250px"
        $color1="#D4A574"
        $color2="#E8B796"
        style={{ bottom: '-100px', left: '-120px' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      
      <ContentWrapper>
        <HeaderSection
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <LogoWrapper>
            <HiSparkles />
          </LogoWrapper>
          <Title>Анкета клиента</Title>
          <Subtitle>KAIF Beauty — ваше мнение важно для нас</Subtitle>
        </HeaderSection>

        <SurveyCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FormContainer onSubmit={handleSubmit}>
            {/* Question 1 - Services */}
            <QuestionBlock
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <QuestionHeader>
                <QuestionNumber>1</QuestionNumber>
                <QuestionTitle>Какую услугу вы получили сегодня?</QuestionTitle>
              </QuestionHeader>
              <OptionsGrid>
                {services.map((service, index) => (
                  <OptionCard
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <HiddenInput
                      type="checkbox"
                      checked={formData.services.includes(service.id)}
                      onChange={() => handleServiceToggle(service.id)}
                    />
                    <span style={{ marginRight: '0.75rem', fontSize: '1.25rem', color: '#90b3a7' }}>{service.icon}</span>
                    <OptionText>{service.label}</OptionText>
                  </OptionCard>
                ))}
              </OptionsGrid>
            </QuestionBlock>

            {/* Question 2 - Source */}
            <QuestionBlock
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            >
              <QuestionHeader>
                <QuestionNumber>2</QuestionNumber>
                <QuestionTitle>Как вы узнали о нашем салоне?</QuestionTitle>
              </QuestionHeader>
              <OptionsGrid>
                {sources.map((source, index) => (
                  <OptionCard
                    key={source.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    <HiddenInput
                      type="radio"
                      name="source"
                      checked={formData.source === source.id}
                      onChange={() => setFormData(prev => ({ ...prev, source: source.id }))}
                    />
                    <span style={{ marginRight: '0.75rem', fontSize: '1.25rem', color: '#90b3a7' }}>{source.icon}</span>
                    <OptionText>{source.label}</OptionText>
                  </OptionCard>
                ))}
              </OptionsGrid>
              <AnimatePresence>
                {formData.source === 'other' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ marginTop: '1rem' }}
                  >
                    <TextInput
                      type="text"
                      placeholder="Укажите, пожалуйста..."
                      value={formData.otherSource}
                      onChange={(e) => setFormData(prev => ({ ...prev, otherSource: e.target.value }))}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </QuestionBlock>

            {/* Question 3 - Service Rating */}
            <QuestionBlock
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <QuestionHeader>
                <QuestionNumber>3</QuestionNumber>
                <QuestionTitle>Насколько вы довольны обслуживанием?</QuestionTitle>
              </QuestionHeader>
              <RatingContainer>
                {[1, 2, 3, 4, 5].map((num) => (
                  <RatingButton
                    key={num}
                    $isSelected={formData.serviceRating === String(num)}
                    $showStar={num >= 4}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiddenInput
                      type="radio"
                      name="serviceRating"
                      value={num}
                      checked={formData.serviceRating === String(num)}
                      onChange={(e) => setFormData(prev => ({ ...prev, serviceRating: e.target.value }))}
                    />
                    {num}
                    <FaStar />
                  </RatingButton>
                ))}
              </RatingContainer>
            </QuestionBlock>

            {/* Question 4 - Result Rating */}
            <QuestionBlock
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            >
              <QuestionHeader>
                <QuestionNumber>4</QuestionNumber>
                <QuestionTitle>Насколько вам понравился результат процедуры?</QuestionTitle>
              </QuestionHeader>
              <RatingContainer>
                {[1, 2, 3, 4, 5].map((num) => (
                  <RatingButton
                    key={num}
                    $isSelected={formData.resultRating === String(num)}
                    $showStar={num >= 4}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiddenInput
                      type="radio"
                      name="resultRating"
                      value={num}
                      checked={formData.resultRating === String(num)}
                      onChange={(e) => setFormData(prev => ({ ...prev, resultRating: e.target.value }))}
                    />
                    {num}
                    <FaStar />
                  </RatingButton>
                ))}
              </RatingContainer>
            </QuestionBlock>

            {/* Question 5 - Master Name */}
            <QuestionBlock
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            >
              <QuestionHeader>
                <QuestionNumber>5</QuestionNumber>
                <QuestionTitle>Ваш мастер (если помните имя):</QuestionTitle>
              </QuestionHeader>
              <TextInput
                type="text"
                placeholder="Имя мастера..."
                value={formData.masterName}
                onChange={(e) => setFormData(prev => ({ ...prev, masterName: e.target.value }))}
                whileFocus={{ scale: 1.01 }}
              />
            </QuestionBlock>

            {/* Question 6 - Improvements */}
            <QuestionBlock
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            >
              <QuestionHeader>
                <QuestionNumber>6</QuestionNumber>
                <QuestionTitle>Что можно улучшить?</QuestionTitle>
              </QuestionHeader>
              <TextArea
                placeholder="Ваши предложения и пожелания..."
                value={formData.improvements}
                onChange={(e) => setFormData(prev => ({ ...prev, improvements: e.target.value }))}
                whileFocus={{ scale: 1.01 }}
              />
            </QuestionBlock>

            {/* Question 7 - Offers */}
            <QuestionBlock
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
            >
              <QuestionHeader>
                <QuestionNumber>7</QuestionNumber>
                <QuestionTitle>Хотите получать персональные предложения и акции?</QuestionTitle>
              </QuestionHeader>
              <OptionsGrid>
                <OptionCard
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <HiddenInput
                    type="radio"
                    name="wantsOffers"
                    checked={formData.wantsOffers === true}
                    onChange={() => setFormData(prev => ({ ...prev, wantsOffers: true }))}
                  />
                  <span style={{ marginRight: '0.75rem', fontSize: '1.25rem', color: '#90b3a7' }}><FaCheck /></span>
                  <OptionText>Да, хочу получать</OptionText>
                </OptionCard>
                <OptionCard
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <HiddenInput
                    type="radio"
                    name="wantsOffers"
                    checked={formData.wantsOffers === false}
                    onChange={() => setFormData(prev => ({ ...prev, wantsOffers: false, phoneNumber: '' }))}
                  />
                  <span style={{ marginRight: '0.75rem', fontSize: '1.25rem', color: '#90b3a7' }}><FaTimes /></span>
                  <OptionText>Нет, спасибо</OptionText>
                </OptionCard>
              </OptionsGrid>
              <AnimatePresence>
                {formData.wantsOffers === true && (
                  <AnimatedPhoneInput
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TextInput
                      type="tel"
                      placeholder="Ваш номер телефона..."
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                      whileFocus={{ scale: 1.01 }}
                    />
                  </AnimatedPhoneInput>
                )}
              </AnimatePresence>
            </QuestionBlock>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: '#fee',
                  border: '1px solid #fcc',
                  borderRadius: '8px',
                  padding: '1rem',
                  color: '#c33',
                  textAlign: 'center',
                  marginTop: '2rem'
                }}
              >
                {error}
              </motion.div>
            )}

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить анкету'}
            </SubmitButton>
          </FormContainer>
        </SurveyCard>
      </ContentWrapper>
    </SurveyContainer>
  );
};

export default SurveyPage;