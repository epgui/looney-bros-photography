import styled from 'styled-components'
import * as StyledSystem from 'styled-system'

type BoxProps = (
  StyledSystem.SpaceProps &
  StyledSystem.WidthProps &
  StyledSystem.ColorProps &
  StyledSystem.FlexProps &
  StyledSystem.AlignSelfProps &
  StyledSystem.TextAlignProps &
  StyledSystem.FontSizeProps
);

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${StyledSystem.space}
  ${StyledSystem.width}
  ${StyledSystem.color}
  ${StyledSystem.flex}
  ${StyledSystem.alignSelf}
  ${StyledSystem.textAlign}
  ${StyledSystem.fontSize}
`;

Box.displayName = 'Box';
