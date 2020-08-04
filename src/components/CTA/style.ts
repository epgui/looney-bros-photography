import styled from 'styled-components';
import { readableColor } from 'polished';
import { Button } from '../Globals';

interface ButtonProps {
	color: string;
}

export const CtaButton = styled(Button)<ButtonProps>`
  background: ${(props) => (props.color === 'white' ? 'black' : props.color)};
  color: ${(props) => readableColor(props.color === 'white' ? 'black' : props.color)};
  text-decoration: none;

  &:hover {
  	background: #FFBE00;
	  color: ${(props) => readableColor(props.color === 'white' ? 'black' : props.color)};
	  cursor: pointer;
  }
`;

export const CallToAction = styled.h2`
`;
