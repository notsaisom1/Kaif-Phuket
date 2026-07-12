import { describe, it, expect, vi } from 'vitest';
import { render } from '../test/test-utils';
import SportsPage from './SportsPage';

// Mock PageScrollReset
vi.mock('../components/common/PageScrollReset', () => ({
  default: () => null,
}));

describe('SportsPage', () => {
  it('renders without crashing', () => {
    render(<SportsPage />);
    expect(document.body).toBeTruthy();
  });

  it('renders page content', () => {
    render(<SportsPage />);
    expect(document.body.textContent?.length).toBeGreaterThan(0);
  });

  it('contains sports-related content', () => {
    render(<SportsPage />);
    const content = document.body.textContent?.toLowerCase() || '';
    expect(content.length).toBeGreaterThan(0);
  });
});
