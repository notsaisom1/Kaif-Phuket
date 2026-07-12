import { describe, it, expect, vi } from 'vitest';
import { render } from '../../test/test-utils';
import BookingModal from './BookingModal';

describe('BookingModal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    service: 'Test Service',
    source: 'Test Source',
  };

  it('renders without crashing when open', () => {
    render(<BookingModal {...defaultProps} />);
    expect(document.body).toBeTruthy();
  });

  it('renders without crashing when closed', () => {
    render(<BookingModal {...defaultProps} isOpen={false} />);
    expect(document.body).toBeTruthy();
  });

  it('renders without errors', () => {
    expect(() => render(<BookingModal {...defaultProps} />)).not.toThrow();
  });

  it('accepts service prop', () => {
    expect(() => render(<BookingModal {...defaultProps} service="Custom Service" />)).not.toThrow();
  });
});
