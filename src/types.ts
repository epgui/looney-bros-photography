export type ChildImageSharpFluid = {
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
  base64: string;
  tracedSVG: string;
  srcWebp: string;
  srcSetWebp: string;
};

export type ChildImageSharpResize = {
  src: string;
}

export type Image = {
  name: string;
  childImageSharp: {
    fluid?: ChildImageSharpFluid;
    resize?: ChildImageSharpResize;
  };
};
