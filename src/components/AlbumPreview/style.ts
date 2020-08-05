import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export const Album = styled(Link)`
  cursor: pointer;
  margin-right: 1em;
  text-decoration: none;
  width: 16em;

  &:hover .title {
  	color: #048ABF;
  	text-decoration: underline;
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
  margin-top: 0.4em;
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
