import React from 'react';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { unfurl } from './unfurl.js';

const locale = 'en-US';

// https://github.com/contentful/rich-text/blob/master/packages/rich-text-react-renderer/src/index.tsx
const parserOptions = {
  renderMark: {
    [MARKS.BOLD]:      text => <strong>{text}</strong>,
    [MARKS.ITALIC]:    text => <i>{text}</i>,
    [MARKS.UNDERLINE]: text => <u>{text}</u>,
    [MARKS.CODE]:      text => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]:      (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]:      (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]:      (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]:      (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]:      (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]:      (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]:      (node, children) => <h6>{children}</h6>,
    [BLOCKS.UL_LIST]:        (node, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]:        (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]:      (node, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]:          (node, children) => <blockquote>{children}</blockquote>,
    [BLOCKS.HR]:             (node, children) => <hr />,
    [BLOCKS.EMBEDDED_ENTRY]: (node)           => <Embed data={unfurl.entry(node.data.target,        locale)} />,
    [BLOCKS.EMBEDDED_ASSET]: (node)           => <Embed data={unfurl.asset(node.data.target.fields, locale)} />,
    [INLINES.HYPERLINK]:     (node, children) => <Link url={node.data.uri}>{children}</Link>,
  },
};

// const VideoPlayer = ({ asset: { src, dimensions: { width, height }}}) => (
//   <Styled.VideoPlayer>
//     <video controls={true} width={width} height={height}>
//       <source src={src} type="video/mp4" width={width} height={height} />
//     </video>
//   </Styled.VideoPlayer>
// )

const Embed = ({ data }) => {
  switch (data.contentType) {
    case 'image/jpeg':
      return <Figure asset={data} />;

    case 'image/png':
      return <Figure asset={data} />;

    // case 'video/mp4':
    //   return <VideoPlayer asset={data} />;

    default:
      break; // Will throw nasty error if contentType is not handled.
  }
};

const RichText = ({ content }) => (
  <>{documentToReactComponents(content, parserOptions)}</>
);

export default RichText;
