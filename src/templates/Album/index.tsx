import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { config, useSpring } from 'react-spring';
import Layout from '../../components/Layout';
import RichText from '../../components/RichText';
import SEO from '../../components/SEO';
import CTA from '../../components/CTA';
import * as Type from '../../types';
import * as Styled from './style';

export type ContentfulAlbum = {
  title: string;
  slug: string;
  cover?: Type.Image;
  description?: {
    json: any;
  };
  photos: Array<Type.Image>;
  cta?: string;
};

type PageProps = {
  data: {
    album: ContentfulAlbum;
  };
};

const Project: React.FunctionComponent<PageProps> = ({ data }) => {
  const {
    title,
    slug,
    description,
    photos,
    cta
  } = data.album;

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
        title={`${title} | Looney Bros. Photography`}
        desc={""}
        node={""}
        individual
      />

      <Styled.PBox py={10} px={[6, 6, 8, 10]}>
        <Styled.Category style={categoryAnimation}>
          Album
        </Styled.Category>

        <Styled.Title style={titleAnimation}>
          {title}
        </Styled.Title>

        <Styled.Description style={descAnimation}>
          <RichText content={description.json} />
        </Styled.Description>
      </Styled.PBox>

      <Styled.Content bg="black" py={10}>
        <Styled.PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          {photos.map(({ fluid }) => (
            <Img
              alt={""}
              key={fluid.src}
              fluid={fluid}
              loading="eager"
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
  query AlbumTemplate($slug: String!) {
    album: contentfulAlbum(slug: { eq: $slug }) {
      title
      slug
      cover {
        resize(width: 1200, height: 675, quality: 70) {
          src
        }
      }
      description {
        json
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
