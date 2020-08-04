import { createGlobalStyle, css } from 'styled-components';
import reset from './reset';
import theme from './theme';

const A = css`
  transition: all 0.3s ease-in-out;
  color: black;
  text-decoration: underline;
  &:hover,
  &:focus {
    color: ${theme.colors.primary};
  }
`;

const H1 = css`
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes[5]};

  @media (max-width: 600px) {
    font-size: ${theme.fontSizes[4]};
  }
`;

const H2 = css`
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes[4]};

  @media (max-width: 600px) {
    font-size: ${theme.fontSizes[3]};
  }
`;

const H3 = css`
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes[3]};

  @media (max-width: 600px) {
    font-size: ${theme.fontSizes[2]};
  }
`;

const H4 = css`
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes[2]};

  @media (max-width: 600px) {
    font-size: ${theme.fontSizes[1]};
  }
`;

const H5 = css`
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes[1]};

  @media (max-width: 600px) {
    font-size: ${theme.fontSizes[0]};
  }
`;

const H6 = css`
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes[0]};

  @media (max-width: 600px) {
    font-size: ${theme.fontSizes[0]};
  }
`;

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    color: white;
    background-color: #f6993f;
  }

  html {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  body {
    border: 0;
    margin: 0;
    padding: 0;
    color: black;
    font-family: 'Titillium Web', '-apple-system', 'Helvetica', 'Arial', sans-serif;
    font-weight: 300;
    background: white;
    font-size: 18px;
  }

  h1 { ${H1} }
  h2 { ${H2} }
  h3 { ${H3} }
  h4 { ${H4} }
  h5 { ${H5} }
  h6 { ${H6} }
  a  { ${A}  }
  
  ${reset}
`;

export * from './type';
export { AnimatedBox } from './Elements/animatedBox';
export { AnimatedFlex } from './Elements/animatedFlex';
export { Box } from './Elements/box';
export { Flex } from './Elements/flex';
export { Button } from './Elements/button';

export default GlobalStyles;
