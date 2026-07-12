import React, { useState, useMemo, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { getRestaurantData } from '../data/restaurantData';

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
  margin: 0 0 3rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

/* Category Tabs */
const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 3rem;
`;

const CategoryTab = styled.button`
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.25s ease;
  white-space: nowrap;

  background: ${props => props.$active ? '#133238' : 'transparent'};
  color: ${props => props.$active ? '#fffef6' : 'rgba(19, 50, 56, 0.5)'};
  border: 1px solid ${props => props.$active ? '#133238' : 'rgba(19, 50, 56, 0.12)'};

  &:hover {
    border-color: ${props => props.$active ? '#133238' : 'rgba(19, 50, 56, 0.3)'};
    color: ${props => props.$active ? '#fffef6' : '#133238'};
  }
`;

/* Dish List */
const DishListInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  opacity: ${props => props.$visible ? '1' : '0'};
  transform: translateY(${props => props.$visible ? '0' : '8px'});
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const DishListHeader = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(19, 50, 56, 0.08);
`;

const DishListTitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: #133238;
  margin: 0;
`;

const DishItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 1.25rem 0;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const DishInfo = styled.div`
  flex: 1;
`;

const DishName = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: #133238;
  display: block;
  margin-bottom: 0.25rem;
`;

const DishDescription = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(19, 50, 56, 0.5);
  display: block;
  line-height: 1.5;
`;

const DishPrice = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: #133238;
  letter-spacing: -0.02em;
  white-space: nowrap;
  flex-shrink: 0;
`;

const DishDivider = styled.div`
  height: 1px;
  background-color: rgba(19, 50, 56, 0.06);
`;

// === COMPONENT ===

const MenuCategoryGrid = () => {
  const { t } = useTranslation();
  const { categoryCards, getMenuByCategory } = getRestaurantData(t);
  const menuByCategory = getMenuByCategory();

  const [activeCategory, setActiveCategory] = useState(categoryCards[0]?.key || 'breakfast');
  const [visible, setVisible] = useState(true);
  const pendingCategory = useRef(null);

  const handleCategoryChange = useCallback((key) => {
    if (key === activeCategory) return;
    pendingCategory.current = key;
    setVisible(false);
    setTimeout(() => {
      setActiveCategory(pendingCategory.current);
      setVisible(true);
    }, 250);
  }, [activeCategory]);

  const activeCategoryData = categoryCards.find(c => c.key === activeCategory);
  const activeDishes = menuByCategory[activeCategory] || [];

  // Fixed min-height based on the largest category to prevent layout shift
  const maxDishCount = useMemo(() => {
    return Math.max(...Object.values(menuByCategory).map(arr => arr.length), 0);
  }, [menuByCategory]);

  return (
    <SectionContainer id="menu">
      <ContentWrapper>
        <Overline>{t('restaurant.hero.badge', 'Our Restaurant')}</Overline>
        <Title>{t('restaurant.menu.title', 'Our Menu')}</Title>
        <Subtitle>
          {t('restaurant.hero.subtitle_pasture',
            'Discover a variety of flavors crafted by our talented chefs using the finest ingredients')}
        </Subtitle>

        <CategoryTabs>
          {categoryCards.map((cat) => (
            <CategoryTab
              key={cat.key}
              $active={activeCategory === cat.key}
              onClick={() => handleCategoryChange(cat.key)}
            >
              {cat.name}
            </CategoryTab>
          ))}
        </CategoryTabs>

        <DishListInner $visible={visible} style={{ minHeight: `${maxDishCount * 76 + 60}px` }}>
          <DishListHeader>
            <DishListTitle>{activeCategoryData?.name}</DishListTitle>
          </DishListHeader>

          {activeDishes.map((dish, i) => (
            <React.Fragment key={dish.id}>
              <DishItem>
                <DishInfo>
                  <DishName>{dish.name}</DishName>
                  {dish.description && (
                    <DishDescription>{dish.description}</DishDescription>
                  )}
                </DishInfo>
                <DishPrice>{dish.price}</DishPrice>
              </DishItem>
              {i < activeDishes.length - 1 && <DishDivider />}
            </React.Fragment>
          ))}
        </DishListInner>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default MenuCategoryGrid;
