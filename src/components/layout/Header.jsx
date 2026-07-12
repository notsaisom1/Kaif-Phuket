import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const headerLogoPath = '/images/logos/logo-header.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const isDarkHeroPage = isHomePage || location.pathname === '/banya' || location.pathname === '/spa' || location.pathname === '/restaurant' || location.pathname === '/sports' || location.pathname === '/contacts' || location.pathname === '/services';

  // Сбрасываем isScrolled при смене страницы и проверяем текущую позицию
  useEffect(() => {
    setIsScrolled(window.scrollY > 30);
  }, [location.pathname]);

  // Закрываем меню при навигации
  useEffect(() => {
    setIsMenuOpen(false);
    setIsLanguageDropdownOpen(false);
  }, [location.pathname]);

  const isLightText = isDarkHeroPage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = useCallback((path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  }, [location.pathname]);

  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    document.documentElement.lang = lng;
    setIsLanguageDropdownOpen(false);
  }, [i18n]);

  const handleNavigate = useCallback((path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [navigate]);

  const languages = useMemo(() => [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' }
  ], []);

  const currentLanguage = useMemo(() => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  }, [languages, i18n.language]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-selector')) {
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navItems = useMemo(() => [
    { path: '/', label: t('navigation.home') },
    { path: '/banya', label: t('navigation.banya') },
    { path: '/restaurant', label: t('navigation.restaurant') },
    { path: '/spa', label: t('navigation.spa') },
    { path: '/sports', label: t('navigation.sports') },
    { path: '/contacts', label: t('navigation.contacts') }
  ], [t]);

  const menuItems = useMemo(() => [
    ...navItems,
    { path: '/services', label: t('navigation.services', 'Услуги и цены') }
  ], [navItems, t]);

  const leftNav = navItems.slice(0, 3);
  const rightNav = navItems.slice(3);

  const toggleMenu = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.setAttribute('data-scroll-position', scrollY.toString());
    } else {
      const savedScrollY = document.body.getAttribute('data-scroll-position');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (savedScrollY) {
        window.scrollTo(0, parseInt(savedScrollY));
        document.body.removeAttribute('data-scroll-position');
      }
    }
  }, [isMenuOpen]);

  // Colors
  const textColor = isLightText ? '#ffffff' : '#133238';
  const textColorMuted = isLightText ? 'rgba(255,255,255,0.85)' : 'rgba(19, 50, 56, 0.55)';
  const textColorHover = isLightText ? '#ffffff' : '#133238';

  const navLinkStyle = (path) => ({
    position: 'relative',
    padding: '0.5rem 0',
    fontSize: '0.75rem',
    fontWeight: '600',
    fontFamily: '"Jost", sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    color: isActive(path) ? textColor : textColorMuted,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    whiteSpace: 'nowrap'
  });

  return (
    <>
      <header
        className="kaif-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '80px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isScrolled ? 'rgba(255, 254, 246, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(19, 50, 56, 0.06)' : 'none',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease'
        }}
      >
        <div style={{
          width: '100%',
          maxWidth: '1300px',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          padding: '0 2.5rem'
        }}>

          {/* Left navigation */}
          <nav className="desktop-nav desktop-nav-left" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
            justifySelf: 'start'
          }}>
            {leftNav.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                style={navLinkStyle(item.path)}
                onMouseEnter={(e) => { e.target.style.color = textColorHover; }}
                onMouseLeave={(e) => { e.target.style.color = isActive(item.path) ? textColor : textColorMuted; }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Center logo */}
          <div
            onClick={() => handleNavigate('/')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifySelf: 'center'
            }}
          >
            <img
              src={headerLogoPath}
              alt="KAIF"
              style={{
                height: '40px',
                width: 'auto',
                filter: isLightText ? 'brightness(0) invert(1)' : 'none',
                transition: 'filter 0.4s ease'
              }}
              loading="eager"
            />
          </div>

          {/* Right navigation + controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifySelf: 'end',
            gap: '2.5rem'
          }}>
            <nav className="desktop-nav desktop-nav-right" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem'
            }}>
              {rightNav.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  style={navLinkStyle(item.path)}
                  onMouseEnter={(e) => { e.target.style.color = textColorHover; }}
                  onMouseLeave={(e) => { e.target.style.color = isActive(item.path) ? textColor : textColorMuted; }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Burger icon — always visible, Pasture style (2 lines) */}
            <button
              className="burger-btn"
              onClick={toggleMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: isLightText ? '#ffffff' : '#133238',
                padding: 0,
                transition: 'color 0.3s ease',
                flexShrink: 0
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="3" y1="8" x2="21" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="21" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen menu — Pasture split-panel style */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Dark backdrop — fades in, image is behind it */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 10000
              }}
            >
              {/* Image fills the entire backdrop */}
              <div
                className="menu-image-half"
                style={{
                  position: 'absolute',
                  inset: 0,
                  overflow: 'hidden'
                }}
              >
                <img
                  src="/images/hero/spa.webp"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.4) 100%)'
                }} />
              </div>
            </motion.div>

            {/* Right panel — slides in over the image */}
            <motion.div
              className="menu-nav-half"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'tween',
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1]
              }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '50%',
                zIndex: 10001,
                background: '#fffef6',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-20px 0 60px rgba(0,0,0,0.12)'
              }}
            >
              {/* Close button — larger, Pasture style */}
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  position: 'absolute',
                  top: '1.75rem',
                  right: '2.5rem',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#133238',
                  padding: 0,
                  zIndex: 1
                }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <line x1="6" y1="6" x2="22" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="6" y1="22" x2="22" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </motion.button>

              {/* Navigation links — Pasture style: larger, more spacing */}
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem 3rem'
              }}>
                <nav style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.1rem'
                }}>
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.path}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => {
                        handleNavigate(item.path);
                        setIsMenuOpen(false);
                      }}
                      style={{
                        display: 'block',
                        padding: '0.75rem 1.5rem',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1.15rem',
                        fontWeight: isActive(item.path) ? '700' : '400',
                        fontFamily: '"Jost", sans-serif',
                        color: isActive(item.path) ? '#133238' : 'rgba(19, 50, 56, 0.55)',
                        letterSpacing: '0.01em',
                        lineHeight: '1.6',
                        transition: 'color 0.2s ease',
                        textAlign: 'center'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#133238'; }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isActive(item.path) ? '#133238' : 'rgba(19, 50, 56, 0.55)';
                      }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                {/* Language selector — Pasture pill-button style */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    marginTop: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: '140px',
                        padding: '0.6rem 1.5rem',
                        background: 'transparent',
                        border: i18n.language === lang.code
                          ? '1.5px solid #133238'
                          : '1px solid rgba(19, 50, 56, 0.2)',
                        borderRadius: '24px',
                        cursor: 'pointer',
                        fontSize: '0.7rem',
                        fontWeight: i18n.language === lang.code ? '700' : '500',
                        fontFamily: '"Jost", sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.18em',
                        color: i18n.language === lang.code ? '#133238' : 'rgba(19, 50, 56, 0.5)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              </div>

              {/* Footer links — Pasture style */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.4 }}
                style={{
                  borderTop: '1px dotted rgba(19, 50, 56, 0.15)',
                  padding: '1.5rem 2.5rem',
                  display: 'flex',
                  gap: '2rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
              >
                {[
                  { path: '/terms', label: t('footer.terms', 'Terms & Conditions') },
                  { path: '/privacy', label: t('footer.privacy', 'Privacy') }
                ].map((link) => (
                  <button
                    key={link.path}
                    onClick={() => {
                      handleNavigate(link.path);
                      setIsMenuOpen(false);
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.65rem',
                      fontWeight: '600',
                      fontFamily: '"Jost", sans-serif',
                      textTransform: 'uppercase',
                      letterSpacing: '0.18em',
                      color: 'rgba(19, 50, 56, 0.4)',
                      padding: 0,
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#133238'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(19, 50, 56, 0.4)'; }}
                  >
                    {link.label}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Responsive styles
const headerStyles = `
  .kaif-header {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
  }

  .kaif-header .desktop-nav {
    display: flex;
  }

  .kaif-header .burger-btn {
    display: flex !important;
  }

  @media (max-width: 1024px) {
    .kaif-header .desktop-nav {
      gap: 1.25rem !important;
    }
    .kaif-header .desktop-nav button:not(.burger-btn) {
      font-size: 0.68rem !important;
      letter-spacing: 0.14em !important;
    }
  }

  @media (max-width: 768px) {
    .kaif-header .desktop-nav {
      display: none !important;
    }
    .kaif-header > div {
      padding: 0 1rem !important;
      grid-template-columns: auto 1fr auto !important;
    }
    /* On mobile: image half is hidden, nav panel is full width */
    .menu-image-half {
      display: none !important;
    }
    .menu-nav-half {
      width: 100% !important;
    }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('header-styles-v4')) {
  const oldStyle = document.getElementById('header-styles-v3') || document.getElementById('header-styles-v2');
  if (oldStyle) oldStyle.remove();
  const style = document.createElement('style');
  style.id = 'header-styles-v4';
  style.textContent = headerStyles;
  document.head.appendChild(style);
}

export default Header;
