import React from 'react';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { unfurl } from './unfurl';

// const locale = 'en-US';

type ParserOptions = {
  renderMark: {
    [key: string]: (text: React.ReactNode) => React.ReactNode;
  }
  renderNode: {
    [key: string]: (node: any, children?: any) => React.ReactNode;
  }
}

// https://github.com/contentful/rich-text/blob/master/packages/rich-text-react-renderer/src/index.tsx
const parserOptions: ParserOptions = {
  renderMark: {
    [MARKS.BOLD]:      text => <strong>{text}</strong>,
    [MARKS.ITALIC]:    text => <i>{text}</i>,
    [MARKS.UNDERLINE]: text => <u>{text}</u>,
    [MARKS.CODE]:      text => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]:      (_n, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]:      (_n, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]:      (_n, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]:      (_n, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]:      (_n, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]:      (_n, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]:      (_n, children) => <h6>{children}</h6>,
    [BLOCKS.UL_LIST]:        (_n, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]:        (_n, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]:      (_n, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]:          (_n, children) => <blockquote>{children}</blockquote>,
    [BLOCKS.HR]:             (_n, _c) => <hr />,
    [INLINES.HYPERLINK]:     (node, children) => <a href={node.data.uri}>{children}</a>,
    // [BLOCKS.EMBEDDED_ENTRY]: (node)           => <Embed data={unfurl.entry(node.data.target,        locale)} />,
    // [BLOCKS.EMBEDDED_ASSET]: (node)           => <Embed data={unfurl.asset(node.data.target.fields, locale)} />,
  },
};

// const VideoPlayer = ({ asset: { src, dimensions: { width, height }}}) => (
//   <Styled.VideoPlayer>
//     <video controls={true} width={width} height={height}>
//       <source src={src} type="video/mp4" width={width} height={height} />
//     </video>
//   </Styled.VideoPlayer>
// )

// const Embed = ({ data }) => {
//   switch (data.contentType) {
//     case 'image/jpeg':
//       return <Figure asset={data} />;

//     case 'image/png':
//       return <Figure asset={data} />;

//     case 'video/mp4':
//       return <VideoPlayer asset={data} />;

//     default:
//       break; // Will throw nasty error if contentType is not handled.
//   }
// };

const RichText = ({ content }: { content: any }) => (
  <>{documentToReactComponents(content, parserOptions)}</>
);

export default RichText;
