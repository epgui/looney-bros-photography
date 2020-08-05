import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export const Album = styled(Link)`
  border-radius: 3px;
  box-shadow: 0px 3px 10px -4px rgba(0,0,0,0.1);
  cursor: pointer;
  margin-bottom: 1em;
  margin-right: 1em;
  overflow: hidden;
  padding: 0.6em;
  text-decoration: none;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  width: 16em;

  &:hover {
    box-shadow: 0px 4px 10px -4px rgba(0,0,0,0.3);
    transform: translate3d(0px, -0.5px, 0px);
  }

  &:hover .title {
  	color: #048ABF;
  }

  &:hover .number-of-items {
  	color: #048ABF;
  }
`;

export const AlbumCover = styled(Img)`
  border-radius: 2px;
  height: 11em;
  overflow: hidden;
  width: 16em;
`;

export const Title = styled.span`
  display: block;
  font-weight: 700;
  line-height: 1.2em;
  margin-top: 0.6em;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.3s ease;
  white-space: nowrap;
  width: 100%;
`;

export const NumberOfItems = styled.span`
  color: #888;
  display: block;
  font-size: 0.88em;
  transition: color 0.3s ease;
`;
