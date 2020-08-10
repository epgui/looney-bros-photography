import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { config, useSpring } from 'react-spring';
import { ContentfulAlbum } from '../Album';
import Layout from '../../components/Layout';
import RichText from '../../components/RichText';
import AlbumCollection from '../../components/AlbumCollection';
import SEO from '../../components/SEO';
import CTA from '../../components/CTA';
import * as Type from '../../types';
import * as Styled from './style';

export type ContentfulAlbumCollection = {
  title: string;
  albums: Array<ContentfulAlbum>;
}

export type ContentfulCategory = {
  shortTitle: string;
  textOverlayColor?: string;
  longTitle: string;
  slug: string;
  order: number;
  cover?: Type.Image;
  description: {
    json: any;
  }
  albumCollections: Array<ContentfulAlbumCollection>;
  photos: Array<Type.Image>;
  cta: string;
}

type PageProps = {
  data: {
    category: ContentfulCategory;
  };
};

const Project: React.FunctionComponent<PageProps> = ({ data }) => {
  const {
    longTitle,
    slug,
    description,
    albumCollections,
    photos,
    cta
  } = data.category;

  const [albumsLoaded, setAlbumsLoaded] = useState(0);

  const numberOfAlbumsPerCollection: Array<number> =
    albumCollections?.length > 0 ? albumCollections.map((albumCollection) => (
      albumCollection?.albums?.length || 0
    )) : [0];

  const numberOfAlbums = numberOfAlbumsPerCollection.reduce((a, b) => a + b);

  const onAlbumCoverLoadComplete = () => {
    setAlbumsLoaded(prevCount => prevCount + 1);
  }

  const largeImagesLoadingMode = albumsLoaded === numberOfAlbums ? 'eager' : 'lazy';

  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })

  const titleAnimation = useSpring({
    config: config.slow,
    delay: 300,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  const descAnimation = useSpring({
    config: config.slow,
    delay: 600,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  const imagesAnimation = useSpring({
    config: config.slow,
    delay: 800,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  return (
    <Layout dark={true}>
      <SEO
        pathname={slug}
        title={`${longTitle} | Looney Bros. Photography`}
        desc={""}
        node={""}
        individual
      />

      <Styled.PBox py={10} px={[6, 6, 8, 10]}>
        <Styled.Category style={categoryAnimation}>
          Category
        </Styled.Category>

        <Styled.Title style={titleAnimation}>
          {longTitle}
        </Styled.Title>

        <Styled.Description style={descAnimation}>
          <RichText content={description.json} />
        </Styled.Description>

        {albumCollections && (
          <div>
            {albumCollections.map((albumCollection, key) => (
              <AlbumCollection
                key={key}
                albumCollection={albumCollection}
                onAlbumCoverLoadComplete={onAlbumCoverLoadComplete}
              />
            ))}
          </div>
        )}
      </Styled.PBox>

      <Styled.Content bg="black" py={10}>
        <Styled.PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          {photos.map(({ fluid }) => (
            <Img
              alt={""}
              key={fluid.src}
              fluid={fluid}
              loading={largeImagesLoadingMode}
            />
          ))}
        </Styled.PBox>
      </Styled.Content>

      <Styled.PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <CTA color="black" text={cta} />
      </Styled.PBox>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query CategoryTemplate($slug: String!) {
    category: contentfulCategory(slug: { eq: $slug }) {
      longTitle
      slug
      description {
        json
      }
      albumCollections {
        title
        albums {
          title
          slug
          cover {
            fluid(quality: 60, maxWidth: 800) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          photos {
            fluid(quality: 60, maxWidth: 1200) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
      photos {
        fluid(quality: 60, maxWidth: 1200) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      cta
    }
  }
`;
