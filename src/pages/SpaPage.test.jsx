import { describe, it, expect, vi } from 'vitest';
import { render } from '../test/test-utils';
import SpaPage from './SpaPage';

vi.mock('../components/common/PageScrollReset', () => ({
  default: () => null,
}));

describe('SpaPage', () => {
  it('renders without crashing', () => {
    render(<SpaPage />);
    expect(document.body).toBeTruthy();
  });

  it('renders without errors', () => {
    expect(() => render(<SpaPage />)).not.toThrow();
  });
});
