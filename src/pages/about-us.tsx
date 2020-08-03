import React from 'react';
import { graphql } from 'gatsby';
import { config, useSpring } from 'react-spring';
import Layout from '../components/Layout';
import { AnimatedBox } from '../components/Globals';
import SEO from '../components/SEO';
import Bio from '../components/Bio';
import { Content } from '../templates/Project/style';
import * as Type from '../types';

type Props = {
  data: {
    seb: Type.Image;
    guillaume: Type.Image
  }
}

const About: React.FC<Props> = props => {
  const { data: { seb, guillaume }} = props;

  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout dark={false}>
      <SEO
        title="About Looney Bros. Photography"
        desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects."
      />

      <AnimatedBox
        style={pageAnimation}
        py={[6, 6, 6, 8]}
        px={[6, 6, 8, 6, 8, 13]}
      >
        <h1>About us</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <Bio
          name="Guillaume Pelletier"
          title="Partner"
          image={guillaume}
        >
          <p>Guillaume (Billy for you English speakers) is a biochemist and software engineer who picked up photography in 2010. What started as a perfectly respectable hobby accidentally turned into a professional business around the end of 2016.</p>
          <p>He really loves doing studio photography work, whether it's portraits, macro, or technical product photography. Guillaume takes great pride in his controlled lighting, professional colour management pipeline and time-honed precision processing techniques.</p>
          <p>Currently accepting work in Vancouver at a rate of $200 per hour (subject to change depending on availabilities and market conditions). Discounts are available for certain types of non-profits and charity organizations.</p>
        </Bio>

        <Bio
          name="Sebastien Blanchard"
          title="Partner"
          image={seb}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Bio>
      </AnimatedBox>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query AboutUs {
    seb: file(sourceInstanceName: { eq: "images" }, name: { eq: "seb" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    
    guillaume: file(sourceInstanceName: { eq: "images" }, name: { eq: "guillaume" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
