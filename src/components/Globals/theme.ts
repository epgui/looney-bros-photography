interface KeyValuePairs<V = string> {
  [key: string]: V;
}

interface ThemeShape {
  breakpoints: Array<string>;
  fontSizes: Array<string>;
  colors: KeyValuePairs<string>;
  space: Array<string>;
  fontWeights: KeyValuePairs<number>;
  sidebarWidth: KeyValuePairs<string>;
}

const theme: ThemeShape = {
  breakpoints: [
    '480px',
    '650px',
    '1000px',
    '1200px',
    '1400px'
  ],
  fontSizes: [
    '1rem',
    '1.2rem',
    '1.44rem',
    '1.728rem',
    '2.074rem',
    '2.488rem'
  ],
  colors: {
    primary:   '#5FB6D9',
    grey:      '#58545a',
    shade:     '#f5f5f5',
  },
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '6rem',
    '8rem',
    '12rem',
    '16rem',
  ],
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  sidebarWidth: {
    big: '375px',
    normal: '320px',
  },
}

export default theme
