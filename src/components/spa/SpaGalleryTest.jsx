import React from 'react';
import styled from 'styled-components';

const TestSection = styled.div`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%);
  text-align: center;
  color: white;
`;

const TestTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const TestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestCard = styled.div`
  background: white;
  color: black;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const SpaGalleryTest = () => {
  return (
    <TestSection>
      <TestTitle>🎨 ТЕСТОВАЯ ГАЛЕРЕЯ РАБОТАЕТ!</TestTitle>
      <TestGrid>
        <TestCard>
          <h3>Карточка 1</h3>
          <p>Если вы видите это - компонент загружается!</p>
        </TestCard>
        <TestCard>
          <h3>Карточка 2</h3>
          <p>Галерея успешно добавлена</p>
        </TestCard>
        <TestCard>
          <h3>Карточка 3</h3>
          <p>Все работает правильно</p>
        </TestCard>
      </TestGrid>
    </TestSection>
  );
};

export default SpaGalleryTest;