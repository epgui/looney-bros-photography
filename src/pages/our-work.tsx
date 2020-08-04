import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/Layout'
import GridItem from '../components/GridItem'
import SEO from '../components/SEO'
import * as Type from '../types'

type PageProps = {
  data: {
    projects: {
      nodes: Array<{
        title: string;
        slug: string;
        cover: Type.Image;
      }>;
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

const Projects: React.FunctionComponent<PageProps> = ({ data: { projects } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout dark={true}>
      <SEO title="Projects | Looney Bros. Photography" />
      
      <Area style={pageAnimation}>
        {projects.nodes.map(({ slug, title, cover }) => {
          console.log({ slug, title, cover })
          return (
            <GridItem
              key={slug}
              slug={slug}
              title={title}
              ariaLabel={`View project "${title}"`}
              image={cover.childImageSharp.fluid}
            />
          );
        })}
      </Area>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query Projects {
    projects: allProjectsYaml {
      nodes {
        title
        slug
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
