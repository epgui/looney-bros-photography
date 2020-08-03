import styled from 'styled-components'
import { animated } from 'react-spring'
import * as StyledSystem from 'styled-system'

type AnimatedFlexCompProps = (
  StyledSystem.SpaceProps &
  StyledSystem.FlexWrapProps &
  StyledSystem.FlexDirectionProps &
  StyledSystem.AlignItemsProps &
  StyledSystem.JustifyContentProps
);

export const AnimatedFlex = styled(animated.div)<AnimatedFlexCompProps>`
  display: flex;

  ${StyledSystem.space}
  ${StyledSystem.flexWrap}
  ${StyledSystem.flexDirection}
  ${StyledSystem.alignItems}
  ${StyledSystem.justifyContent}
`;

AnimatedFlex.displayName = 'AnimatedFlex';
