import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from './test-utils';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Test component to display current location
const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location">{location.pathname}</div>;
};

// Simple test pages
const TestHome = () => <div data-testid="home-page">Home Page</div>;
const TestRestaurant = () => <div data-testid="restaurant-page">Restaurant Page</div>;
const TestSpa = () => <div data-testid="spa-page">Spa Page</div>;
const TestSports = () => <div data-testid="sports-page">Sports Page</div>;
const TestBanya = () => <div data-testid="banya-page">Banya Page</div>;
const TestContacts = () => <div data-testid="contacts-page">Contacts Page</div>;

const TestApp = () => (
  <>
    <nav>
      <Link to="/" data-testid="link-home">Home</Link>
      <Link to="/restaurant" data-testid="link-restaurant">Restaurant</Link>
      <Link to="/spa" data-testid="link-spa">Spa</Link>
      <Link to="/sports" data-testid="link-sports">Sports</Link>
      <Link to="/banya" data-testid="link-banya">Banya</Link>
      <Link to="/contacts" data-testid="link-contacts">Contacts</Link>
    </nav>
    <LocationDisplay />
    <Routes>
      <Route path="/" element={<TestHome />} />
      <Route path="/restaurant" element={<TestRestaurant />} />
      <Route path="/spa" element={<TestSpa />} />
      <Route path="/sports" element={<TestSports />} />
      <Route path="/banya" element={<TestBanya />} />
      <Route path="/contacts" element={<TestContacts />} />
    </Routes>
  </>
);

describe('Navigation', () => {
  it('renders home page by default', () => {
    render(<TestApp />, { initialEntries: ['/'] });

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/');
  });

  it('navigates to restaurant page', () => {
    render(<TestApp />, { initialEntries: ['/restaurant'] });

    expect(screen.getByTestId('restaurant-page')).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/restaurant');
  });

  it('navigates to spa page', () => {
    render(<TestApp />, { initialEntries: ['/spa'] });

    expect(screen.getByTestId('spa-page')).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/spa');
  });

  it('navigates to sports page', () => {
    render(<TestApp />, { initialEntries: ['/sports'] });

    expect(screen.getByTestId('sports-page')).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/sports');
  });

  it('navigates to banya page', () => {
    render(<TestApp />, { initialEntries: ['/banya'] });

    expect(screen.getByTestId('banya-page')).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/banya');
  });

  it('navigates to contacts page', () => {
    render(<TestApp />, { initialEntries: ['/contacts'] });

    expect(screen.getByTestId('contacts-page')).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/contacts');
  });

  it('all navigation links are present', () => {
    render(<TestApp />, { initialEntries: ['/'] });

    expect(screen.getByTestId('link-home')).toBeInTheDocument();
    expect(screen.getByTestId('link-restaurant')).toBeInTheDocument();
    expect(screen.getByTestId('link-spa')).toBeInTheDocument();
    expect(screen.getByTestId('link-sports')).toBeInTheDocument();
    expect(screen.getByTestId('link-banya')).toBeInTheDocument();
    expect(screen.getByTestId('link-contacts')).toBeInTheDocument();
  });
});

describe('Route Paths', () => {
  const routes = [
    { path: '/', testId: 'home-page' },
    { path: '/restaurant', testId: 'restaurant-page' },
    { path: '/spa', testId: 'spa-page' },
    { path: '/sports', testId: 'sports-page' },
    { path: '/banya', testId: 'banya-page' },
    { path: '/contacts', testId: 'contacts-page' },
  ];

  routes.forEach(({ path, testId }) => {
    it(`renders correct page for path: ${path}`, () => {
      render(<TestApp />, { initialEntries: [path] });
      expect(screen.getByTestId(testId)).toBeInTheDocument();
    });
  });
});
