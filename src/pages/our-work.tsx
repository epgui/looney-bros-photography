import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/Layout'
import GridItem from '../components/GridItem'
import SEO from '../components/SEO'
import * as Type from '../types'

type ContentfulCategory = {
  shortTitle: string;
  longTitle: string;
  slug: string;
  cover: any;
  content: any;
}

type PageProps = {
  data: {
    categories: {
      nodes: Array<ContentfulCategory>;
    };
  };
};

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50vw;

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`

const Projects: React.FunctionComponent<PageProps> = ({ data: { categories } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout dark={true}>
      <SEO title="Projects | Looney Bros. Photography" />
      
      <Area style={pageAnimation}>
        {categories.nodes.map(({ slug, shortTitle, cover }) => (
          <GridItem
            key={slug}
            url={`/${slug}`}
            title={shortTitle}
            ariaLabel={`View project "${shortTitle}"`}
            image={cover.fluid}
          />
        ))}
      </Area>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query Projects {
    categories: allContentfulCategory {
      nodes {
        ...Category
      }
    }
  }
`
