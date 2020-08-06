import React from 'react';
import Img from 'gatsby-image';
import { ChildImageSharpFluid } from '../../types';
import * as Styled from './style';

interface Props {
  url: string;
  title: string;
  textColor?: string;
  gridArea?: string;
  ariaLabel: string;
  image: ChildImageSharpFluid;
}

const GridItem: React.FC<Props> = props => {
  const { url, title, textColor, gridArea, ariaLabel, image } = props;

  return (
    <Styled.GridItem
      to={url}
      style={{ gridArea }}
      aria-label={ariaLabel}
    >
      <Img fluid={image} />

      <Styled.Title textColor={textColor || "#FFF"}>
        {title}
      </Styled.Title>
    </Styled.GridItem>
  );
};

export default GridItem;
