import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { ContentfulAlbum } from '../../templates/Album';
import * as Styled from './style';

interface AlbumPreview extends ContentfulAlbum {
  onAlbumCoverLoadComplete: () => void;
}

const AlbumPreview: React.FC<AlbumPreview> = props => {
  const { title, slug, cover, photos, onAlbumCoverLoadComplete } = props;
  
  console.log({ props })

  return (
    <Styled.Album to={`/album/${slug}`}>
      <Styled.AlbumCover
        fluid={cover.fluid}
        onLoad={onAlbumCoverLoadComplete}
        loading="lazy"
      />

      <Styled.Title className="title">
        {title}
      </Styled.Title>

      <Styled.NumberOfItems className="number-of-items">
        <FontAwesomeIcon icon={faImages} style={{ margin: '0.4em 0.4em 0 1px' }} />
        {photos.length} Photos
      </Styled.NumberOfItems>
    </Styled.Album>
  );
};

export default AlbumPreview;
