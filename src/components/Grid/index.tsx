import React from 'react';
import * as Styled from './style';

interface Props {
  style: any;
}

const Grid: React.FC<Props> = ({ style, children }) => (
  <Styled.Grid style={style}>
    {children}
  </Styled.Grid>
);

export default Grid;
