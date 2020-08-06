import styled from 'styled-components';
import { Link } from 'gatsby';

export const GridItem = styled(Link)`
  position: relative;

  > div {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    img {
      transition: all 0.3s ease 0s !important;
    }
  }
  
  &:hover {
    > div img {
      transform: scale(1.1);
    }
  }
`;

interface TitleProps {
  textColor: string;
}

export const Title = styled.span<TitleProps>`
  color: ${props => props.textColor};
  font-family: 'Titillium Web', sans-serif;
  font-size: ${(props) => props.theme.fontSizes[4]};
  font-weight: 700;
  left: 0;
  padding: ${(props) => props.theme.space[6]};
  position: absolute;
  right: 0;
  text-align: right;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    font-size: ${(props) => props.theme.fontSizes[3]};
    padding: ${(props) => props.theme.space[5]};
  }
`;
