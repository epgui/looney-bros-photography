import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { config, useSpring } from 'react-spring';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import CTA from '../../components/CTA';
import * as Type from '../../types';
import * as Styled from './style';

export type Category = {
  shortTitle: string;
  longTitle: string;
  slug: string;
  cover: Type.Image;
  content: {
    json: any;
  }
  cta: string;
}

type PageProps = {
  data: {
    category: Category;
  };
};

const Project: React.FunctionComponent<PageProps> = ({ data }) => {
  const { category } = data;
  const { shortTitle, longTitle, slug, cover, content, cta } = category;

  const images = [];

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
        title={`${category.longTitle} | Looney Bros. Photography`}
        desc={""}
        node={""}
        banner={cover.resize.src}
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
          <div dangerouslySetInnerHTML={{ __html: "Description" }} />
        </Styled.Description>
      </Styled.PBox>

      <Styled.Content bg="black" py={10}>
        <Styled.PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          {images.map(({ name, childImageSharp }) => (
            <Img
              alt={name}
              key={childImageSharp.fluid.src}
              fluid={childImageSharp.fluid}
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
  fragment Album on ContentfulAlbum {
    title
    photos {
      fluid(quality: 95, maxWidth: 1200) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }

  fragment Category on ContentfulCategory {
    shortTitle
    longTitle
    slug
    cover {
      fluid(quality: 95, maxWidth: 900) {
        ...GatsbyContentfulFluid_withWebp
      }
      resize(width: 1200, height: 675, quality: 80) {
        src
      }
    }
    description {
      json
    }
    albums {
      ...Album
    }
    photos {
      fluid(quality: 95, maxWidth: 1200) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    cta
  }

  query CategoryTemplate($slug: String!) {
    category: contentfulCategory(slug: { eq: $slug }) {
      ...Category
    }
  }
`;
