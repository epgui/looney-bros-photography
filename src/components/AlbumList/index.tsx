import React from 'react';
import AlbumPreview from '../AlbumPreview';
import { ContentfulAlbum } from '../../templates/Album';
import * as Styled from './style';

interface Props {
  albums: Array<ContentfulAlbum>;
  onAlbumCoverLoadComplete: () => void;
}

const AlbumList: React.FC<Props> = ({ albums, onAlbumCoverLoadComplete }) => (
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
          onAlbumCoverLoadComplete={onAlbumCoverLoadComplete}
        />
      ))}
    </Styled.AlbumList>
  </Styled.AlbumListContainer>
);

export default AlbumList;
