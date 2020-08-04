import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

const marginRight = css`
  margin-right: 3%;
`;

const marginLeft = css`
  margin-right: 3%;
`;

interface BioProps {
  name: string;
}

export const Bio = styled.div<BioProps>`
  display: flex;
  float: left;
  flex-direction: column;
  margin: 2em 0;
  width: 47%;

  ${props => props.name === 'Guillaume Pelletier' ? marginRight : marginLeft}

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    margin-right: 0;
    margin-left: 0;
    width: 100%;
  }
`;

export const Portrait = styled(Img)`
  display: block;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    border-radius: 50%;
    height: 8em;
    width: 8em;
  }
`;

export const CopyArea = styled.div`
`;

export const Name = styled.h3`
  margin: 1.4em 0 0.1em;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    margin: 0.8em 0 0;
    font-size: ${props => props.theme.fontSizes[3]};
    text-align: center;
  }
`;

export const Title = styled.span`
  color: #999;
  display: block;
  margin-bottom: 1.6em;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    text-align: center;
  }
`;

export const Description = styled.div``;

export const SocialMedia = styled.div``;

