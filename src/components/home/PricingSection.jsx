import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaDumbbell, FaSpa, FaSwimmer, FaClock } from 'react-icons/fa';
import BookingModal from '../booking/BookingModal';

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

/* Category filter pills */
const CategoryTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-bottom: 2rem;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.5rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`;

const CategoryTab = styled.button`
  font-family: 'Jost', sans-serif;
  padding: 0.6rem 1.25rem;
  background: ${props => props.$active ? '#133238' : 'transparent'};
  color: ${props => props.$active ? '#fffef6' : 'rgba(19, 50, 56, 0.5)'};
  border: 1px solid ${props => props.$active ? '#133238' : 'rgba(19, 50, 56, 0.15)'};
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: ${props => props.$active ? '500' : '400'};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;

  svg {
    font-size: 0.85rem;
    opacity: ${props => props.$active ? '1' : '0.5'};
  }

  &:hover {
    color: ${props => props.$active ? '#fffef6' : '#133238'};
    border-color: ${props => props.$active ? '#133238' : 'rgba(19, 50, 56, 0.4)'};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
`;

/* Category info line */
const CategoryInfo = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(19, 50, 56, 0.45);
  margin-bottom: 2rem;
  font-weight: 400;
`;

/* Pricing cards grid */
const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

/* Individual pricing card */
const PricingCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2.25rem 2rem;
  border: 1px solid rgba(19, 50, 56, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transition: all 0.3s ease;

  ${props => props.$featured && `
    border-color: #133238;
  `}

  ${props => props.$popular && `
    border-color: #133238;
    box-shadow: 0 10px 40px rgba(19, 50, 56, 0.08);
  `}

  &:hover {
    border-color: rgba(19, 50, 56, 0.2);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }

  @media (max-width: 768px) {
    padding: 1.75rem 1.5rem;
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 0;
  right: 1.75rem;
  transform: translateY(-50%);
  background: #133238;
  color: #fffef6;
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.45rem 0.9rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  z-index: 2;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #fffef6;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    right: 1.25rem;
    font-size: 0.6rem;
    padding: 0.4rem 0.8rem;
  }
`;


const CardHeader = styled.div`
  margin-bottom: 1.75rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(19, 50, 56, 0.06);
`;

const PlanDuration = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(19, 50, 56, 0.4);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.75rem;
`;

const PlanName = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #133238;
  margin: 0;
  letter-spacing: -0.01em;
  text-transform: uppercase;
`;

const PriceContainer = styled.div`
  margin-bottom: 2rem;
`;

const Price = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 2.75rem;
  font-weight: 800;
  color: #133238;
  line-height: 1;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;

  span {
    font-family: 'Jost', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: rgba(19, 50, 56, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;

    span {
      font-size: 1rem;
    }
  }
`;

const PerMonth = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  color: rgba(19, 50, 56, 0.4);
  margin-top: 0.35rem;
  font-weight: 400;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Feature = styled.li`
  font-family: 'Jost', sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: rgba(19, 50, 56, 0.7);
  font-size: 0.9rem;
  line-height: 1.5;
  font-weight: 400;

  &::before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    min-width: 5px;
    border-radius: 50%;
    background: rgba(19, 50, 56, 0.2);
    margin-top: 0.5rem;
  }
`;

const BookButton = styled.button`
  font-family: 'Jost', sans-serif;
  display: block;
  width: 100%;
  padding: 1rem;
  background: ${props => props.$featured ? '#133238' : 'transparent'};
  color: ${props => props.$featured ? '#fffef6' : '#133238'};
  border: 1px solid ${props => props.$featured ? '#133238' : 'rgba(19, 50, 56, 0.2)'};
  border-radius: 50px;
  text-align: center;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.25s ease;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: auto;
  cursor: pointer;

  &:hover {
    background: ${props => props.$featured ? '#1a4a52' : '#133238'};
    color: #fffef6;
    border-color: ${props => props.$featured ? '#1a4a52' : '#133238'};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const SectionFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const AllPricesLink = styled.button`
  font-family: 'Jost', sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #133238;
  border: 1px solid rgba(19, 50, 56, 0.25);
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    background-color 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.45s cubic-bezier(0.16, 1, 0.3, 1);

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    background: #133238;
    color: #fffef6;
    border-color: #133238;

    svg { transform: translateX(4px); }
  }

  &:active { transform: scale(0.98); }
`;

// === COMPONENT ===

const PricingSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('dayPass');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const goToAllPrices = () => {
    navigate('/services');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBookClick = (plan) => {
    setSelectedPlan(plan);
    setIsBookingModalOpen(true);
  };

  const handleCategoryChange = (category) => {
    const scrollY = window.scrollY;
    setActiveCategory(category);
    setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 0);
  };

  // Pricing data with translations
  const pricingData = {
    dayPass: {
      icon: <FaClock />,
      title: t('pricing.categories.dayPass'),
      subtitle: t('pricing.subtitles.dayPass'),
      plans: [
        {
          name: 'Day Pass',
          duration: t('pricing.durations.fullDay'),
          price: '590',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            t('pricing.features.russianSauna') + ' & ' + t('pricing.features.japanesePool'),
            t('pricing.features.groupSteamIncluded'),
            t('pricing.features.towelsIncluded')
          ],
          perMonth: null,
          popular: true
        },
        {
          name: '1 Week Pass',
          duration: t('pricing.durations.week'),
          price: '1,990',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            t('pricing.features.russianSauna') + ' & ' + t('pricing.features.japanesePool'),
            t('pricing.features.groupSteamIncluded'),
            t('pricing.features.towelsIncluded')
          ],
          perMonth: null
        }
      ]
    },
    clubAccess: {
      icon: <FaDumbbell />,
      title: 'Club Access',
      subtitle: t('pricing.subtitles.withoutBanya'),
      plans: [
        {
          name: 'Club Access',
          duration: t('pricing.durations.month'),
          price: '2,000',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel')
          ],
          perMonth: null
        },
        {
          name: 'Club Access',
          duration: t('pricing.durations.months_3'),
          price: '4,800',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            `${t('pricing.features.savings')} 20%`
          ],
          perMonth: '1,600 ฿/мес',
          featured: false,
          popular: false
        },
        {
          name: 'Club Access',
          duration: t('pricing.durations.months_6'),
          price: '9,900',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            `${t('pricing.features.savings')} 17%`
          ],
          perMonth: '1,650 ฿/мес'
        },
        {
          name: 'Club Access',
          duration: t('pricing.durations.months_12'),
          price: '18,000',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            `${t('pricing.features.maxSavings')} 25%`
          ],
          perMonth: '1,500 ฿/мес'
        }
      ]
    },
    premium: {
      icon: <FaSpa />,
      title: 'Club Access+',
      subtitle: t('pricing.subtitles.allPlusBanya'),
      plans: [
        {
          name: 'Club Access+',
          duration: t('pricing.durations.month'),
          price: '3,800',
          features: [
            t('pricing.features.unlimitedAccess'),
            t('pricing.features.gymAndBanya'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.groupSteamIncluded'),
            t('pricing.features.towelsIncluded')
          ],
          perMonth: null
        },
        {
          name: 'Club Access+',
          duration: t('pricing.durations.months_3'),
          price: '9,400',
          features: [
            t('pricing.features.unlimitedAccess'),
            t('pricing.features.gymAndBanya'),
            t('pricing.features.groupSteamIncluded'),
            t('pricing.features.towelsIncluded'),
            `${t('pricing.features.savings')} 18%`
          ],
          perMonth: '3,133 ฿/мес',
          featured: false,
          popular: false
        },
        {
          name: 'Club Access+',
          duration: t('pricing.durations.months_6'),
          price: '17,800',
          features: [
            t('pricing.features.unlimitedAccess'),
            t('pricing.features.gymAndBanya'),
            t('pricing.features.groupSteamIncluded'),
            t('pricing.features.towelsIncluded'),
            `${t('pricing.features.savings')} 22%`
          ],
          perMonth: '2,967 ฿/мес'
        },
        {
          name: 'Club Access+',
          duration: t('pricing.durations.months_12'),
          price: '29,000',
          features: [
            t('pricing.features.unlimitedAccess'),
            t('pricing.features.gymAndBanya'),
            t('pricing.features.groupSteamIncluded'),
            t('pricing.features.towelsIncluded'),
            `${t('pricing.features.maxSavings')} 36%`
          ],
          perMonth: '2,417 ฿/мес'
        }
      ]
    },
    clubAccessSport: {
      icon: <FaDumbbell />,
      title: 'Club Access Sport',
      subtitle: t('pricing.subtitles.clubAccessSport', 'Club Access+ + групповые тренировки'),
      plans: [
        {
          name: 'Club Access Sport',
          duration: t('pricing.durations.month'),
          price: '4,900',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            t('pricing.features.unlimitedDanceAndFight', 'Неограниченные тренировки в танцевальной студии и файт-клабе')
          ],
          perMonth: null
        }
      ]
    },
    swimming: {
      icon: <FaSwimmer />,
      title: t('pricing.categories.swimming'),
      subtitle: t('pricing.subtitles.swimmingSchool'),
      plans: [
        {
          name: t('pricing.categories.swimming'),
          duration: t('pricing.durations.single'),
          price: '800',
          features: [t('pricing.features.dayAccess'), t('pricing.features.individualApproach'), t('pricing.features.certifiedInstructor')],
          perMonth: null
        },
        {
          name: t('pricing.categories.swimming'),
          duration: t('pricing.durations.classes_8'),
          price: '3,800',
          features: [`475 ฿ ${t('pricing.features.perClass')}`, t('pricing.features.validMonths_2'), t('pricing.features.trainingProgram'), `${t('pricing.features.savings')} 41%`],
          perMonth: null,
          featured: false,
          popular: false
        },
        {
          name: t('pricing.categories.swimming'),
          duration: t('pricing.durations.classes_12'),
          price: '5,500',
          features: [`458 ฿ ${t('pricing.features.perClass')}`, t('pricing.features.validMonths_3'), t('pricing.features.fullProgram'), `${t('pricing.features.savings')} 43%`],
          perMonth: null
        }
      ]
    }
  };

  const categories = [
    { key: 'dayPass', label: t('pricing.categories.dayPass'), icon: <FaClock /> },
    { key: 'clubAccess', label: t('pricing.categories.clubAccess'), icon: <FaDumbbell /> },
    { key: 'premium', label: t('pricing.categories.clubAccessPlus'), icon: <FaSpa /> },
    { key: 'clubAccessSport', label: 'Club Access Sport', icon: <FaDumbbell /> },
    { key: 'swimming', label: t('pricing.categories.swimming'), icon: <FaSwimmer /> }
  ];

  const currentCategory = pricingData[activeCategory];

  return (
    <SectionContainer id="pricing">
      <ContentWrapper>
        <Overline>{t('pricing.overline', 'Memberships')}</Overline>
        <Title>{t('pricing.title')}</Title>
        <Subtitle>{t('pricing.subtitle')}</Subtitle>

        <CategoryTabs>
          {categories.map((category) => (
            <CategoryTab
              key={category.key}
              $active={activeCategory === category.key}
              onClick={() => handleCategoryChange(category.key)}
            >
              {category.icon}
              {category.label}
            </CategoryTab>
          ))}
        </CategoryTabs>

        {currentCategory.subtitle && (
          <CategoryInfo>{currentCategory.subtitle}</CategoryInfo>
        )}

        <PricingGrid>
          {currentCategory.plans.map((plan, index) => (
            <PricingCard
              key={`${activeCategory}-${index}`}
              $featured={plan.featured}
              $popular={plan.popular}
            >
              {plan.popular && (
                <PopularBadge>{t('pricing.mostPopular', 'Most Popular')}</PopularBadge>
              )}
              <CardHeader>
                <PlanDuration>{plan.duration}</PlanDuration>
                <PlanName>{plan.name}</PlanName>
              </CardHeader>

              <PriceContainer>
                <Price>
                  {plan.price} <span>฿</span>
                </Price>
                {plan.perMonth && (
                  <PerMonth>{plan.perMonth}</PerMonth>
                )}
              </PriceContainer>

              <FeatureList>
                {plan.features.map((feature, idx) => (
                  <Feature key={idx}>
                    {feature}
                  </Feature>
                ))}
              </FeatureList>

              <BookButton
                onClick={() => handleBookClick(plan)}
                $featured={plan.featured}
              >
                {t('pricing.select_plan')}
              </BookButton>
            </PricingCard>
          ))}
        </PricingGrid>

        <SectionFooter>
          <AllPricesLink onClick={goToAllPrices}>
            {t('pricing.view_all_prices', 'Все услуги и цены')}
            <svg viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </AllPricesLink>
        </SectionFooter>
      </ContentWrapper>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={selectedPlan ? `${selectedPlan.name} - ${selectedPlan.duration}` : ''}
        source="Home - Pricing"
      />
    </SectionContainer>
  );
};

export default PricingSection;
