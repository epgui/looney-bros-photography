import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useSpring, config } from 'react-spring';
import Layout from '../components/Layout';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem';
import SEO from '../components/SEO';
import * as Type from '../types';

const ThreeProjects = styled.div`
  grid-area: three-projects;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

type Project = {
  title: string;
  slug: string;
  cover: Type.Image;
}

interface PageProps {
  data: {
    firstProject: Project;
    threeProjects: {
      nodes: Array<Project>
    };
    aboutUs: Type.Image;
    instagram: Type.Image;
  };
};

const Index: React.FC<PageProps> = ({ data }) => {
  const { firstProject, threeProjects, aboutUs, instagram } = data;

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
          slug={firstProject.slug}
          title={firstProject.title}
          gridArea="first-project"
          ariaLabel={`View project "${firstProject.title}"`}
          image={firstProject.cover.childImageSharp.fluid}
        />

        <GridItem
          slug="/about-us"
          title="About us"
          gridArea="about-us"
          ariaLabel="Visit my about page"
          image={aboutUs.childImageSharp.fluid}
        />

        <ThreeProjects>
          {threeProjects.nodes.map(({ slug, cover, title }: Project) => (
            <GridItem
              key={slug}
              slug={slug}
              title={title}
              ariaLabel={`View project "${title}"`}
              image={cover.childImageSharp.fluid}
            />
          ))}
        </ThreeProjects>
        
        <GridItem
          slug="/instagram"
          title="Instagram"
          gridArea="instagram"
          ariaLabel="See my Instagram pictures"
          image={instagram.childImageSharp.fluid}
        />
      </Grid>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query Index {
    firstProject: projectsYaml {
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

    threeProjects: allProjectsYaml(limit: 3, skip: 1) {
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

    aboutUs: file(sourceInstanceName: { eq: "images" }, name: { eq: "about-us" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    
    instagram: file(sourceInstanceName: { eq: "images" }, name: { eq: "instagram" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
