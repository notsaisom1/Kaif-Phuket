import { describe, it, expect, vi } from 'vitest';
import { render } from '../../test/test-utils';
import Header from './Header';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    header: ({ children, ...props }) => <header {...props}>{children}</header>,
    nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    a: ({ children, ...props }) => <a {...props}>{children}</a>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
  useScroll: () => ({ scrollY: { get: () => 0, onChange: () => () => {} } }),
  useTransform: () => 0,
  useMotionValueEvent: () => {},
}));

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(document.querySelector('header')).toBeInTheDocument();
  });

  it('renders header element', () => {
    render(<Header />);
    const header = document.querySelector('header');
    expect(header).toBeTruthy();
  });

  it('renders without errors', () => {
    expect(() => render(<Header />)).not.toThrow();
  });
});
