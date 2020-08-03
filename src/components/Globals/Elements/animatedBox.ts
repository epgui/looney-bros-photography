import styled from 'styled-components'
import { animated } from 'react-spring'
import * as StyledSystem from 'styled-system'

type AnimatedBoxProps = (
  StyledSystem.SpaceProps &
  StyledSystem.WidthProps &
  StyledSystem.ColorProps &
  StyledSystem.FlexProps &
  StyledSystem.AlignSelfProps &
  StyledSystem.TextAlignProps
);

export const AnimatedBox = styled(animated.div)<AnimatedBoxProps>`
  box-sizing: border-box;
  ${StyledSystem.space}
  ${StyledSystem.width}
  ${StyledSystem.color}
  ${StyledSystem.flex}
  ${StyledSystem.alignSelf}
  ${StyledSystem.textAlign}
`;

AnimatedBox.displayName = 'AnimatedBox';
