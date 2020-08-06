import React from 'react';
import AlbumPreview from '../AlbumPreview';
import { ContentfulAlbumCollection } from '../../templates/Category';
import * as Styled from './style';

interface Props {
  albumCollection: ContentfulAlbumCollection;
  onAlbumCoverLoadComplete: () => void;
}

const AlbumCollection: React.FC<Props> = ({ albumCollection, onAlbumCoverLoadComplete }) => {
  const { title, albums } = albumCollection;

  return (
    <Styled.AlbumCollection>
      <Styled.Title>{title}</Styled.Title>

      <Styled.AlbumList>
        {albums.map(({ title, slug, cover, photos }) => (
          <AlbumPreview
            key={title}
            slug={slug}
            cover={cover}
            title={title}
            photos={photos}
            onAlbumCoverLoadComplete={onAlbumCoverLoadComplete}
          />
        ))}
      </Styled.AlbumList>
    </Styled.AlbumCollection>
  );
};

export default AlbumCollection;
