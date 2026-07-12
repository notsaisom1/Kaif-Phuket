import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { theme } from '../theme.fixed';
import { LoadingProvider } from '../components/global/LoadingContext';
import { CmsProvider } from '../context/CmsContext';

// Wrapper component with all providers
const AllProviders = ({ children, initialEntries = ['/'] }) => {
  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <LoadingProvider>
            <MemoryRouter initialEntries={initialEntries}>
              <CmsProvider>{children}</CmsProvider>
            </MemoryRouter>
          </LoadingProvider>
        </ThemeProvider>
      </I18nextProvider>
    </HelmetProvider>
  );
};

// Custom render function
const customRender = (ui, options = {}) => {
  const { initialEntries, ...renderOptions } = options;
  return render(ui, {
    wrapper: ({ children }) => (
      <AllProviders initialEntries={initialEntries}>{children}</AllProviders>
    ),
    ...renderOptions,
  });
};

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };

// Helper to wait for lazy loaded components
export const waitForLazyComponent = () => new Promise(resolve => setTimeout(resolve, 100));

// Helper to create mock translation function
export const createMockT = () => (key, defaultValue) => defaultValue || key;
