import styled from 'styled-components';
import { readableColor } from 'polished';
import { Box, Flex } from '../Globals';

export const SideBarInner = styled(Box)<{ bg: string }>`
  position: fixed;
  height: 100%;
  width: ${(props) => props.theme.sidebarWidth.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${(props) => props.bg};

  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
    width: ${(props) => props.theme.sidebarWidth.normal};
  }

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }

  svg {
    fill: ${(props) => readableColor(`${props.bg}`)};
  }
`;

export const Nav = styled(Flex)<{ color: string }>`
  a {
    text-decoration: none;
    color: ${(props) => readableColor(`${props.color}`)};
    font-size: ${(props) => props.theme.fontSizes[2]};
    line-height: 2;

    &:hover,
    &:focus,
    &.navlink-active {
      color: ${(props) => props.theme.colors.primary};
    }

    @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
      font-size: ${(props) => props.theme.fontSizes[2]};
      margin-left: ${(props) => props.theme.space[4]};
    }

    @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
      font-size: ${(props) => props.theme.fontSizes[1]};
      margin-left: ${(props) => props.theme.space[3]};
    }

    @media (max-width: ${(props) => props.theme.breakpoints[0]}) {
      font-size: ${(props) => props.theme.fontSizes[0]};
      margin-left: ${(props) => props.theme.space[2]};
    }
  }
`;
