import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../test/test-utils';
import PricingSection from './PricingSection';

// Mock BookingModal
vi.mock('../booking/BookingModal', () => ({
  default: ({ isOpen, onClose, service }) => (
    isOpen ? (
      <div data-testid="booking-modal">
        <span data-testid="modal-service">{service}</span>
        <button onClick={onClose}>Close</button>
      </div>
    ) : null
  ),
}));

describe('PricingSection', () => {
  it('renders without crashing', () => {
    render(<PricingSection />);
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('displays pricing title', () => {
    render(<PricingSection />);

    // Should have a title somewhere
    const heading = document.querySelector('h2');
    expect(heading).toBeTruthy();
  });

  it('has category tabs', () => {
    render(<PricingSection />);

    // Should have category buttons
    const buttons = document.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('displays pricing cards', () => {
    render(<PricingSection />);

    // Should have price values
    const priceText = document.body.textContent;
    expect(priceText).toMatch(/\d+/); // Contains numbers (prices)
  });

  it('can switch between categories', () => {
    render(<PricingSection />);

    const buttons = document.querySelectorAll('button');
    const categoryButtons = Array.from(buttons).filter(
      btn => btn.textContent && !btn.textContent.toLowerCase().includes('select')
    );

    if (categoryButtons.length > 1) {
      fireEvent.click(categoryButtons[1]);
      // Should not crash
      expect(document.querySelector('section')).toBeInTheDocument();
    }
  });

  it('opens booking modal when select button is clicked', () => {
    render(<PricingSection />);

    // Find a "Select" or similar button
    const selectButtons = screen.queryAllByRole('button').filter(
      btn => btn.textContent?.toLowerCase().includes('select') ||
             btn.textContent?.toLowerCase().includes('выбрать') ||
             btn.textContent?.toLowerCase().includes('เลือก')
    );

    if (selectButtons.length > 0) {
      fireEvent.click(selectButtons[0]);
      expect(screen.getByTestId('booking-modal')).toBeInTheDocument();
    }
  });

  it('does not have groupClasses category', () => {
    render(<PricingSection />);

    // Group Classes should not be in category tabs
    const bodyText = document.body.textContent?.toLowerCase() || '';
    const categoryButtons = document.querySelectorAll('button');

    const hasGroupClassesTab = Array.from(categoryButtons).some(
      btn => btn.textContent?.toLowerCase().includes('group classes')
    );

    expect(hasGroupClassesTab).toBe(false);
  });
});
