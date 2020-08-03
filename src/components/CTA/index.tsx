import React from 'react';
import styled from 'styled-components';
import { readableColor } from 'polished';
import { Button } from '../Globals';

const PButton = styled(Button)<{ color: string }>`
  background: ${(props) => (props.color === 'white' ? 'black' : props.color)};
  color: ${(props) => readableColor(props.color === 'white' ? 'black' : props.color)};
`;

interface Props {
  color: string;
}

const CTA: React.FC<Props> = ({ color }) => (
  <>
    <h2>Want to start your own project?</h2>
    <PButton color={color} py={4} px={8}>
      Contact Us
    </PButton>
  </>
);

export default CTA;
