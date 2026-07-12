import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useCms } from '../../context/CmsContext';

// === STYLED COMPONENTS — Minimalist Pasture Style Footer ===

const FooterWrapper = styled.footer`
  position: relative;
  background-color: #0f1a1c;
  padding: 5rem 2rem calc(2rem + env(safe-area-inset-bottom, 0px));
  color: #fffef6;
  z-index: 10;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3.5rem 1.25rem calc(1.5rem + env(safe-area-inset-bottom, 0px));
  }
`;

const FooterContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-bottom: 4rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 1fr 1fr 1fr;
    gap: 3rem;
  }
`;

/* Brand section */
const BrandSection = styled.div`
  @media (max-width: 1023px) {
    grid-column: 1 / -1;
  }
`;

const FooterLogo = styled.div`
  margin-bottom: 1.5rem;
  width: 280px;

  img {
    width: 100%;
    height: auto;
    filter: brightness(1.2) contrast(1.1);
  }

  @media (max-width: 768px) {
    width: 240px;
  }
`;

const BrandDescription = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 254, 246, 0.5);
  max-width: 320px;
  margin: 0 0 2rem;
  font-weight: 400;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const SocialLink = styled.a`
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid rgba(255, 254, 246, 0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 254, 246, 0.45);
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(255, 254, 246, 0.3);
    color: #fffef6;
  }

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }
`;

/* Footer columns */
const FooterColumn = styled.div``;

const ColumnTitle = styled.h3`
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 254, 246, 0.35);
  margin: 0 0 1.5rem;
`;

const FooterLink = styled(Link)`
  display: block;
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 254, 246, 0.65);
  text-decoration: none;
  padding: 0.3rem 0;
  transition: color 0.2s ease;
  font-weight: 400;

  &:hover {
    color: #fffef6;
  }
`;

const ContactText = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 254, 246, 0.65);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-weight: 400;

  a {
    color: rgba(255, 254, 246, 0.65);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #fffef6;
    }
  }
`;

/* Divider */
const Divider = styled.div`
  height: 1px;
  background: rgba(255, 254, 246, 0.08);
  margin-bottom: 2rem;
`;

/* Footer bottom */
const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Copyright = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 254, 246, 0.3);
  margin: 0;
  font-weight: 400;

  span {
    color: rgba(255, 254, 246, 0.5);
  }
`;

const MadeBy = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 254, 246, 0.25);
  margin: 0;

  a {
    color: rgba(255, 254, 246, 0.4);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: rgba(255, 254, 246, 0.7);
    }
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    font-family: 'Jost', sans-serif;
    font-size: 0.8rem;
    color: rgba(255, 254, 246, 0.3);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: rgba(255, 254, 246, 0.6);
    }
  }
`;

// === COMPONENT ===

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const {
    phoneDisplay,
    phoneTel,
    address,
    hoursLabel,
    whatsapp,
    social,
  } = useCms();

  const navigationLinks = [
    { path: '/', label: t('navigation.home'), id: 'home' },
    { path: '/restaurant', label: t('navigation.restaurant'), id: 'restaurant' },
    { path: '/spa', label: t('navigation.spa'), id: 'spa' },
    { path: '/sports', label: t('navigation.sports'), id: 'sports-main' },
    { path: '/contacts', label: t('navigation.contacts'), id: 'contacts' },
  ];

  const serviceLinks = [
    { path: '/spa', label: t('footer.services.sauna'), id: 'spa-sauna' },
    { path: '/restaurant', label: t('navigation.restaurant'), id: 'restaurant' },
    { path: '/sports/gym', label: t('footer.services.fitness'), id: 'sports-fitness' },
    { path: '/banya', label: t('navigation.banya'), id: 'banya' },
    { path: '/sports/fight-club', label: t('footer.services.fight_club'), id: 'sports-club' },
  ];

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterMain>
          {/* Brand */}
          <BrandSection>
            <FooterLogo>
              <picture>
                <source
                  srcSet="/images/logos/logo-footer-2x.webp 2x, /images/logos/logo-footer-1x.webp 1x"
                  type="image/webp"
                />
                <source
                  srcSet="/images/logos/logo-footer-2x.png 2x, /images/logos/logo-footer-1x.png 1x"
                  type="image/png"
                />
                <img
                  src="/images/logos/logo-footer-1x.png"
                  alt="KAIF"
                  loading="lazy"
                />
              </picture>
            </FooterLogo>
            <BrandDescription>
              {t('footer.brand.description')}
            </BrandDescription>
            <SocialLinks>
              {social.instagram && (
                <SocialLink href={social.instagram} target="_blank" rel="noopener noreferrer">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </SocialLink>
              )}
              {social.facebook && (
                <SocialLink href={social.facebook} target="_blank" rel="noopener noreferrer">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </SocialLink>
              )}
              {social.telegram && (
                <SocialLink href={social.telegram} target="_blank" rel="noopener noreferrer">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.789l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/></svg>
                </SocialLink>
              )}
              {social.youtube && (
                <SocialLink href={social.youtube} target="_blank" rel="noopener noreferrer">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </SocialLink>
              )}
              {whatsapp && (
                <SocialLink href={`https://api.whatsapp.com/send/?phone=${whatsapp}&text&type=phone_number&app_absent=0`} target="_blank" rel="noopener noreferrer">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/></svg>
                </SocialLink>
              )}
            </SocialLinks>
          </BrandSection>

          {/* Navigation */}
          <FooterColumn>
            <ColumnTitle>{t('footer.navigation')}</ColumnTitle>
            {navigationLinks.map((link) => (
              <FooterLink key={link.id} to={link.path}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Services */}
          <FooterColumn>
            <ColumnTitle>{t('footer.services.title')}</ColumnTitle>
            {serviceLinks.map((link) => (
              <FooterLink key={link.id} to={link.path}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Contacts */}
          <FooterColumn>
            <ColumnTitle>{t('navigation.contacts')}</ColumnTitle>
            <ContactText>{address}</ContactText>
            <ContactText>
              <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
            </ContactText>
            <ContactText>{hoursLabel}</ContactText>
          </FooterColumn>
        </FooterMain>

        <Divider />

        <FooterBottom>
          <Copyright>
            &copy; {currentYear} <span>KAIF</span>. {t('footer.copyright')}
          </Copyright>
          <MadeBy>
            Made by <a href="https://sintara.io/" target="_blank" rel="noopener noreferrer">Sintara Studio</a>
          </MadeBy>
          <LegalLinks>
            <Link to="/privacy">{t('footer.legal.privacy')}</Link>
            <Link to="/terms">{t('footer.legal.terms')}</Link>
          </LegalLinks>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
