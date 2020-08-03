import React from 'react';
import * as Styled from './style';
import * as Type from '../../types';

interface Props {
  name: string;
  title: string;
  orientation: "right" | "left";
  image: Type.Image;
}

const Bio: React.FC<Props> = ({ children, ...props }) => {
  const { name, title, orientation, image } = props;

  return (
    <Styled.Bio>
      <Styled.Portrait fluid={image.childImageSharp.fluid} />
      <Styled.CopyArea>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{children}</Styled.Description>
      </Styled.CopyArea>
    </Styled.Bio>
  );
};

export default Bio;
