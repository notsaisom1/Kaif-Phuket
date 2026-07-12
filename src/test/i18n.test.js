import { describe, it, expect, beforeEach } from 'vitest';
import i18n from '../i18n';

describe('i18n Configuration', () => {
  beforeEach(() => {
    i18n.changeLanguage('en');
  });

  it('initializes with English as default language', () => {
    expect(i18n.language).toBe('en');
  });

  it('has English translations loaded', () => {
    expect(i18n.hasResourceBundle('en', 'translation')).toBe(true);
  });

  it('has Russian translations loaded', () => {
    expect(i18n.hasResourceBundle('ru', 'translation')).toBe(true);
  });

  it('has Thai translations loaded', () => {
    expect(i18n.hasResourceBundle('th', 'translation')).toBe(true);
  });

  it('can change language to Russian', async () => {
    await i18n.changeLanguage('ru');
    expect(i18n.language).toBe('ru');
  });

  it('can change language to Thai', async () => {
    await i18n.changeLanguage('th');
    expect(i18n.language).toBe('th');
  });

  it('falls back to English for unknown language', async () => {
    await i18n.changeLanguage('unknown');
    expect(i18n.options.fallbackLng).toContain('en');
  });

  it('translates navigation.home correctly in English', () => {
    i18n.changeLanguage('en');
    const translated = i18n.t('navigation.home');
    expect(translated).toBeTruthy();
    expect(translated).not.toBe('navigation.home'); // Should not return the key
  });

  it('translates navigation.home correctly in Russian', async () => {
    await i18n.changeLanguage('ru');
    const translated = i18n.t('navigation.home');
    expect(translated).toBeTruthy();
  });

  it('has page titles for all languages', () => {
    const languages = ['en', 'ru', 'th'];

    languages.forEach(lang => {
      i18n.changeLanguage(lang);
      const homeTitle = i18n.t('page_titles.home');
      expect(homeTitle).toBeTruthy();
      expect(homeTitle).not.toBe('page_titles.home');
    });
  });
});

describe('Translation Keys', () => {
  beforeEach(() => {
    i18n.changeLanguage('en');
  });

  it('has navigation translations', () => {
    const navKeys = ['home', 'restaurant', 'spa', 'sports', 'contacts'];

    navKeys.forEach(key => {
      const translated = i18n.t(`navigation.${key}`);
      expect(translated).toBeTruthy();
      expect(translated).not.toBe(`navigation.${key}`);
    });
  });

  it('has footer translations', () => {
    const footerKey = i18n.t('footer.copyright');
    expect(footerKey).toBeTruthy();
  });

  it('has pricing translations', () => {
    const pricingTitle = i18n.t('pricing.title');
    expect(pricingTitle).toBeTruthy();
  });
});
