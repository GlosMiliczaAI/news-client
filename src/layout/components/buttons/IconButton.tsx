import { ReactNode, SyntheticEvent } from "react";
import styled, { css } from "styled-components";

import { ButtonBase } from "./ButtonBase";

export interface IconButtonProps {
  disabled?: boolean;
  disabledHover?: boolean;
  id?: string;
  shape?: "rect" | "circle" | "square";
  tabIndex?: number;
  title?: string;
  type?: "button" | "submit" | "reset";
  onMouseDown?: (event: SyntheticEvent) => void;
  onClick?: (event: SyntheticEvent) => void;
  children?: ReactNode;
}

export const IconButton = styled(
  ({
    disabled,
    tabIndex,
    type = "button",
    onClick,
    onMouseDown,
    children,
    ...rest
  }: IconButtonProps) => (
    <ButtonBase
      disabled={disabled}
      tabIndex={tabIndex}
      type={type}
      onClick={onClick}
      onMouseDown={onMouseDown}
      {...rest}
    >
      {children}
    </ButtonBase>
  ),
)<IconButtonProps>(
  ({ disabledHover }) => css`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;

    min-width: 1rem;
    background-color: #5069a7;

    &:hover {
      background-color: ${() => {
        if (disabledHover) {
          return css`none`;
        }

        return css`#323f71;`;
      }};
    }

    &:disabled {
      opacity: 0.32;
    }

    p {
      color: "white";
    }

    svg {
      fill: ${() => {
        return css`white`;
      }};
    }

    @media all and (max-width: 999px) {
      border: unset;
    }
  `,
);
