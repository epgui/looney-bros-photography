import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { config, useSpring } from 'react-spring';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import CTA from '../../components/CTA';
import * as Type from '../../types';
import * as Styled from './style';

type PageProps = {
  data: {
    project: {
      title_detail: string;
      category: string;
      desc: string;
      cta: string;
      slug: string;
      parent: {
        modifiedTime: string;
        birthTime: string;
      };
      cover: Type.Image;
    };
    images: {
      nodes: Array<Type.Image>;
    };
  };
};

const Project: React.FunctionComponent<PageProps> = props => {
  const { data: { project, images }} = props;

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
        pathname={project.slug}
        title={`${project.title_detail} | Looney Bros. Photography`}
        desc={project.desc}
        node={project.parent}
        banner={project.cover.childImageSharp.resize.src}
        individual
      />

      <Styled.PBox py={10} px={[6, 6, 8, 10]}>
        <Styled.Category style={categoryAnimation}>
          {project.category}
        </Styled.Category>

        <Styled.Title style={titleAnimation}>
          {project.title_detail}
        </Styled.Title>

        <Styled.Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: project.desc }} />
        </Styled.Description>
      </Styled.PBox>

      <Styled.Content bg="black" py={10}>
        <Styled.PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          {images.nodes.map(({ name, childImageSharp }) => (
            <Img
              alt={name}
              key={childImageSharp.fluid.src}
              fluid={childImageSharp.fluid}
            />
          ))}
        </Styled.PBox>
      </Styled.Content>

      <Styled.PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <CTA color="black" text={project.cta} />
      </Styled.PBox>
    </Layout>
  )
}

export default Project

export const query = graphql`
  fragment Project on ProjectsYaml {
    title_detail
    category
    desc
    slug
    cta
    parent {
      ... on File {
        modifiedTime
        birthTime
      }
    }
    cover {
      childImageSharp {
        resize(width: 1200, height: 675, quality: 80) {
          src
        }
      }
    }
  }

  query ProjectTemplate($slug: String!, $images: String!) {
    project: projectsYaml(slug: { eq: $slug }) {
      ...Project
    }

    images: allFile(filter: { relativePath: { regex: $images } }, sort: { fields: name, order: ASC }) {
      nodes {
        name
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
