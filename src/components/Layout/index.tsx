import React from 'react';
import { ThemeProvider } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Navigation from '../Navigation';
import Footer from '../Footer';
import theme from '../../../config/theme';
import GlobalStyles, * as Styled from './style';

interface Props {
  dark: boolean;
}

const Layout: React.FC<Props> = ({ children, dark }) => {
  const data = useStaticQuery(query);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Styled.Wrapper>
          <Navigation dark={dark} navigation={data.navigation} />

          <Styled.Main>{children}</Styled.Main>

          <Footer dark={dark} />
        </Styled.Wrapper>
      </>
    </ThemeProvider>
  );
};

export default Layout;

const query = graphql`
  query Layout {
    navigation: allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`;
