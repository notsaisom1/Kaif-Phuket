import React, { memo, useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import PageHead from '../components/layout/PageHead';
import PageScrollReset from '../components/common/PageScrollReset';
import { getEventBySlug, localizeEvent } from '../data/events';

const SLUG = 'miss-kaif-2026';
const WHATSAPP_NUMBER = '66624805877';

const COPY = {
  back: { en: 'Back', ru: 'Назад', th: 'กลับ' },
  apply: { en: 'Apply via WhatsApp', ru: 'Подать заявку в WhatsApp', th: 'สมัครผ่าน WhatsApp' },
  call: { en: 'Call us', ru: 'Позвонить', th: 'โทรหาเรา' },
  about: { en: 'About the contest', ru: 'О конкурсе', th: 'เกี่ยวกับการประกวด' },
  programOverline: { en: 'Programme', ru: 'Программа', th: 'โปรแกรม' },
  programTitle: {
    en: 'Four weeks · five events · gala finale',
    ru: 'Четыре недели · пять событий · гала-финал',
    th: 'สี่สัปดาห์ · ห้าอีเวนต์ · กาล่าไฟนอล'
  },
  formatsOverline: { en: 'Formats', ru: 'Форматы', th: 'รูปแบบ' },
  formatsTitle: {
    en: 'Four sides of Miss KAIF',
    ru: 'Четыре стороны Miss KAIF',
    th: 'สี่ด้านของ Miss KAIF'
  },
  deadline: {
    en: 'Application deadline · 1 May 2026',
    ru: 'Дедлайн подачи заявок · 1 мая 2026',
    th: 'ปิดรับสมัคร · 1 พฤษภาคม 2026'
  },
  statsParticipants: { en: 'Participants', ru: 'Участниц', th: 'ผู้เข้าแข่งขัน' },
  statsWeeks: { en: 'Weeks', ru: 'Недели', th: 'สัปดาห์' },
  statsGala: { en: 'Gala finale', ru: 'Гала-финал', th: 'กาล่าไฟนอล' },
  finaleLabel: { en: 'Finale', ru: 'Финал', th: 'ไฟนอล' },
  galaTitle: { en: 'Gala concert', ru: 'Гала-концерт', th: 'กาล่าคอนเสิร์ต' },
  pullQuote: { en: 'Your moment to shine.', ru: 'Твой момент сиять.', th: 'ช่วงเวลาที่คุณจะเปล่งประกาย' },
  detailsLocation: { en: 'Venue', ru: 'Площадка', th: 'สถานที่' },
  detailsDates: { en: 'Dates', ru: 'Даты', th: 'วันที่' },
  detailsParticipants: { en: 'Format', ru: 'Формат', th: 'รูปแบบ' },
  detailsParticipantsValue: {
    en: '20 participants · 4 weeks',
    ru: '20 участниц · 4 недели',
    th: 'ผู้เข้าแข่งขัน 20 คน · 4 สัปดาห์'
  },
  formOverline: { en: 'Application', ru: 'Анкета', th: 'ใบสมัคร' },
  formTitle: {
    en: 'Apply for Miss KAIF 2026',
    ru: 'Подать заявку на Miss KAIF 2026',
    th: 'สมัคร Miss KAIF 2026'
  },
  formSub: {
    en: 'Fill in the form — we will reply on WhatsApp.',
    ru: 'Заполните анкету — ответим в WhatsApp.',
    th: 'กรอกแบบฟอร์ม — เราจะตอบกลับทาง WhatsApp'
  },
  fName: { en: 'Full name', ru: 'ФИО', th: 'ชื่อ-นามสกุล' },
  fAge: { en: 'Age', ru: 'Возраст', th: 'อายุ' },
  fCity: { en: 'City of residence', ru: 'Город проживания', th: 'เมืองที่อาศัย' },
  fHeight: { en: 'Height (cm)', ru: 'Рост (см)', th: 'ส่วนสูง (ซม.)' },
  fWeight: { en: 'Weight (kg)', ru: 'Вес (кг)', th: 'น้ำหนัก (กก.)' },
  fSize: { en: 'Clothing size', ru: 'Размер одежды', th: 'ขนาดเสื้อผ้า' },
  fSizePlaceholder: { en: 'Select size', ru: 'Выберите размер', th: 'เลือกขนาด' },
  submit: { en: 'Send via WhatsApp', ru: 'Отправить в WhatsApp', th: 'ส่งทาง WhatsApp' },
  formIntro: {
    en: 'Miss KAIF 2026 — application',
    ru: 'Miss KAIF 2026 — заявка',
    th: 'Miss KAIF 2026 — ใบสมัคร'
  }
};

const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

const FORMATS = [
  {
    name: { en: 'Beauty Contest', ru: 'Конкурс красоты', th: 'ประกวดความงาม' },
    desc: { en: 'Runway, style, charisma — set the rooftop alight under sunset lights.', ru: 'Дефиле, стиль и харизма — зажги крышу комплекса в лучах заката.', th: 'เดินแบบ สไตล์ และคาริสมา — จุดประกายบนรูฟท็อปยามอาทิตย์อัสดง' }
  },
  {
    name: { en: 'Fitness Challenge', ru: 'Фитнес-челлендж', th: 'ฟิตเนสชาเลนจ์' },
    desc: { en: 'CrossFit · Hyrox · functional shows in the Fight Club zone with DJ and lights.', ru: 'CrossFit · Hyrox · функциональные шоу в зоне Fight Club с DJ и светом.', th: 'CrossFit · Hyrox · โชว์ฟังก์ชันในโซน Fight Club พร้อม DJ และไฟ' }
  },
  {
    name: { en: 'Talent Show', ru: 'Шоу талантов', th: 'โชว์พรสวรรค์' },
    desc: { en: 'Vocal, dance, performance, art — the stage and the spotlight are yours.', ru: 'Вокал, танец, перформанс, арт — сцена и софиты твои.', th: 'ร้องเพลง เต้น เพอร์ฟอร์แมนซ์ และศิลปะ — เวทีและสปอตไลต์เป็นของคุณ' }
  },
  {
    name: { en: 'Lifestyle Format', ru: 'Lifestyle-формат', th: 'ไลฟ์สไตล์' },
    desc: { en: 'SPA rituals and banya ceremonies in the heart of the jungle complex.', ru: 'Ритуалы SPA и банные церемонии в сердце джунглей комплекса.', th: 'พิธี SPA และพิธีอบสมุนไพรกลางป่าของคอมเพล็กซ์' }
  }
];

const pick = (value, lang) => value?.[lang] ?? value?.en ?? '';

const NOISE_BG = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")";

const PAPER_BG = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23p)' opacity='0.4'/></svg>\")";

const Page = styled.div`
  position: relative;
  background: #2E060B;
  color: #FDFAF4;
  min-height: 100vh;
  font-family: 'Jost', sans-serif;
  overflow-x: hidden;
`;

/* ── HERO ── */
const Hero = styled.section`
  position: relative;
  width: 100%;
`;

const BackLink = styled.button`
  position: absolute;
  top: 5.5rem;
  left: 1.25rem;
  z-index: 5;
  font-family: inherit;
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.45);
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 999px;
  cursor: pointer;
  padding: 0.55rem 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;

  &:hover {
    color: #C9A652;
    border-color: rgba(201, 166, 82, 0.65);
    background: rgba(0, 0, 0, 0.45);
  }

  @media (min-width: 768px) {
    top: 6.5rem;
    left: 2.5rem;
  }
`;

const Poster = styled.picture`
  display: block;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

/* ── DARK SECTION ── */
const DarkSection = styled.section`
  position: relative;
  background:
    radial-gradient(ellipse at 50% 0%, #6B0F1A 0%, #4A0910 40%, #2E060B 100%);
  padding: ${(p) => (p.$compact ? '2.5rem 0 3rem' : '4rem 0')};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: ${NOISE_BG};
    opacity: 0.05;
    mix-blend-mode: overlay;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding: ${(p) => (p.$compact ? '3rem 0 3.5rem' : '6rem 0')};
  }
`;

/* ── CREAM SECTION ── */
const CreamSection = styled.section`
  position: relative;
  background:
    linear-gradient(180deg, #F5EDD8 0%, #EAE0C8 100%);
  color: #1A0A08;
  padding: 5rem 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, transparent, #C9A652 20%, #E2CB99 50%, #C9A652 80%, transparent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, transparent, #C9A652 20%, #E2CB99 50%, #C9A652 80%, transparent);
  }

  @media (min-width: 768px) {
    padding: 7rem 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 3rem;
  }
`;

/* ── TROPHY STRIP ── */
const TrophyStrip = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: 0.75rem;
  padding: 0 0 1.5rem;

  @media (min-width: 768px) {
    gap: 2.5rem;
    padding: 0 0 1.75rem;
  }
`;

const Trophy = styled.div`
  text-align: center;

  .num {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 9vw, 5.5rem);
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, #9B7A30 0%, #E2CB99 35%, #FFE9A0 50%, #E2CB99 65%, #9B7A30 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: rgba(245, 237, 216, 0.75);
    margin-top: 0.85rem;
  }
`;

const TrophyDivider = styled.div`
  width: 1px;
  height: 64px;
  background: linear-gradient(180deg, transparent, rgba(201, 166, 82, 0.6), transparent);
`;

/* ── PULL QUOTE ── */
const PullQuote = styled.div`
  text-align: center;
  padding: 1.25rem 0 2rem;

  .mark {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: #C9A652;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .text {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1.5rem, 4vw, 2.4rem);
    line-height: 1.2;
    background: linear-gradient(135deg, #FDFAF4 0%, #E2CB99 50%, #FDFAF4 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    max-width: 800px;
    margin: 0 auto;
    letter-spacing: 0.01em;
  }
`;

/* ── CTA ── */
const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.85rem;
  margin-bottom: 1rem;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.1rem 2.5rem;
  background: linear-gradient(135deg, #9B7A30 0%, #C9A652 50%, #E2CB99 100%);
  color: #1A0A08;
  font-family: 'Jost', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover,
  &:focus,
  &:active {
    color: #1A0A08;
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(201, 166, 82, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.1rem 2.5rem;
  background: transparent;
  color: #FDFAF4;
  font-family: 'Jost', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid rgba(245, 237, 216, 0.5);
  cursor: pointer;
  transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;

  &:hover,
  &:focus,
  &:active {
    border-color: #C9A652;
    color: #C9A652;
    background: rgba(201, 166, 82, 0.08);
  }
`;

/* ── HEADERS ── */
const SectionOverline = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: #C9A652;
  margin-bottom: 1rem;
`;

const SectionTitleDark = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.25rem, 5.5vw, 4rem);
  font-weight: 500;
  font-style: italic;
  margin: 0 0 1rem;
  line-height: 1;
  letter-spacing: -0.01em;
  background: linear-gradient(135deg, #FDFAF4 0%, #E2CB99 50%, #FDFAF4 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const SectionTitleLight = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.25rem, 5.5vw, 4rem);
  font-weight: 500;
  font-style: italic;
  margin: 0 0 1rem;
  line-height: 1;
  color: #4A0910;
  letter-spacing: -0.01em;
`;

const TitleAccent = styled.div`
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, #C9A652 0%, transparent 100%);
  margin-bottom: 2.5rem;
`;

/* ── INVITATION CARDS (FORMATS) ── */
const FormatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`;

const InvitationCard = styled.div`
  position: relative;
  background:
    linear-gradient(180deg, #F8F0DA 0%, #EFE2C2 100%);
  background-blend-mode: multiply;
  color: #4A0910;
  padding: 2.5rem 1.5rem 2rem;
  text-align: center;
  min-height: 360px;
  display: flex;
  flex-direction: column;
  cursor: default;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.35),
    0 1px 0 rgba(255, 255, 255, 0.3) inset;

  /* Paper texture overlay */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: ${PAPER_BG};
    opacity: 0.18;
    mix-blend-mode: multiply;
    pointer-events: none;
  }

  /* Inner gold border (the iconic Miss KAIF prize-card frame) */
  &::after {
    content: '';
    position: absolute;
    inset: 10px;
    border: 1px solid #C9A652;
    pointer-events: none;
    box-shadow: 0 0 0 1px rgba(201, 166, 82, 0.25);
  }

  &:hover {
    transform: translateY(-8px) rotate(-0.4deg);
    box-shadow:
      0 22px 44px rgba(0, 0, 0, 0.45),
      0 0 30px rgba(201, 166, 82, 0.25);
  }

  & > * { position: relative; z-index: 1; }

  .ornament {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.95rem;
    color: #9B7A30;
    letter-spacing: 0.5em;
    margin-bottom: 1rem;
  }

  .roman {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 6vw, 4.25rem);
    font-style: italic;
    font-weight: 500;
    line-height: 0.9;
    color: #6B0F1A;
    margin-bottom: 0.75rem;
    text-shadow: 1px 1px 0 rgba(201, 166, 82, 0.55);
    letter-spacing: 0.02em;
  }

  .hairline {
    width: 36px;
    height: 1px;
    background: #9B7A30;
    margin: 0.5rem auto 1.5rem;
    opacity: 0.7;
  }

  .name {
    font-family: 'Jost', sans-serif;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: #4A0910;
    margin-bottom: 1.25rem;
  }

  .desc {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.02rem;
    font-style: italic;
    font-weight: 400;
    line-height: 1.55;
    color: #5A2A20;
    flex: 1;
    margin-bottom: 1rem;
  }

  .footerOrn {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.85rem;
    color: #9B7A30;
    letter-spacing: 0.4em;
    opacity: 0.7;
  }
`;

/* ── ABOUT (CREAM) ── */
const AboutHead = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const FactsBar = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  margin: 0 auto 3.5rem;
  max-width: 920px;
  background:
    linear-gradient(180deg, #FDFAF4 0%, #F5EDD8 100%);
  border: 1px solid #C9A652;
  box-shadow: 0 12px 30px rgba(74, 9, 16, 0.12), inset 0 0 0 4px rgba(255, 255, 255, 0.45);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 8px;
    border: 1px solid rgba(201, 166, 82, 0.5);
    pointer-events: none;
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Fact = styled.div`
  padding: 1.5rem 1.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(201, 166, 82, 0.4);

  &:last-child { border-bottom: none; }

  @media (min-width: 700px) {
    border-bottom: none;
    border-right: 1px solid rgba(201, 166, 82, 0.4);
    padding: 1.85rem 1.5rem;

    &:last-child { border-right: none; }
  }

  .label {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: #9B7A30;
    margin-bottom: 0.6rem;
  }

  .value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    font-style: italic;
    font-weight: 500;
    color: #4A0910;
    line-height: 1.4;
  }
`;

const AboutText = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 400;
  line-height: 1.85;
  color: #3A1A14;
  margin: 0 auto;
  max-width: 880px;

  &::first-letter {
    font-family: 'Cormorant Garamond', serif;
    font-size: 4.5em;
    font-weight: 600;
    font-style: normal;
    float: left;
    line-height: 0.8;
    margin: 0.08em 0.12em -0.05em 0;
    color: #6B0F1A;
    text-shadow: 2px 2px 0 #C9A652;
  }
`;

/* ── PROGRAMME — TIMELINE OF MENU CARDS ── */
const TimelineWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const MenuCard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 1.25rem;
  background:
    linear-gradient(180deg, #F8F0DA 0%, #EFE2C2 100%);
  color: #4A0910;
  padding: 1.5rem 1.25rem 1.5rem 1rem;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
  cursor: default;
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 8px;
    border: 1px solid #C9A652;
    pointer-events: none;
    box-shadow: 0 0 0 1px rgba(201, 166, 82, 0.25);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: ${PAPER_BG};
    opacity: 0.15;
    mix-blend-mode: multiply;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 38px rgba(0, 0, 0, 0.4), 0 0 26px rgba(201, 166, 82, 0.18);
  }

  & > * { position: relative; z-index: 1; }

  @media (min-width: 768px) {
    grid-template-columns: 160px 1fr 160px;
    gap: 2.25rem;
    padding: 2rem 2.25rem;
    align-items: center;
  }

  .romanWrap {
    text-align: center;
    padding-top: 0.25rem;
    border-right: 1px solid rgba(155, 122, 48, 0.4);
  }

  .romanLabel {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: #9B7A30;
    margin-bottom: 0.35rem;
  }

  .roman {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    font-style: italic;
    font-weight: 500;
    line-height: 1;
    color: #6B0F1A;
    text-shadow: 1px 1px 0 rgba(201, 166, 82, 0.5);
  }

  .body {
    .name {
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: #4A0910;
      margin-bottom: 0.65rem;
    }
    .desc {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.08rem;
      font-style: italic;
      line-height: 1.6;
      color: #5A2A20;
    }
  }

  .when {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.95rem;
    font-style: italic;
    color: #9B7A30;
    letter-spacing: 0.05em;
    text-align: left;
    grid-column: 2;
    margin-top: 0.35rem;

    &::before {
      content: '✦ ';
      color: #C9A652;
      font-style: normal;
    }
  }

  @media (min-width: 768px) {
    .when {
      text-align: right;
      grid-column: 3;
      margin-top: 0;
      font-size: 1rem;
      padding-left: 1.5rem;
      border-left: 1px solid rgba(155, 122, 48, 0.4);

      &::before { content: ''; }
    }
  }
`;

/* ── FINALE ── */
const FinaleCard = styled.div`
  position: relative;
  margin-top: 3rem;
  padding: 3rem 1.75rem;
  background:
    radial-gradient(ellipse at top right, #FFE9A0 0%, #E2CB99 30%, #C9A652 60%, #9B7A30 100%);
  color: #1A0A08;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: center;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    inset: 8px;
    border: 1px solid rgba(74, 9, 16, 0.35);
    pointer-events: none;
  }

  &::after {
    content: 'M';
    position: absolute;
    bottom: -3rem;
    right: -1rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 22rem;
    font-style: italic;
    font-weight: 600;
    line-height: 1;
    color: rgba(74, 9, 16, 0.08);
    pointer-events: none;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr auto;
    padding: 3.5rem 3.5rem;
  }

  .corner {
    position: absolute;
    width: 26px;
    height: 26px;
    border: 1px solid rgba(74, 9, 16, 0.5);
    pointer-events: none;
  }
  .corner.tl { top: 16px; left: 16px; border-width: 1px 0 0 1px; }
  .corner.tr { top: 16px; right: 16px; border-width: 1px 1px 0 0; }
  .corner.bl { bottom: 16px; left: 16px; border-width: 0 0 1px 1px; }
  .corner.br { bottom: 16px; right: 16px; border-width: 0 1px 1px 0; }

  .crown {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: #4A0910;
    margin-bottom: 0.85rem;
  }

  .title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4.5vw, 3rem);
    font-weight: 600;
    line-height: 1;
    margin-bottom: 0.75rem;
    color: #1A0A08;
    position: relative;
    z-index: 2;
  }

  .sub {
    font-size: 0.78rem;
    color: rgba(26, 10, 8, 0.8);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1.5;
    max-width: 520px;
    position: relative;
    z-index: 2;
  }

  .date {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(4rem, 10vw, 6.5rem);
    font-style: italic;
    font-weight: 300;
    line-height: 0.9;
    color: #1A0A08;
    text-align: right;
    letter-spacing: -0.03em;
    position: relative;
    z-index: 2;
  }

  @media (max-width: 699px) {
    .date { text-align: left; }
  }
`;

/* ── APPLICATION FORM ── */
const FormCard = styled.form`
  position: relative;
  max-width: 760px;
  margin: 0 auto;
  background: linear-gradient(180deg, #F8F0DA 0%, #EFE2C2 100%);
  color: #4A0910;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
  scroll-margin-top: 6rem;

  &::before {
    content: '';
    position: absolute;
    inset: 10px;
    border: 1px solid #C9A652;
    pointer-events: none;
    box-shadow: 0 0 0 1px rgba(201, 166, 82, 0.25);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: ${PAPER_BG};
    opacity: 0.15;
    mix-blend-mode: multiply;
    pointer-events: none;
  }

  & > * { position: relative; z-index: 1; }

  @media (min-width: 700px) {
    padding: 3.5rem 3rem;
  }
`;

const FormHead = styled.div`
  text-align: center;
  margin-bottom: 2.25rem;

  .ornament {
    font-family: 'Cormorant Garamond', serif;
    color: #9B7A30;
    letter-spacing: 0.5em;
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }

  .overline {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.45em;
    text-transform: uppercase;
    color: #9B7A30;
    margin-bottom: 0.85rem;
  }

  .title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.85rem, 4.5vw, 2.65rem);
    font-style: italic;
    font-weight: 500;
    color: #4A0910;
    margin: 0 0 0.6rem;
    line-height: 1.05;
  }

  .sub {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.05rem;
    color: #6B0F1A;
    margin: 0;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem 1.25rem;
  margin-bottom: 1.85rem;
  position: relative;
  z-index: 5;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;

  &[data-full='true'] {
    @media (min-width: 600px) {
      grid-column: 1 / -1;
    }
  }

  span {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: #9B7A30;
    margin-bottom: 0.5rem;
  }

  input,
  select {
    background: rgba(255, 255, 255, 0.55);
    border: 1px solid rgba(155, 122, 48, 0.45);
    color: #4A0910;
    font-family: 'Jost', sans-serif;
    font-size: 1rem;
    padding: 0.85rem 1rem;
    outline: none;
    transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
    width: 100%;
    box-sizing: border-box;

    &::placeholder { color: rgba(74, 9, 16, 0.35); }

    &:focus {
      border-color: #6B0F1A;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 0 0 3px rgba(201, 166, 82, 0.18);
    }
  }

  select {
    appearance: none;
    background-image:
      linear-gradient(45deg, transparent 50%, #9B7A30 50%),
      linear-gradient(-45deg, transparent 50%, #9B7A30 50%);
    background-position:
      calc(100% - 18px) 50%,
      calc(100% - 12px) 50%;
    background-size: 6px 6px;
    background-repeat: no-repeat;
    padding-right: 2.25rem;
  }
`;

/* ── CUSTOM SELECT ── */
const SelectWrap = styled.div`
  position: relative;
  width: 100%;
`;

const SelectTrigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid ${(p) => (p.$open ? '#6B0F1A' : 'rgba(155, 122, 48, 0.45)')};
  color: #4A0910;
  font-family: 'Jost', sans-serif;
  font-size: 1rem;
  padding: 0.85rem 1rem;
  cursor: pointer;
  text-align: left;
  outline: none;
  box-shadow: ${(p) => (p.$open ? '0 0 0 3px rgba(201, 166, 82, 0.25)' : 'none')};
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover { background: rgba(255, 255, 255, 0.75); }
  &:focus,
  &:focus-visible {
    border-color: #6B0F1A;
    box-shadow: 0 0 0 3px rgba(201, 166, 82, 0.25);
  }

  .ph { color: rgba(74, 9, 16, 0.4); }
  .val { color: #4A0910; font-weight: 600; letter-spacing: 0.05em; }

  .caret {
    width: 10px;
    height: 10px;
    border-right: 1.5px solid #9B7A30;
    border-bottom: 1.5px solid #9B7A30;
    transform: ${(p) => (p.$open ? 'rotate(-135deg) translate(-2px, -2px)' : 'rotate(45deg) translate(-2px, -2px)')};
    transition: transform 0.2s ease;
    margin-right: 4px;
  }
`;

const SelectPanel = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  z-index: 20;
  background: linear-gradient(180deg, #F8F0DA 0%, #EFE2C2 100%);
  border: 1px solid #C9A652;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.3);
  padding: 6px;
  animation: panelIn 0.18s ease-out;

  @keyframes panelIn {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const SelectOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${(p) => (p.$selected ? 'rgba(201, 166, 82, 0.22)' : 'transparent')};
  border: none;
  color: #4A0910;
  font-family: 'Jost', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 0.7rem 0.85rem;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  & + & { margin-top: 2px; }

  &::after {
    content: '✦';
    color: ${(p) => (p.$selected ? '#9B7A30' : 'transparent')};
    font-size: 0.7rem;
    transition: color 0.15s ease;
  }

  &:hover,
  &:focus-visible {
    outline: none;
    background: #6B0F1A;
    color: #F5EDD8;

    &::after { color: #C9A652; }
  }
`;

const CustomSelect = ({ value, onChange, options, placeholder }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const handleDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const handleKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', handleDocClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleDocClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return (
    <SelectWrap ref={wrapRef}>
      <SelectTrigger
        type="button"
        $open={open}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? 'val' : 'ph'}>{value || placeholder}</span>
        <span className="caret" aria-hidden="true" />
      </SelectTrigger>
      {open && (
        <SelectPanel role="listbox">
          {options.map((opt) => (
            <SelectOption
              key={opt}
              type="button"
              role="option"
              aria-selected={value === opt}
              $selected={value === opt}
              onClick={() => { onChange(opt); setOpen(false); }}
            >
              {opt}
            </SelectOption>
          ))}
        </SelectPanel>
      )}
    </SelectWrap>
  );
};

const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.15rem 2rem;
  background: linear-gradient(135deg, #9B7A30 0%, #C9A652 50%, #E2CB99 100%);
  color: #1A0A08;
  font-family: 'Jost', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover,
  &:focus,
  &:active {
    color: #1A0A08;
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(201, 166, 82, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }
`;

/* ── DEADLINE ── */
const DeadlineBar = styled.div`
  margin: 4rem auto 0;
  max-width: 760px;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, rgba(201, 166, 82, 0.16), rgba(201, 166, 82, 0.04));
  border: 1px solid rgba(201, 166, 82, 0.55);
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #FFE9A0;
  position: relative;

  &::before,
  &::after {
    content: '✦';
    color: #C9A652;
    margin: 0 0.85rem;
    font-size: 0.65rem;
    vertical-align: middle;
  }
`;

const initialForm = { fullName: '', age: '', city: '', height: '', weight: '', size: '' };

const MissKaifPage = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const lang = (i18n.language || 'en').split('-')[0];

  const [form, setForm] = useState(initialForm);

  const rawEvent = getEventBySlug(SLUG);
  const event = rawEvent ? localizeEvent(rawEvent, lang) : null;

  const handleBack = () => {
    const from = location.state?.from;
    if (from === '/events') navigate('/events');
    else navigate('/#events');
  };

  const update = useCallback((key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }, []);

  const scrollToForm = useCallback((e) => {
    e.preventDefault();
    const el = document.getElementById('apply-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!form.size) {
      const trigger = document.querySelector('#apply-form [aria-haspopup="listbox"]');
      if (trigger) trigger.focus();
      return;
    }
    const lines = [
      pick(COPY.formIntro, lang),
      '',
      `${pick(COPY.fName, lang)}: ${form.fullName}`,
      `${pick(COPY.fAge, lang)}: ${form.age}`,
      `${pick(COPY.fCity, lang)}: ${form.city}`,
      `${pick(COPY.fHeight, lang)}: ${form.height}`,
      `${pick(COPY.fWeight, lang)}: ${form.weight}`,
      `${pick(COPY.fSize, lang)}: ${form.size}`
    ];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [form, lang]);

  if (!event) return null;

  const finale = event.schedule?.[4];

  return (
    <>
      <PageHead
        titleKey="page_titles.event_miss_kaif"
        defaultTitle="Miss KAIF 2026 · Contest at KAIF Jungle & SPA"
        description={event.shortDescription}
        ogImage="/images/events/Miss-kaif-desctop.png"
      />
      <PageScrollReset />

      <Page>
        <Hero>
          <BackLink type="button" onClick={handleBack}>
            ← {pick(COPY.back, lang)}
          </BackLink>

          <Poster>
            <source media="(max-width: 767px)" srcSet="/images/events/Miss-kaif-mobile.png" />
            <img
              src="/images/events/Miss-kaif-desctop.png"
              alt={event.title}
              loading="eager"
              fetchpriority="high"
            />
          </Poster>
        </Hero>

        {/* TROPHY + PULL QUOTE + CTA */}
        <DarkSection $compact>
          <Wrapper>
            <TrophyStrip>
              <Trophy>
                <div className="num">20</div>
                <div className="label">{pick(COPY.statsParticipants, lang)}</div>
              </Trophy>
              <TrophyDivider />
              <Trophy>
                <div className="num">4</div>
                <div className="label">{pick(COPY.statsWeeks, lang)}</div>
              </Trophy>
              <TrophyDivider />
              <Trophy>
                <div className="num">30/05</div>
                <div className="label">{pick(COPY.statsGala, lang)}</div>
              </Trophy>
            </TrophyStrip>

            <PullQuote>
              <div className="mark">✦</div>
              <div className="text">{pick(COPY.pullQuote, lang)}</div>
            </PullQuote>

            <CtaRow>
              <PrimaryButton href="#apply-form" onClick={scrollToForm}>
                {pick(COPY.apply, lang)}
              </PrimaryButton>
              <SecondaryButton href="tel:+66624805877">
                {pick(COPY.call, lang)}
              </SecondaryButton>
            </CtaRow>
          </Wrapper>
        </DarkSection>

        {/* FORMATS — INVITATION CARDS */}
        <DarkSection>
          <Wrapper>
            <SectionOverline>{pick(COPY.formatsOverline, lang)}</SectionOverline>
            <SectionTitleDark>{pick(COPY.formatsTitle, lang)}</SectionTitleDark>
            <TitleAccent />

            <FormatsGrid>
              {FORMATS.map((f, idx) => (
                <InvitationCard key={pick(f.name, 'en')}>
                  <div className="ornament">✦ ✦ ✦</div>
                  <div className="roman">{ROMAN[idx]}</div>
                  <div className="hairline" />
                  <div className="name">{pick(f.name, lang)}</div>
                  <div className="desc">{pick(f.desc, lang)}</div>
                  <div className="footerOrn">✦</div>
                </InvitationCard>
              ))}
            </FormatsGrid>
          </Wrapper>
        </DarkSection>

        {/* ABOUT — CREAM */}
        <CreamSection>
          <Wrapper>
            <AboutHead>
              <SectionOverline style={{ color: '#9B7A30' }}>{pick(COPY.about, lang).toUpperCase()}</SectionOverline>
              <SectionTitleLight>{event.title}</SectionTitleLight>
              <TitleAccent style={{ marginLeft: 'auto', marginRight: 'auto', background: 'linear-gradient(90deg, transparent, #C9A652, transparent)', width: '120px', marginBottom: '0' }} />
            </AboutHead>

            <FactsBar>
              <Fact>
                <div className="label">{pick(COPY.detailsLocation, lang)}</div>
                <div className="value">{event.location}</div>
              </Fact>
              <Fact>
                <div className="label">{pick(COPY.detailsDates, lang)}</div>
                <div className="value">{event.date.full}</div>
              </Fact>
              <Fact>
                <div className="label">{pick(COPY.detailsParticipants, lang)}</div>
                <div className="value">{pick(COPY.detailsParticipantsValue, lang)}</div>
              </Fact>
            </FactsBar>

            <AboutText>{event.longDescription}</AboutText>
          </Wrapper>
        </CreamSection>

        {/* PROGRAMME — MENU CARDS */}
        {event.schedule && event.schedule.length > 0 && (
          <DarkSection>
            <Wrapper>
              <SectionOverline>{pick(COPY.programOverline, lang)}</SectionOverline>
              <SectionTitleDark>{pick(COPY.programTitle, lang)}</SectionTitleDark>
              <TitleAccent />

              <TimelineWrap>
                {event.schedule.slice(0, 4).map((item, idx) => (
                  <MenuCard key={idx}>
                    <div className="romanWrap">
                      <div className="romanLabel">Week</div>
                      <div className="roman">{ROMAN[idx]}</div>
                    </div>
                    <div className="body">
                      <div className="name">{item.title}</div>
                      <div className="desc">{item.description}</div>
                    </div>
                    <div className="when">{item.date}</div>
                  </MenuCard>
                ))}
              </TimelineWrap>

              {finale && (
                <FinaleCard>
                  <span className="corner tl" />
                  <span className="corner tr" />
                  <span className="corner bl" />
                  <span className="corner br" />
                  <div>
                    <div className="crown">✦ {pick(COPY.finaleLabel, lang)} ✦</div>
                    <div className="title">{pick(COPY.galaTitle, lang)}</div>
                    <div className="sub">{finale.description}</div>
                  </div>
                  <div className="date">30.05</div>
                </FinaleCard>
              )}

              <DeadlineBar>{pick(COPY.deadline, lang)}</DeadlineBar>
            </Wrapper>
          </DarkSection>
        )}

        {/* APPLICATION FORM */}
        <DarkSection>
          <Wrapper>
            <FormCard id="apply-form" onSubmit={handleSubmit} noValidate>
              <FormHead>
                <div className="ornament">✦ ✦ ✦</div>
                <div className="overline">{pick(COPY.formOverline, lang)}</div>
                <h3 className="title">{pick(COPY.formTitle, lang)}</h3>
                <p className="sub">{pick(COPY.formSub, lang)}</p>
              </FormHead>

              <FormGrid>
                <Field data-full="true">
                  <span>{pick(COPY.fName, lang)}</span>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={update('fullName')}
                    autoComplete="name"
                    required
                  />
                </Field>

                <Field>
                  <span>{pick(COPY.fAge, lang)}</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min="16"
                    max="60"
                    value={form.age}
                    onChange={update('age')}
                    required
                  />
                </Field>

                <Field>
                  <span>{pick(COPY.fCity, lang)}</span>
                  <input
                    type="text"
                    value={form.city}
                    onChange={update('city')}
                    autoComplete="address-level2"
                    required
                  />
                </Field>

                <Field>
                  <span>{pick(COPY.fHeight, lang)}</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min="120"
                    max="220"
                    value={form.height}
                    onChange={update('height')}
                    required
                  />
                </Field>

                <Field>
                  <span>{pick(COPY.fWeight, lang)}</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min="30"
                    max="200"
                    value={form.weight}
                    onChange={update('weight')}
                    required
                  />
                </Field>

                <Field data-full="true">
                  <span>{pick(COPY.fSize, lang)}</span>
                  <CustomSelect
                    value={form.size}
                    onChange={(val) => setForm((p) => ({ ...p, size: val }))}
                    options={['XS', 'S', 'M']}
                    placeholder={pick(COPY.fSizePlaceholder, lang)}
                  />
                </Field>
              </FormGrid>

              <SubmitBtn type="submit">{pick(COPY.submit, lang)}</SubmitBtn>
            </FormCard>
          </Wrapper>
        </DarkSection>
      </Page>
    </>
  );
};

export default memo(MissKaifPage);
