import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from '../common/FloatingWhatsApp';

const MainContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: #FFFFFF;
`;

const MainContent = styled.main`
  width: 100%;
  position: relative;
  z-index: 0;
  flex: 1 0 auto;
  margin: 0;
  padding: 0;
  background: #FFFFFF;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>
        <MainContent>
          {children}
        </MainContent>
        <Footer />
      </MainContainer>
      <FloatingWhatsApp />
    </>
  );
};

export default Layout;
