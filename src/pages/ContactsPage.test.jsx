import { describe, it, expect, vi } from 'vitest';
import { render } from '../test/test-utils';
import ContactsPage from './ContactsPage';

vi.mock('../components/common/PageScrollReset', () => ({
  default: () => null,
}));

describe('ContactsPage', () => {
  it('renders without crashing', () => {
    render(<ContactsPage />);
    expect(document.body).toBeTruthy();
  });

  it('renders without errors', () => {
    expect(() => render(<ContactsPage />)).not.toThrow();
  });
});
