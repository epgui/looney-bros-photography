import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { config, useSpring } from 'react-spring';
import Layout from '../components/Layout';
import * as Globals from '../components/Globals';
import SEO from '../components/SEO';
import CTA from '../components/CTA';
import Bio from '../components/Bio';
import { PBox } from '../templates/Category/style';
import * as Type from '../types';

type Props = {
  data: {
    seb: Type.Image;
    sebInAction: Type.Image;
    guillaume: Type.Image;
    guillaumeInAction: Type.Image;
  }
}

const About: React.FC<Props> = props => {
  const { data: {
    seb,
    sebInAction,
    guillaume,
    guillaumeInAction
  }} = props;

  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout dark={false}>
      <SEO
        title="About Looney Bros. Photography"
        desc=""
      />

      <Globals.AnimatedBox
        style={pageAnimation}
        py={[6, 6, 6, 8]}
        px={[6, 6, 8, 6, 8, 13]}
      >
        <h1>About us</h1>

        <p>
          Looney Bros. Photography was born in 2016 as a partnership between
          Seb and Guillaume, two biochemists who, at the time, were both doing
          their master’s degree at Université de Moncton.
        </p>

        <hr style={{ display: 'block', clear: 'both', opacity: 0.2, marginTop: '3em' }} />

        <Bio
          name="Guillaume Pelletier"
          title="Partner, MSc candidate and software engineer"
          image={guillaume}
          linkedin="https://www.linkedin.com/in/guillaumepelletier"
          facebook="https://www.facebook.com/epgui"
          instagram="https://www.instagram.com/epgui"
          email="mailto:guigui.p@gmail.com"
        >
          <p>
            Guillaume{Globals.HAIR_SPACE}{Globals.EM_DASH}<em>“Billy” for the
            englishfolks</em>{Globals.EM_DASH}{Globals.HAIR_SPACE}is a
            biochemist and software engineer who picked up photography in 2010.
            What started as a perfectly respectable hobby accidentally turned
            into a professional business around the end of 2016.
          </p>
          <p>
            He really loves doing studio photography work, whether it’s
            portraits, macro, or technical product photography. Guillaume takes
            great pride in his controlled lighting, professional colour
            management pipeline and time-honed precision processing techniques.
          </p>
          <p>
            Currently accepting work in Vancouver at an hourly rate of $200
            (subject to change depending on availabilities and market
            conditions). Discounts are available for certain types of
            non-profits and charity organizations.
          </p>
        </Bio>

        <Bio
          name="Sebastien Blanchard"
          title="Partner and MD candidate"
          image={seb}
          instagram="https://www.instagram.com/frostbelt"
          email="mailto:esb5402@umoncton.ca"
        >
          <p>
            Seb is a former biochemist who is currently studying for his MD.
            When he isn’t busy becoming a doctor, he can be found developing
            his talent for photography or oil painting.
          </p>
          <p>
            Seb is particularly excellent at live event coverage and constantly
            helps to refine our artistic taste. He’s also somewhat of an animal
            whisperer, successfully getting even the most stubborn wild animals
            or cats to pose for him, complete with cute accessories and studio
            lighting.
          </p>
          <p>
            Very busy with his medical training, Seb occasionally takes new
            clients in Moncton, on a case-by-case basis, at an hourly rate of
            $200. Discounts may be available for certain types of
            non-profits and charity organizations.
          </p>
        </Bio>

        <hr style={{ display: 'block', clear: 'both', opacity: 0.2 }} />

        <Img
          fluid={sebInAction.childImageSharp.fluid}
          style={{
            clear: "both",
            display: "block",
            margin: "3em 0"
          }}
        />

        <p>
          Initially, we were mostly engaged with non-profit and charity
          activities, covering fundraising and community events in support of
          any number of causes. When word-of-mouth got out of control and
          demand for our services started increasing, the prospect of turning
          their hobby into a professional business became inevitable; at some
          point, we were spending a good 30-40 hours of our own free time per
          week on pro-bono photography, and this just wasn’t sustainable.
        </p>

        <p>
          The support from our community has been incredible and has enabled us
          to develop our skills through a wide array of photography genres and
          styles. Whereas nowadays many photographers seek to find their own
          “niche” style or market, Looney Bros. Photography is all about
          variety and diversity of portfolio. We like to approach any genre of
          photography with a scientific mindset, and as a separate skill which
          needs perfecting.
        </p>

        <Img
          fluid={guillaumeInAction.childImageSharp.fluid}
          style={{
            clear: "both",
            display: "block",
            margin: "3em 0"
          }}
        />

        <p>
          We chose the name “Looney Bros. Photography” because in the
          beginning, we didn’t want to take ourselves too seriously and we
          thought the name reflected a sort of playful humility. Though our
          skill has improved greatly over the years, and though today we have
          grown into a serious business offering competitive services, we still
          identify with this original vision and continue to approach our
          craft with the same mindset. We have always sought to learn and
          improve, and look forward to doing so moving forward.
        </p>

        <PBox style={{ clear: 'both', textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
          <CTA color="#FFDE20" text="Let’s create timeless memories together!" />
        </PBox>
      </Globals.AnimatedBox>
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

    sebInAction: file(sourceInstanceName: { eq: "images" }, name: { eq: "seb-at-banquet" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    guillaumeInAction: file(sourceInstanceName: { eq: "images" }, name: { eq: "guillaume-operating-jib-on-speedboat" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
