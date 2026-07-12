import { describe, it, expect } from 'vitest';
import { render, screen } from '../../test/test-utils';
import Footer from './Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    expect(document.querySelector('footer')).toBeInTheDocument();
  });

  it('displays copyright with current year', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it('displays KAIF brand name', () => {
    render(<Footer />);

    expect(screen.getByText('KAIF')).toBeInTheDocument();
  });

  it('has navigation links', () => {
    render(<Footer />);

    // Check for navigation section
    const links = document.querySelectorAll('footer a');
    expect(links.length).toBeGreaterThan(0);
  });

  it('has social media links', () => {
    render(<Footer />);

    // Check for social links (Instagram, Facebook, Telegram, YouTube, WhatsApp)
    const instagramLink = document.querySelector('a[href*="instagram"]');
    const facebookLink = document.querySelector('a[href*="facebook"]');
    const telegramLink = document.querySelector('a[href*="t.me"]');

    expect(instagramLink).toBeTruthy();
    expect(facebookLink).toBeTruthy();
    expect(telegramLink).toBeTruthy();
  });

  it('has contact information', () => {
    render(<Footer />);

    // Phone number
    const phoneLink = document.querySelector('a[href*="tel:"]');
    expect(phoneLink).toBeTruthy();
  });

  it('has legal links (Privacy, Terms)', () => {
    render(<Footer />);

    const privacyLink = document.querySelector('a[href="/privacy"]');
    const termsLink = document.querySelector('a[href="/terms"]');

    expect(privacyLink).toBeTruthy();
    expect(termsLink).toBeTruthy();
  });
});
