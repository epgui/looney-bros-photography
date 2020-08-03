import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navigation from '../Navigation';
import Footer from '../Footer';
import theme from '../Globals/theme';
import GlobalStyles from '../Globals';
import * as Styled from './style';

interface Props {
  dark: boolean;
}

const Layout: React.FC<Props> = ({ children, dark }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />

      <Styled.Wrapper>
        <Navigation dark={dark} />

        <Styled.Main>{children}</Styled.Main>

        <Footer dark={dark} />
      </Styled.Wrapper>
    </>
  </ThemeProvider>
);

export default Layout;
