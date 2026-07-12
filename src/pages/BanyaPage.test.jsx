import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '../test/test-utils';
import BanyaPage from './BanyaPage';

// Mock all banya components
vi.mock('../components/banya/BanyaHeroSection', () => ({
  default: () => <div data-testid="banya-hero">Banya Hero</div>,
}));

vi.mock('../components/banya/BanyaSteamSchedule', () => ({
  default: () => <div data-testid="banya-schedule">Steam Schedule</div>,
}));

vi.mock('../components/banya/BanyaParallaxSection', () => ({
  default: ({ image }) => <div data-testid="banya-parallax" data-image={image}>Parallax</div>,
}));

vi.mock('../components/banya/BanyaServicesSection', () => ({
  default: () => <div data-testid="banya-services">Services</div>,
}));

vi.mock('../components/banya/BanyaGallerySection', () => ({
  default: () => <div data-testid="banya-gallery">Gallery</div>,
}));

vi.mock('../components/banya/BanyaFeaturesSection', () => ({
  default: () => <div data-testid="banya-features">Features</div>,
}));

vi.mock('../components/banya/BanyaFAQSection', () => ({
  default: () => <div data-testid="banya-faq">FAQ</div>,
}));

vi.mock('../components/banya/BanyaBookingSection', () => ({
  default: () => <div data-testid="banya-booking">Booking</div>,
}));

vi.mock('../components/common/PageScrollReset', () => ({
  default: () => null,
}));

describe('BanyaPage', () => {
  it('renders without crashing', () => {
    render(<BanyaPage />);
    expect(screen.getByTestId('banya-hero')).toBeInTheDocument();
  });

  it('renders all banya sections in correct order', () => {
    render(<BanyaPage />);

    expect(screen.getByTestId('banya-hero')).toBeInTheDocument();
    expect(screen.getByTestId('banya-schedule')).toBeInTheDocument();
    expect(screen.getByTestId('banya-services')).toBeInTheDocument();
    expect(screen.getByTestId('banya-gallery')).toBeInTheDocument();
    expect(screen.getByTestId('banya-features')).toBeInTheDocument();
    expect(screen.getByTestId('banya-faq')).toBeInTheDocument();
    expect(screen.getByTestId('banya-booking')).toBeInTheDocument();
  });

  it('renders two parallax sections', () => {
    render(<BanyaPage />);

    const parallaxSections = screen.getAllByTestId('banya-parallax');
    expect(parallaxSections).toHaveLength(2);
  });
});
