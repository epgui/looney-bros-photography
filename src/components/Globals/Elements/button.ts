import styled from 'styled-components'
import * as StyledSystem from 'styled-system'

type ButtonProps = (
  StyledSystem.SpaceProps &
  StyledSystem.WidthProps &
  StyledSystem.ColorProps
);

export const Button = styled.button<ButtonProps>`
  border-radius: 1000rem;
  border: none;
  font-weight: 700;
  font-size: 1.25rem;

  ${StyledSystem.space}
  ${StyledSystem.width}
  ${StyledSystem.color}

  &:hover {
    cursor: pointer;
  }
`;

Button.displayName = 'Button';
