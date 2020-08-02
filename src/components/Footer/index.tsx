import React from 'react';
import { Box } from '../../elements';
import * as Styled from './style';

interface Props {
  dark: boolean;
}

const Seb = (
	<a href="https://www.instagram.com/frostbelt/">Sebastien Blanchard</a>
);

const Guillaume = (
	<a href="https://www.instagram.com/epgui/">Guillaume Pelletier</a>
);

const Footer: React.FC<Props> = ({ dark }) => (
  <Styled.Footer color={dark ? "#000" : "#FFF"}>
    <Box p={[6, 6, 8]} fontSize={0}>
      {Seb} and {Guillaume} are two scientists with a common passion for photography.
    </Box>
  </Styled.Footer>
);

export default Footer;
