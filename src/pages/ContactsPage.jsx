import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import PageHead from '../components/layout/PageHead';
import styled from 'styled-components';
import PageScrollReset from '../components/common/PageScrollReset';
import ContactHero from '../components/contacts/ContactHero';
import { useCms } from '../context/CmsContext';

// === STYLED COMPONENTS — Minimalist Pasture Style (matching Banya/Spa pages) ===

// Contact Info Section
const ContactSection = styled.section`
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

const SectionTitle = styled.h2`
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

const SectionDescription = styled.p`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactCard = styled.a`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 2rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  transition: all 0.3s ease;
  cursor: ${props => props.href ? 'pointer' : 'default'};

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`;

const ContactCardTitle = styled.h3`
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin: 0 0 1rem;
`;

const ContactCardValue = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.5rem;
  letter-spacing: -0.01em;
  line-height: 1.3;
`;

const ContactCardSubtext = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  display: block;
  flex: 1;
`;

const ContactCardAction = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(19, 50, 56, 0.06);
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(19, 50, 56, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
  }

  ${ContactCard}:hover & {
    color: #133238;
  }

  ${ContactCard}:hover & svg {
    transform: translateX(4px);
  }
`;

// Social Section
const SocialSection = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

const SocialGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: transparent;
  border: 1px solid rgba(19, 50, 56, 0.12);
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
    color: #133238;
    transition: color 0.3s ease;
  }

  &:hover {
    border-color: #133238;
    background: #133238;
  }

  &:hover svg {
    color: #fffef6;
  }

  &:hover span {
    color: #fffef6;
  }

  @media (max-width: 600px) {
    padding: 0.6rem 1rem;
  }
`;

const SocialName = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: #133238;
  letter-spacing: 0.02em;
  transition: color 0.3s ease;
`;

// Map Section
const MapSection = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

const MapFrame = styled.div`
  border-radius: 12px;
  overflow: hidden;
  height: 450px;
  margin-top: 3rem;
  border: 1px solid rgba(19, 50, 56, 0.08);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    height: 350px;
  }
`;

// Arrow Icon
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

// === COMPONENT ===

const ContactsPage = () => {
  const { t } = useTranslation();
  const {
    phoneDisplay,
    address,
    hoursLabel,
    hoursOpen,
    hoursClose,
    mapsUrl,
    whatsapp,
    social,
    buildWhatsAppLink,
  } = useCms();

  const addressLines = (address || '').split(',').map((s) => s.trim()).filter(Boolean)
  // Keep first line meaningful (avoid showing only a house number like "73")
  let addressMain = address
  let addressSub = ''
  if (addressLines.length >= 2) {
    addressMain = addressLines.slice(0, 2).join(', ')
    addressSub = addressLines.slice(2).join(', ')
  }
  const hoursValue =
    hoursOpen && hoursClose ? `${hoursOpen} — ${hoursClose}` : hoursLabel;

  const contactInfo = [
    {
      title: t('contacts.phone.title', 'Phone'),
      value: phoneDisplay,
      subtext: t('contacts.phone.subtext', 'WhatsApp available'),
      action: t('contacts.phone.action', 'Contact'),
      href: buildWhatsAppLink('Hello! I would like to contact KAIF')
    },
    {
      title: t('contacts.address.title', 'Address'),
      value: addressMain,
      subtext: addressSub,
      action: t('contacts.address.action', 'Get Directions'),
      href: mapsUrl || 'https://maps.app.goo.gl/h7PzpHpBeurg7eK18'
    },
    {
      title: t('contacts.hours.title', 'Opening Hours'),
      value: hoursValue,
      subtext: t('contacts.hours.subtext', 'Daily'),
      action: t('contacts.hours.action', 'Book Now'),
      href: buildWhatsAppLink('Hello! I would like to book at KAIF')
    }
  ];

  const socialLinks = [
    social.instagram && {
      name: 'Instagram',
      href: social.instagram,
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      )
    },
    social.telegram && {
      name: 'Telegram',
      href: social.telegram,
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    whatsapp && {
      name: 'WhatsApp',
      href: `https://wa.me/${whatsapp}`,
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5m0 0a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    social.facebook && {
      name: 'Facebook',
      href: social.facebook,
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    social.youtube && {
      name: 'YouTube',
      href: social.youtube,
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="4" />
          <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
        </svg>
      )
    }
  ].filter(Boolean);

  return (
    <>
      <PageHead
        titleKey="page_titles.contacts"
        defaultTitle="KAIF Contacts | Get in Touch with Us"
        description="Contact KAIF Sauna & Spa in Phuket. Phone, address, working hours and booking information."
      />
      <PageScrollReset />

      {/* Hero Section */}
      <ContactHero />

      {/* Contact Information */}
      <ContactSection>
        <ContentWrapper>
          <Overline>{t('contacts.overline', 'Contact Information')}</Overline>
          <SectionTitle>{t('contacts.info.title', 'Get in Touch')}</SectionTitle>
          <SectionDescription>
            {t('contacts.info.subtitle', 'Choose a convenient way to contact us')}
          </SectionDescription>

          <ContactGrid>
            {contactInfo.map((contact, index) => (
              <ContactCard
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                as={contact.href ? 'a' : 'div'}
              >
                <ContactCardTitle>{contact.title}</ContactCardTitle>
                <ContactCardValue>{contact.value}</ContactCardValue>
                <ContactCardSubtext>{contact.subtext}</ContactCardSubtext>
                {contact.href && (
                  <ContactCardAction>
                    {contact.action}
                    <ArrowIcon />
                  </ContactCardAction>
                )}
              </ContactCard>
            ))}
          </ContactGrid>
        </ContentWrapper>
      </ContactSection>

      {/* Social Media */}
      <SocialSection>
        <ContentWrapper>
          <Overline>{t('contacts.social.overline', 'Follow Us')}</Overline>
          <SectionTitle>{t('contacts.social.title', 'Social Media')}</SectionTitle>
          <SectionDescription>
            {t('contacts.social.subtitle', 'Stay up to date with the latest KAIF news')}
          </SectionDescription>

          <SocialGrid>
            {socialLinks.map((social, index) => (
              <SocialLink
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
                <SocialName>{social.name}</SocialName>
              </SocialLink>
            ))}
          </SocialGrid>
        </ContentWrapper>
      </SocialSection>

      {/* Map Section */}
      <MapSection>
        <ContentWrapper>
          <Overline>{t('contacts.map.overline', 'Location')}</Overline>
          <SectionTitle>{t('contacts.map.title', 'How to Find Us')}</SectionTitle>
          <SectionDescription>
            {t('contacts.map.subtitle', 'Convenient location in Kathu, Phuket')}
          </SectionDescription>

          <MapFrame>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.8203398876644!2d98.3510499760479!3d7.9138279921095105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031603c054903%3A0x818d8108ef4f8a55!2sKAIF%20SAUNA%20%26%20SPA!5e0!3m2!1sru!2sth!4v1760257722396!5m2!1sru!2sth"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KAIF SAUNA & SPA Location"
            />
          </MapFrame>
        </ContentWrapper>
      </MapSection>
    </>
  );
};

export default memo(ContactsPage);
