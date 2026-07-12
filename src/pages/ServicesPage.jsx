import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaDumbbell, FaSpa, FaSwimmer, FaClock, FaFire, FaCut, FaPaintBrush, FaLeaf,
  FaHandSparkles, FaRegHandPaper, FaUserTie, FaEye, FaFeather, FaGem,
  FaLayerGroup, FaLemon, FaUsers, FaCrown, FaBolt, FaRunning, FaFlask
} from 'react-icons/fa';

import PageScrollReset from '../components/common/PageScrollReset';
import PageHead from '../components/layout/PageHead';
import BookingModal from '../components/booking/BookingModal';
import ParallaxBackground from '../components/common/ParallaxBackground';
import { getSpaData } from '../components/spa/data/spaData';

// === STYLED COMPONENTS — Pasture / KAIF minimalist style ===

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  overflow: hidden;
  background: #000;

  @media (max-width: 768px) {
    min-height: 520px;
    height: 85vh;
    height: 85dvh;
  }
`;

const HeroImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('/images/home/terrace.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.45) 50%,
    rgba(0, 0, 0, 0.55) 100%
  );
  z-index: 2;
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 3;
  max-width: 820px;
  margin: 0 auto;
  padding: 0 1.25rem;
`;

const AccordionSection = styled.section`
  background-color: #fffef6;
  padding: 2rem 0 5rem;

  @media (min-width: 768px) {
    padding: 3rem 0 7rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
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
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(255, 255, 255, 0.5);
  }

  &::before { margin-right: 1rem; }
  &::after { margin-left: 1rem; }
`;

const HeroTitle = styled.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0 0 1.5rem;
`;

const HeroSubtitle = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  margin: 0 auto;
  max-width: 620px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

/* === Accordion === */

const AccordionList = styled.div`
  border-top: 1px solid rgba(19, 50, 56, 0.12);
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid rgba(19, 50, 56, 0.12);
`;

const AccordionHeader = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: 56px 1fr auto;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr auto;
    gap: 1rem;
    padding: 1.5rem 0.25rem;
  }
`;

const ItemNumber = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(19, 50, 56, 0.4);
  letter-spacing: 0.1em;
  transition: color 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${AccordionHeader}:hover & { color: #133238; }

  @media (max-width: 768px) { font-size: 0.7rem; }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;

  ${AccordionHeader}:hover & { transform: translateX(10px); }

  @media (max-width: 768px) {
    ${AccordionHeader}:hover & { transform: translateX(6px); }
  }
`;

const CategoryTitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.35rem, 3.2vw, 2.25rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0;
`;

const CategorySubtitle = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;

  @media (max-width: 768px) { font-size: 0.85rem; }
`;

const HeaderMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 768px) { gap: 0.75rem; }
`;

const CountPill = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.55);
  padding: 0.4rem 0.9rem;
  border: 1px solid rgba(19, 50, 56, 0.15);
  border-radius: 50px;
  white-space: nowrap;
  transition:
    color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${AccordionHeader}:hover & {
    color: #133238;
    border-color: rgba(19, 50, 56, 0.35);
  }

  @media (max-width: 768px) { display: none; }
`;

const ChevronWrap = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(19, 50, 56, 0.2);
  border-radius: 50%;
  color: #133238;
  flex-shrink: 0;
  transition:
    background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${AccordionHeader}:hover & {
    border-color: rgba(19, 50, 56, 0.6);
    background-color: rgba(19, 50, 56, 0.06);
  }

  @media (max-width: 768px) { width: 32px; height: 32px; }
`;

const AccordionBody = styled(motion.div)`
  overflow: hidden;
`;

const AccordionInner = styled.div`
  padding: 0.25rem 0 3rem;

  @media (max-width: 768px) { padding: 0.25rem 0 2rem; }
`;

/* === Sub-category pills === */

const CategoryTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.4rem;
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
  padding: 0.55rem 1.15rem;
  background: ${props => props.$active ? '#133238' : 'transparent'};
  color: ${props => props.$active ? '#fffef6' : 'rgba(19, 50, 56, 0.55)'};
  border: 1px solid ${props => props.$active ? '#133238' : 'rgba(19, 50, 56, 0.15)'};
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: ${props => props.$active ? '500' : '400'};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;

  svg { font-size: 0.85rem; opacity: ${props => props.$active ? '1' : '0.5'}; }

  &:hover {
    color: ${props => props.$active ? '#fffef6' : '#133238'};
    border-color: ${props => props.$active ? '#133238' : 'rgba(19, 50, 56, 0.4)'};
  }
`;

/* === Pricing Grid & Card === */

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PricingCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem 1.75rem;
  border: 1px solid rgba(19, 50, 56, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transition: all 0.3s ease;

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
  right: 1.5rem;
  transform: translateY(-50%);
  background: #133238;
  color: #fffef6;
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.4rem 0.85rem;
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
`;

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(19, 50, 56, 0.06);
`;

const PlanDuration = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.72rem;
  color: rgba(19, 50, 56, 0.4);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 0.6rem;
`;

const PlanName = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: #133238;
  margin: 0;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  line-height: 1.2;
`;

const PriceContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const PriceFrom = styled.span`
  display: block;
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 0.35rem;
`;

const Price = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 2.3rem;
  font-weight: 800;
  color: #133238;
  line-height: 1;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  flex-wrap: wrap;

  span.currency {
    font-family: 'Jost', sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    color: rgba(19, 50, 56, 0.4);
  }

  span.range {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: rgba(19, 50, 56, 0.35);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    span.currency { font-size: 1rem; }
    span.range { font-size: 1.3rem; }
  }
`;

const PerMonth = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.82rem;
  color: rgba(19, 50, 56, 0.4);
  margin-top: 0.35rem;
  font-weight: 400;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Feature = styled.li`
  font-family: 'Jost', sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: rgba(19, 50, 56, 0.7);
  font-size: 0.88rem;
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
  padding: 0.9rem;
  background: ${props => props.$featured ? '#133238' : 'transparent'};
  color: ${props => props.$featured ? '#fffef6' : '#133238'};
  border: 1px solid ${props => props.$featured ? '#133238' : 'rgba(19, 50, 56, 0.2)'};
  border-radius: 50px;
  text-align: center;
  font-weight: 500;
  transition: all 0.25s ease;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: auto;
  cursor: pointer;

  &:hover {
    background: ${props => props.$featured ? '#1a4a52' : '#133238'};
    color: #fffef6;
    border-color: ${props => props.$featured ? '#1a4a52' : '#133238'};
  }
  &:active { transform: scale(0.98); }
`;

/* === Final CTA === */

const CTASection = styled.section`
  position: relative;
  background-color: #133238;
  padding: 7rem 0;
  text-align: center;
  color: #fffef6;
  overflow: hidden;
  isolation: isolate;
`;

const CTAOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 2;
`;

const CTATitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
  text-transform: uppercase;
  color: #fffef6;
`;

const CTASubtitle = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 254, 246, 0.7);
  max-width: 500px;
  margin: 0 auto 2rem;
`;

const CTAButton = styled.button`
  font-family: 'Jost', sans-serif;
  padding: 1rem 2.5rem;
  background: #fffef6;
  color: #133238;
  border: 1px solid #fffef6;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover { background: transparent; color: #fffef6; }
`;

// === HELPERS ===

const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const parseBanyaPrice = (priceStr) => {
  if (!priceStr) return '';
  const match = String(priceStr).match(/([\d.,]+)/);
  return match ? match[1] : priceStr;
};

const fmt = (n) => (typeof n === 'number' ? n.toLocaleString('ru-RU') : n);

// Build a plan object from a SPA service (spaData)
const spaServiceToPlan = (s, t) => {
  let overline;
  let priceNode;
  const features = [];

  if (s.description) features.push(s.description);

  if (s.durations && s.durations.length > 0) {
    const durStr = s.durations.join(' / ') + ` ${t('services_page.min', 'мин')}`;
    overline = durStr;
    if (s.durations.length > 1) {
      features.push(t('services_page.features.multi_duration', 'Выбор длительности'));
    }
  }

  if (s.priceFrom != null) {
    priceNode = { value: fmt(s.priceFrom), from: true };
    overline = overline || t('services_page.from_label', 'От');
  } else if (s.price != null) {
    priceNode = { value: fmt(s.price) };
  } else if (s.prices && s.prices.length > 0) {
    const lo = s.prices[0];
    const hi = s.prices[s.prices.length - 1];
    if (lo === hi) {
      priceNode = { value: fmt(lo) };
    } else {
      priceNode = { value: fmt(lo), range: fmt(hi) };
    }
  } else {
    priceNode = { value: '—' };
  }

  if (!overline) overline = t('services_page.per_visit', 'За визит');

  return {
    id: s.id,
    overline,
    name: s.name,
    price: priceNode,
    features,
    popular: Boolean(s.popular)
  };
};

// Keep at most ONE `popular: true` per group (the first one marked as popular)
const capPopular = (plans) => {
  let taken = false;
  return plans.map(p => {
    if (p.popular && !taken) { taken = true; return p; }
    return p.popular ? { ...p, popular: false } : p;
  });
};

// Build a plan object from a banya ritual
const banyaRitualToPlan = (r, t) => ({
  id: r.id,
  overline: r.subtitle,
  name: r.title,
  price: { value: parseBanyaPrice(r.price) },
  features: [r.description, `${r.duration} ${t('services_page.duration_label', 'длительность')}`].filter(Boolean),
  popular: false
});

// === Accordion item ===

const CategoryAccordion = ({ index, title, subtitle, count, isOpen, onToggle, children }) => (
  <AccordionItem>
    <AccordionHeader onClick={onToggle} aria-expanded={isOpen}>
      <ItemNumber>{String(index).padStart(2, '0')}</ItemNumber>
      <HeaderContent>
        <CategoryTitle>{title}</CategoryTitle>
        {subtitle && <CategorySubtitle>{subtitle}</CategorySubtitle>}
      </HeaderContent>
      <HeaderMeta>
        {typeof count === 'number' && count > 0 && <CountPill>{count}</CountPill>}
        <ChevronWrap
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Chevron />
        </ChevronWrap>
      </HeaderMeta>
    </AccordionHeader>

    <AnimatePresence initial={false}>
      {isOpen && (
        <AccordionBody
          key="body"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <AccordionInner>{children}</AccordionInner>
        </AccordionBody>
      )}
    </AnimatePresence>
  </AccordionItem>
);

// === Reusable: SubTabs + PricingGrid ===

const PlanCard = ({ plan, selectLabel, onSelect }) => (
  <PricingCard $popular={plan.popular}>
    {plan.popular && <PopularBadge>{selectLabel.popular}</PopularBadge>}
    <CardHeader>
      <PlanDuration>{plan.overline}</PlanDuration>
      <PlanName>{plan.name}</PlanName>
    </CardHeader>

    <PriceContainer>
      <Price>
        {plan.price.from && <PriceFrom>{selectLabel.from}</PriceFrom>}
        {plan.price.value} <span className="currency">฿</span>
        {plan.price.range && <span className="range">– {plan.price.range}</span>}
      </Price>
      {plan.perMonth && <PerMonth>{plan.perMonth}</PerMonth>}
    </PriceContainer>

    <FeatureList>
      {plan.features.map((f, idx) => <Feature key={idx}>{f}</Feature>)}
    </FeatureList>

    <BookButton $featured={plan.popular} onClick={() => onSelect(plan)}>
      {selectLabel.button}
    </BookButton>
  </PricingCard>
);

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] }
  }
};

const MotionCard = styled(motion.div)`
  display: flex;
  height: 100%;

  & > * { width: 100%; }
`;

const TabbedGrid = ({ groups, activeKey, onTabChange, selectLabel, onSelect }) => {
  const showTabs = groups.length > 1;
  const current = groups.find(g => g.key === activeKey) || groups[0];

  return (
    <>
      {showTabs && (
        <CategoryTabs>
          {groups.map((g) => (
            <CategoryTab
              key={g.key}
              $active={activeKey === g.key}
              onClick={() => onTabChange(g.key)}
            >
              {g.icon}
              {g.label}
            </CategoryTab>
          ))}
        </CategoryTabs>
      )}

      <AnimatePresence mode="wait" initial={false}>
        <PricingGrid
          as={motion.div}
          key={current.key}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {current.plans.map((plan) => (
            <MotionCard
              key={plan.id || plan.name}
              variants={cardVariants}
            >
              <PlanCard
                plan={plan}
                selectLabel={selectLabel}
                onSelect={onSelect}
              />
            </MotionCard>
          ))}
        </PricingGrid>
      </AnimatePresence>
    </>
  );
};

// === PAGE COMPONENT ===

const ServicesPage = () => {
  const { t } = useTranslation();
  const [openIds, setOpenIds] = useState(() => new Set(['memberships']));
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [tabs, setTabs] = useState({});

  const { allServices } = useMemo(() => getSpaData(t), [t]);

  const byCat = useCallback((...cats) => allServices.filter(s => cats.includes(s.category)), [allServices]);

  // === Build groups for each section ===

  const membershipsGroups = useMemo(() => ([
    {
      key: 'dayPass',
      label: t('pricing.categories.dayPass', 'Day Pass'),
      icon: <FaClock />,
      plans: [
        {
          id: 'day-pass', name: 'Day Pass',
          overline: t('pricing.durations.fullDay', 'Полный день'),
          price: { value: '590' },
          features: [
            t('pricing.features.gymCardio', 'Тренажерный зал и кардио'),
            t('pricing.features.swimmingPool', 'Бассейн'),
            t('pricing.features.steamRoom', 'Парная и сауна'),
            t('pricing.features.iceBarrel', 'Купель и ледяная бочка'),
            t('pricing.features.groupSteamIncluded', 'Групповое парение включено'),
            t('pricing.features.towelsIncluded', 'Полотенца включены')
          ],
          popular: true
        },
        {
          id: 'week-pass', name: '1 Week Pass',
          overline: t('pricing.durations.week', '1 неделя'),
          price: { value: '1,990' },
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            t('pricing.features.groupSteamIncluded'),
            t('pricing.features.towelsIncluded')
          ]
        }
      ]
    },
    {
      key: 'clubAccess',
      label: 'Club Access',
      icon: <FaDumbbell />,
      plans: [
        { id: 'ca-1m',  name: 'Club Access', overline: t('pricing.durations.month', '1 месяц'),    price: { value: '2,000' },
          features: [t('pricing.features.gymCardio'), t('pricing.features.swimmingPool'), t('pricing.features.steamRoom'), t('pricing.features.iceBarrel')] },
        { id: 'ca-3m',  name: 'Club Access', overline: t('pricing.durations.months_3', '3 месяца'), price: { value: '4,800' }, perMonth: '1,600 ฿/мес',
          features: [t('pricing.features.gymCardio'), t('pricing.features.swimmingPool'), t('pricing.features.steamRoom'), `${t('pricing.features.savings', 'Экономия')} 20%`] },
        { id: 'ca-6m',  name: 'Club Access', overline: t('pricing.durations.months_6', '6 месяцев'), price: { value: '9,900' }, perMonth: '1,650 ฿/мес',
          features: [t('pricing.features.gymCardio'), t('pricing.features.swimmingPool'), t('pricing.features.steamRoom'), `${t('pricing.features.savings', 'Экономия')} 17%`] },
        { id: 'ca-12m', name: 'Club Access', overline: t('pricing.durations.months_12', '12 месяцев'), price: { value: '18,000' }, perMonth: '1,500 ฿/мес',
          features: [t('pricing.features.gymCardio'), t('pricing.features.swimmingPool'), t('pricing.features.steamRoom'), `${t('pricing.features.maxSavings', 'Макс. экономия')} 25%`],
          popular: true }
      ]
    },
    {
      key: 'premium',
      label: 'Club Access+',
      icon: <FaSpa />,
      plans: [
        { id: 'cap-1m',  name: 'Club Access+', overline: t('pricing.durations.month'),     price: { value: '3,800' },
          features: [t('pricing.features.unlimitedAccess', 'Безлимитный доступ'), t('pricing.features.gymAndBanya', 'Зал и баня'), t('pricing.features.swimmingPool'), t('pricing.features.groupSteamIncluded'), t('pricing.features.towelsIncluded')] },
        { id: 'cap-3m',  name: 'Club Access+', overline: t('pricing.durations.months_3'),  price: { value: '9,400' },  perMonth: '3,133 ฿/мес',
          features: [t('pricing.features.unlimitedAccess'), t('pricing.features.gymAndBanya'), t('pricing.features.groupSteamIncluded'), `${t('pricing.features.savings')} 18%`] },
        { id: 'cap-6m',  name: 'Club Access+', overline: t('pricing.durations.months_6'),  price: { value: '17,800' }, perMonth: '2,967 ฿/мес',
          features: [t('pricing.features.unlimitedAccess'), t('pricing.features.gymAndBanya'), t('pricing.features.groupSteamIncluded'), `${t('pricing.features.savings')} 22%`] },
        { id: 'cap-12m', name: 'Club Access+', overline: t('pricing.durations.months_12'), price: { value: '29,000' }, perMonth: '2,417 ฿/мес',
          features: [t('pricing.features.unlimitedAccess'), t('pricing.features.gymAndBanya'), t('pricing.features.groupSteamIncluded'), `${t('pricing.features.maxSavings')} 36%`],
          popular: true }
      ]
    },
    {
      key: 'clubAccessSport',
      label: 'Club Access Sport',
      icon: <FaFire />,
      plans: [
        {
          id: 'cas-1m', name: 'Club Access Sport',
          overline: t('pricing.durations.month'), price: { value: '4,900' },
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            t('pricing.features.unlimitedDanceAndFight', 'Неограниченные тренировки в танцевальной студии и файт-клабе')
          ],
          popular: true
        }
      ]
    },
    {
      key: 'swimming',
      label: t('pricing.categories.swimming', 'Плавание'),
      icon: <FaSwimmer />,
      plans: [
        { id: 'sw-1',  name: t('pricing.categories.swimming'), overline: t('pricing.durations.single', 'Разовое'),    price: { value: '800' },
          features: [t('pricing.features.individualApproach', 'Индивидуальный подход'), t('pricing.features.certifiedInstructor', 'Сертифицированный инструктор')] },
        { id: 'sw-8',  name: t('pricing.categories.swimming'), overline: t('pricing.durations.classes_8', '8 занятий'), price: { value: '3,800' },
          features: [`475 ฿ ${t('pricing.features.perClass', 'за занятие')}`, t('pricing.features.validMonths_2', 'Действует 2 месяца'), t('pricing.features.trainingProgram', 'Программа тренировок'), `${t('pricing.features.savings')} 41%`] },
        { id: 'sw-12', name: t('pricing.categories.swimming'), overline: t('pricing.durations.classes_12', '12 занятий'), price: { value: '5,500' },
          features: [`458 ฿ ${t('pricing.features.perClass', 'за занятие')}`, t('pricing.features.validMonths_3', 'Действует 3 месяца'), t('pricing.features.fullProgram', 'Полная программа'), `${t('pricing.features.savings')} 43%`],
          popular: true }
      ]
    }
  ]), [t]);

  // BANYA — grouped by style
  const banyaGroups = useMemo(() => {
    const r = (id) => ({
      id,
      title: t(`banya.services.rituals.${id}.title`),
      subtitle: t(`banya.services.rituals.${id}.subtitle`),
      duration: t(`banya.services.rituals.${id}.duration`),
      price: t(`banya.services.rituals.${id}.price`),
      description: t(`banya.services.rituals.${id}.description`)
    });
    const toPlan = (ids) => ids.map(id => banyaRitualToPlan(r(id), t));
    return [
      { key: 'classic',   label: t('services_page.banya_groups.classic', 'Классика'),   icon: <FaLeaf />,
        plans: toPlan(['intro', 'lady', 'classic']).map((p, i) => ({ ...p, popular: i === 2 })) },
      { key: 'intense',   label: t('services_page.banya_groups.intense', 'Интенсив'),   icon: <FaFire />,
        plans: toPlan(['artesian', 'gravity', 'salt_fire', 'warrior_path', 'stalwar']).map((p, i) => ({ ...p, popular: i === 0 })) },
      { key: 'signature', label: t('services_page.banya_groups.signature', 'Авторские'), icon: <FaCrown />,
        plans: toPlan(['sports', 'four_hands', 'honey', 'valhalla', 'royal']).map((p, i) => ({ ...p, popular: i === 4 })) }
    ];
  }, [t]);

  const massageGroups = useMemo(() => {
    const svc = byCat('massage');
    const pickById = (ids) => capPopular(ids.map(id => svc.find(s => s.id === id)).filter(Boolean).map(s => spaServiceToPlan(s, t)));
    return [
      { key: 'relax',       label: t('services_page.massage_groups.relax', 'Расслабляющий'),   icon: <FaLeaf />,
        plans: pickById(['thai-massage', 'oil-massage', 'oil-scrub', 'foot-massage', 'face-massage']) },
      { key: 'therapeutic', label: t('services_page.massage_groups.therapeutic', 'Лечебный'),   icon: <FaBolt />,
        plans: pickById(['deep-thai', 'sport-massage', 'shoulders-legs']) },
      { key: 'express',     label: t('services_page.massage_groups.express', 'Экспресс'),       icon: <FaClock />,
        plans: pickById(['body-scrub']) }
    ];
  }, [byCat, t]);

  const hairGroups = useMemo(() => {
    const svc = byCat('hair-care');
    const pickById = (ids) => capPopular(ids.map(id => svc.find(s => s.id === id)).filter(Boolean).map(s => spaServiceToPlan(s, t)));
    return [
      { key: 'cuts',     label: t('services_page.hair_groups.cuts', 'Стрижки'),         icon: <FaCut />,
        plans: pickById(['haircut', 'bang-trim']) },
      { key: 'coloring', label: t('services_page.hair_groups.coloring', 'Окрашивание'), icon: <FaPaintBrush />,
        plans: pickById(['root-coloring', 'root-coloring-stretch', 'coloring-short', 'coloring-medium', 'coloring-long', 'total-blond-short', 'total-blond-medium', 'total-blond-long']) },
      { key: 'care',     label: t('services_page.hair_groups.care', 'Уход'),            icon: <FaLeaf />,
        plans: pickById(['happiness-short', 'happiness-medium', 'happiness-long', 'express-hair-care', 'vietnamese-head-massage']) }
    ];
  }, [byCat, t]);

  const nailsGroups = useMemo(() => ([
    { key: 'manicure',     label: t('spa.services.categories.manicure', 'Маникюр'),        icon: <FaHandSparkles />,
      plans: capPopular(byCat('manicure').map(s => spaServiceToPlan(s, t))) },
    { key: 'pedicure',     label: t('spa.services.categories.pedicure', 'Педикюр'),        icon: <FaRegHandPaper />,
      plans: capPopular(byCat('pedicure').map(s => spaServiceToPlan(s, t))) },
    { key: 'pro-pedicure', label: t('spa.services.categories.pro-pedicure', 'PRO мастер'), icon: <FaUserTie />,
      plans: capPopular(byCat('pro-pedicure').map(s => spaServiceToPlan(s, t))) }
  ]), [byCat, t]);

  const browsGroups = useMemo(() => ([
    { key: 'eyelashes', label: t('spa.services.categories.eyelashes', 'Ресницы'), icon: <FaFeather />,
      plans: capPopular(byCat('eyelashes').map(s => spaServiceToPlan(s, t))) },
    { key: 'brows',     label: t('spa.services.categories.brows', 'Брови'),       icon: <FaEye />,
      plans: capPopular(byCat('brows').map(s => spaServiceToPlan(s, t))) }
  ]), [byCat, t]);

  const laserGroups = useMemo(() => ([
    { key: 'laser',            label: t('spa.services.categories.laser', 'Лазерная эпиляция'),  icon: <FaGem />,
      plans: capPopular(byCat('laser').map(s => spaServiceToPlan(s, t))) },
    { key: 'laser-complex-3',  label: t('services_page.laser_groups.complex3', 'Комплекс • 3'), icon: <FaLayerGroup />,
      plans: capPopular(byCat('laser-complex-3').map(s => spaServiceToPlan(s, t))) },
    { key: 'laser-complex-5',  label: t('services_page.laser_groups.complex5', 'Комплекс • 5'), icon: <FaLayerGroup />,
      plans: capPopular(byCat('laser-complex-5').map(s => spaServiceToPlan(s, t))) },
    { key: 'endosphere',       label: t('spa.services.categories.endosphere', 'Эндосфера'),     icon: <FaFlask />,
      plans: capPopular(byCat('endosphere').map(s => spaServiceToPlan(s, t))) }
  ]), [byCat, t]);

  const toggle = useCallback((id) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);

  const openBooking = useCallback((plan) => {
    const label = typeof plan === 'string' ? plan : `${plan.name}${plan.overline ? ' — ' + plan.overline : ''}`;
    setSelectedItem(label);
    setIsBookingOpen(true);
  }, []);

  const getTab = (section, fallback) => tabs[section] || fallback;
  const setTab = (section) => (key) => setTabs(prev => ({ ...prev, [section]: key }));

  const selectLabel = useMemo(() => ({
    button: t('pricing.select_plan', 'Выбрать'),
    popular: t('pricing.mostPopular', 'Most Popular'),
    from: t('services_page.from_label', 'От')
  }), [t]);

  const membershipsTotal = membershipsGroups.reduce((a, g) => a + g.plans.length, 0);
  const banyaTotal       = banyaGroups.reduce((a, g) => a + g.plans.length, 0);
  const massageTotal     = massageGroups.reduce((a, g) => a + g.plans.length, 0);
  const hairTotal        = hairGroups.reduce((a, g) => a + g.plans.length, 0);
  const nailsTotal       = nailsGroups.reduce((a, g) => a + g.plans.length, 0);
  const browsTotal       = browsGroups.reduce((a, g) => a + g.plans.length, 0);
  const laserTotal       = laserGroups.reduce((a, g) => a + g.plans.length, 0);

  const categories = [
    { id: 'memberships', title: t('services_page.titles.memberships'), subtitle: t('services_page.subtitles.memberships'), count: membershipsTotal,
      groups: membershipsGroups, defaultTab: 'dayPass' },
    { id: 'banya',       title: t('services_page.titles.banya'),       subtitle: t('services_page.subtitles.banya'),       count: banyaTotal,
      groups: banyaGroups, defaultTab: 'classic' },
    { id: 'massage',     title: t('services_page.titles.massage'),     subtitle: t('services_page.subtitles.massage'),     count: massageTotal,
      groups: massageGroups, defaultTab: 'relax' },
    { id: 'hair',        title: t('services_page.titles.hair'),        subtitle: t('services_page.subtitles.hair'),        count: hairTotal,
      groups: hairGroups, defaultTab: 'cuts' },
    { id: 'nails',       title: t('services_page.titles.nails'),       subtitle: t('services_page.subtitles.nails'),       count: nailsTotal,
      groups: nailsGroups, defaultTab: 'manicure' },
    { id: 'brows',       title: t('services_page.titles.brows'),       subtitle: t('services_page.subtitles.brows'),       count: browsTotal,
      groups: browsGroups, defaultTab: 'eyelashes' },
    { id: 'laser',       title: t('services_page.titles.laser'),       subtitle: t('services_page.subtitles.laser'),       count: laserTotal,
      groups: laserGroups, defaultTab: 'laser' }
  ];

  return (
    <>
      <PageHead
        titleKey="page_titles.services"
        defaultTitle="Услуги и цены | KAIF"
        description={t('services_page.meta_description')}
        keywords="KAIF услуги, цены, абонементы, прайс, баня, СПА, массаж"
      />
      <PageScrollReset />

      <HeroSection>
        <HeroImage />
        <HeroOverlay />
        <HeroInner>
          <Overline>{t('services_page.overline')}</Overline>
          <HeroTitle>{t('services_page.title')}</HeroTitle>
          <HeroSubtitle>
            {t('services_page.subtitle', 'Выберите категорию, чтобы увидеть полный список услуг и цен.')}
          </HeroSubtitle>
        </HeroInner>
      </HeroSection>

      <AccordionSection>
        <ContentWrapper>
          <AccordionList>
            {categories.map((c, i) => (
              <CategoryAccordion
                key={c.id}
                index={i + 1}
                title={c.title}
                subtitle={c.subtitle}
                count={c.count}
                isOpen={openIds.has(c.id)}
                onToggle={() => toggle(c.id)}
              >
                <TabbedGrid
                  groups={c.groups}
                  activeKey={getTab(c.id, c.defaultTab)}
                  onTabChange={setTab(c.id)}
                  selectLabel={selectLabel}
                  onSelect={openBooking}
                />
              </CategoryAccordion>
            ))}
          </AccordionList>
        </ContentWrapper>
      </AccordionSection>

      <CTASection>
        <ParallaxBackground src="/images/hero/spa.webp" />
        <CTAOverlay />
        <CTAContent>
          <ContentWrapper>
            <CTATitle>{t('services_page.cta.title')}</CTATitle>
            <CTASubtitle>{t('services_page.cta.subtitle')}</CTASubtitle>
            <CTAButton onClick={() => openBooking(t('services_page.cta.source', 'Консультация по услугам'))}>
              {t('services_page.cta.button')}
            </CTAButton>
          </ContentWrapper>
        </CTAContent>
      </CTASection>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        service={selectedItem || ''}
        source="Services Page"
      />
    </>
  );
};

export default ServicesPage;
