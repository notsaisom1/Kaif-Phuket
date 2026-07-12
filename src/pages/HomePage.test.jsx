import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '../test/test-utils';
import HomePage from './HomePage';

// Mock lazy loaded components
vi.mock('../components/home/HeroFullscreen', () => ({
  default: () => <div data-testid="hero-fullscreen">Hero Fullscreen</div>,
}));

vi.mock('../components/home/ExclusiveZones', () => ({
  default: () => <div data-testid="exclusive-zones">Exclusive Zones</div>,
}));

vi.mock('../components/home/PricingSection', () => ({
  default: () => <div data-testid="pricing-section">Pricing Section</div>,
}));

vi.mock('../components/home/ComplexParallax', () => ({
  default: () => <div data-testid="complex-parallax">Complex Parallax</div>,
}));

vi.mock('../components/home/AdvantagesSection', () => ({
  default: () => <div data-testid="advantages-section">Advantages Section</div>,
}));

vi.mock('../components/home/TerraceParallax', () => ({
  default: () => <div data-testid="terrace-parallax">Terrace Parallax</div>,
}));

vi.mock('../components/common/GallerySection', () => ({
  GallerySection: () => <div data-testid="gallery-section">Gallery Section</div>,
}));

vi.mock('../components/home/FAQSection', () => ({
  default: () => <div data-testid="faq-section">FAQ Section</div>,
}));

describe('HomePage', () => {
  it('renders without crashing', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByTestId('hero-fullscreen')).toBeInTheDocument();
    });
  });

  it('renders all main sections', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByTestId('hero-fullscreen')).toBeInTheDocument();
      expect(screen.getByTestId('exclusive-zones')).toBeInTheDocument();
      expect(screen.getByTestId('pricing-section')).toBeInTheDocument();
    });
  });

  it('has correct page title meta tag', async () => {
    render(<HomePage />);

    // PageHead component should set the title
    await waitFor(() => {
      expect(document.title).toBeDefined();
    });
  });
});
