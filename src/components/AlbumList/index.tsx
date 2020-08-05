import React from 'react';
import AlbumPreview from '../AlbumPreview';
import { ContentfulAlbum } from '../../templates/Album';
import * as Styled from './style';

interface Props {
  albums: Array<ContentfulAlbum>;
}

const AlbumList: React.FC<Props> = ({ albums }) => {
  return (
    <Styled.AlbumListContainer>
      <Styled.AlbumListHeader>Albums</Styled.AlbumListHeader>

      <Styled.AlbumList>
        {albums.map(({ title, slug, cover, photos }) => (
          <AlbumPreview
            key={title}
            slug={slug}
            cover={cover}
            title={title}
            photos={photos}
          />
        ))}
      </Styled.AlbumList>
    </Styled.AlbumListContainer>
  );
};

export default AlbumList;
