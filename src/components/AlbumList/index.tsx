import React from 'react';
import * as Styled from './style';

interface Props {
  albums: Array<any>;
}

const AlbumList: React.FC<Props> = ({ albums }) => {
  return (
    <Styled.AlbumListContainer>
      <Styled.Title>Sample albums</Styled.Title>
      <Styled.AlbumList>
        {albums.map(({ cover }) => (
          <Styled.Album>
            <Styled.AlbumCover image={cover} />
          </Styled.Album>
        ))}
      </Styled.AlbumList>
    </Styled.AlbumListContainer>
  );
};

export default AlbumList;
