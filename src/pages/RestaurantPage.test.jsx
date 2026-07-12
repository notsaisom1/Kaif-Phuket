import { describe, it, expect, vi } from 'vitest';
import { render } from '../test/test-utils';
import RestaurantPage from './RestaurantPage';

vi.mock('../components/common/PageScrollReset', () => ({
  default: () => null,
}));

describe('RestaurantPage', () => {
  it('renders without crashing', () => {
    render(<RestaurantPage />);
    expect(document.body).toBeTruthy();
  });

  it('renders without errors', () => {
    expect(() => render(<RestaurantPage />)).not.toThrow();
  });
});
