import styled from 'styled-components'
import * as StyledSystem from 'styled-system'

type FlexCompProps = (
  StyledSystem.SpaceProps &
  StyledSystem.FlexWrapProps &
  StyledSystem.FlexDirectionProps &
  StyledSystem.AlignItemsProps &
  StyledSystem.JustifyContentProps
);

export const Flex = styled.div<FlexCompProps>`
  display: flex;
  ${StyledSystem.space}
  ${StyledSystem.flexWrap}
  ${StyledSystem.flexDirection}
  ${StyledSystem.alignItems}
  ${StyledSystem.justifyContent}
`;

Flex.displayName = 'Flex';
