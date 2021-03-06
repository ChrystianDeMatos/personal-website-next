import React, { useState, useEffect } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/assets/theme'

import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';

import Header from '../src/components/Header';

import Footer from '../src/components/Footer';
import SEO from '../src/components/SEO';

function App({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App