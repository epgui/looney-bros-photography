import styled from 'styled-components';
import { readableColor } from 'polished';

export const Footer = styled.footer<{ color: string }>`
  position: fixed;
  width: ${(props) => props.theme.sidebarWidth.big};
  bottom: 0;

  background: ${(props) => props.color};

  color: ${(props) => readableColor(`${props.color}`, `${props.theme.colors.grey}`, '#c3c3c3')};

  a {
    color: ${(props) => readableColor(`${props.color}`)};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
    width: ${(props) => props.theme.sidebarWidth.normal};
  }

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }
`;
