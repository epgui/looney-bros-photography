import React from 'react';
import { SocialIcon } from 'react-social-icons';
import * as Styled from './style';
import * as Type from '../../types';

interface Props {
  name: string;
  title: string;
  image: Type.Image;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  email?: string;
}

const Bio: React.FC<Props> = ({
  children,
  name,
  title,
  image,
  linkedin,
  facebook,
  instagram,
  email
}) => (
  <Styled.Bio name={name}>
    <Styled.Portrait fluid={image.childImageSharp.fluid} />
    <Styled.CopyArea>
      <Styled.Name>{name}</Styled.Name>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>
        {children}

        {(email || linkedin || facebook || instagram) && (
          <Styled.SocialMedia>
            {email && (
              <SocialIcon
                network="email"
                url={email}
                bgColor="#000000"
                fgColor="#FFFFFF"
                label={`Send ${name} an email!`}
                style={{
                  height: '2em',
                  marginRight: '0.6em',
                  marginTop: '1em',
                  width: '2em'
                }}
              />
            )}

            {facebook && (
              <SocialIcon
                network="facebook"
                url={facebook}
                bgColor="#000000"
                fgColor="#FFFFFF"
                label={`Find ${name} on Facebook!`}
                style={{
                  height: '2em',
                  marginRight: '0.6em',
                  marginTop: '1em',
                  width: '2em'
                }}
              />
            )}

            {instagram && (
              <SocialIcon
                network="instagram"
                url={instagram}
                bgColor="#000000"
                fgColor="#FFFFFF"
                label={`Find ${name} on Instagram!`}
                style={{
                  height: '2em',
                  marginRight: '0.6em',
                  marginTop: '1em',
                  width: '2em'
                }}
              />
            )}

            {linkedin && (
              <SocialIcon
                network="linkedin"
                url={linkedin}
                bgColor="#000000"
                fgColor="#FFFFFF"
                label={`Find ${name} on LinkedIn!`}
                style={{
                  height: '2em',
                  marginRight: '0.6em',
                  marginTop: '1em',
                  width: '2em'
                }}
              />
            )}
          </Styled.SocialMedia>
        )}
      </Styled.Description>
    </Styled.CopyArea>
  </Styled.Bio>
);

export default Bio;
