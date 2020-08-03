import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.theme.sidebarWidth.big} 1fr;
  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
    grid-template-columns: ${(props) => props.theme.sidebarWidth.normal} 1fr;
  }

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
  }
`;

export const Main = styled.main`
  @media (min-width: calc(${(props) => props.theme.breakpoints[2]} + 1px)) {
    grid-column-start: 2;
  }
`;
