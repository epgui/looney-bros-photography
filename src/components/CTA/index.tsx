import React from 'react';
import * as Styled from './style';

interface Props {
  color: string;
  text: string;
}

const CTA: React.FC<Props> = ({ color, text }) => (
  <>
    <Styled.CallToAction>{text}</Styled.CallToAction>
    <Styled.CtaButton
      as="a"
      href="mailto:guigui.p@gmail.com"
      color={color}
      py={4}
      px={8}
    >
      Email us
    </Styled.CtaButton>
  </>
);

export default CTA;
