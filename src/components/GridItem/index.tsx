import React from 'react';
import Img from 'gatsby-image';
import { ChildImageSharpFluid } from '../../types';
import * as Styled from './style';

interface Props {
  slug: string;
  title: string;
  gridArea?: string;
  ariaLabel: string;
  image: ChildImageSharpFluid;
}

const GridItem: React.FC<Props> = ({ slug, title, gridArea, ariaLabel, image }) => (
  <Styled.GridItem
    to={slug}
    style={{ gridArea }}
    aria-label={ariaLabel}
  >
    <Img fluid={image} />
    <Styled.Title>{title}</Styled.Title>
  </Styled.GridItem>
);

export default GridItem;
