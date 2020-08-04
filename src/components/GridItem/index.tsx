import React from 'react';
import Img from 'gatsby-image';
import { ChildImageSharpFluid } from '../../types';
import * as Styled from './style';

interface Props {
  url: string;
  title: string;
  gridArea?: string;
  ariaLabel: string;
  image: ChildImageSharpFluid;
}

const GridItem: React.FC<Props> = ({ url, title, gridArea, ariaLabel, image }) => (
  <Styled.GridItem
    to={url}
    style={{ gridArea }}
    aria-label={ariaLabel}
  >
    <Img fluid={image} />
    <Styled.Title>{title}</Styled.Title>
  </Styled.GridItem>
);

export default GridItem;
