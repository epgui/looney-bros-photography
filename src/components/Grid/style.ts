import styled from 'styled-components';
import { animated } from 'react-spring';

export const Grid = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 35vw 40vw 25vw;
  grid-template-areas:
    'portraiture weddings   weddings'
    'editorial   tinder     animalia'
    'landscapes  landscapes landscapes';

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 35vw 30vw 30vw 25vw;

    grid-template-areas:
      'portraiture portraiture portraiture weddings    weddings    weddings'
      'editorial   editorial   tinder      tinder      animalia    animalia'
      'editorial   editorial   tinder      tinder      animalia    animalia'
      'landscapes  landscapes  landscapes  landscapes  landscapes  landscapes';
  }

  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 38vw);

    grid-template-areas:
      'portraiture'
      'weddings'
      'editorial'
      'tinder'
      'animalia'
      'landscapes';
  }

  @media (max-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 50vw);

    grid-template-areas:
      'portraiture'
      'weddings'
      'editorial'
      'tinder'
      'animalia'
      'landscapes';
  }
`;
