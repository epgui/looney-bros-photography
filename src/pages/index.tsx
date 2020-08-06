import React from 'react';
import { graphql } from 'gatsby';
import { useSpring, config } from 'react-spring';
import { ContentfulCategory } from '../templates/Category';
import Layout from '../components/Layout';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem';
import SEO from '../components/SEO';
import * as Type from '../types';

interface PageProps {
  data: {
    portraiture: ContentfulCategory;
    weddings: ContentfulCategory;
    editorial: ContentfulCategory;
    tinder: ContentfulCategory;
    animalia: ContentfulCategory;
    landscapes: Type.Image;
  };
};

const Index: React.FC<PageProps> = ({ data }) => {
  const {
    portraiture,
    weddings,
    editorial,
    tinder,
    animalia,
    landscapes
  } = data;

  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout dark={false}>
      <SEO />

      <Grid style={pageAnimation}>
        <GridItem
          url={`/${portraiture.slug}`}
          title={portraiture.shortTitle}
          gridArea="portraiture"
          ariaLabel={`View project "${portraiture.shortTitle}"`}
          image={portraiture.cover.fluid}
        />

        <GridItem
          url={`/${weddings.slug}`}
          title={weddings.shortTitle}
          gridArea={"weddings"}
          ariaLabel={`View project "${weddings.shortTitle}"`}
          image={weddings.cover.fluid}
        />

        <GridItem
          url={`/${editorial.slug}`}
          title={editorial.shortTitle}
          gridArea={"editorial"}
          ariaLabel={`View project "${editorial.shortTitle}"`}
          image={editorial.cover.fluid}
        />

        <GridItem
          url={`/${tinder.slug}`}
          title={tinder.shortTitle}
          gridArea={"tinder"}
          ariaLabel={`View project "${tinder.shortTitle}"`}
          image={tinder.cover.fluid}
        />

        <GridItem
          url={`/${animalia.slug}`}
          title={animalia.shortTitle}
          gridArea={"animalia"}
          ariaLabel={`View project "${animalia.shortTitle}"`}
          image={animalia.cover.fluid}
        />
        
        <GridItem
          url={`/${landscapes.slug}`}
          title={landscapes.shortTitle}
          gridArea={"landscapes"}
          ariaLabel={`View project "${landscapes.shortTitle}"`}
          image={landscapes.cover.fluid}
        />
      </Grid>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  fragment CategoryPreview on ContentfulCategory {
    shortTitle
    slug
    order
    cover {
      fluid(quality: 70, maxWidth: 1200) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }

  query Index {
    portraiture: contentfulCategory(shortTitle: { eq: "Portraiture" }) {
      ...CategoryPreview
    }

    weddings: contentfulCategory(shortTitle: { eq: "Weddings" }) {
      ...CategoryPreview
    }

    editorial: contentfulCategory(shortTitle: { eq: "Swim & Editorial" }) {
      ...CategoryPreview
    }
    
    tinder: contentfulCategory(shortTitle: { eq: "Tinder & Social" }) {
      ...CategoryPreview
    }

    animalia: contentfulCategory(shortTitle: { eq: "Animalia" }) {
      ...CategoryPreview
    }

    landscapes: contentfulCategory(shortTitle: { eq: "Landscapes" }) {
      ...CategoryPreview
    }
  }
`;
