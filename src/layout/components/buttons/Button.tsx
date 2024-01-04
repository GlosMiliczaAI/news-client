import { ReactNode, RefObject } from "react";
import styled, { css } from "styled-components";

import { ButtonBase } from "./ButtonBase";

interface ButtonProps {
  ariaLabel?: string;
  disabled?: boolean;
  elements?: ButtonElements;
  Icon?: ReactNode;
  iconPosition?: "left" | "right";
  innerRef?: RefObject<HTMLButtonElement>;
  shape?: ButtonShape;
  size?: ButtonSize;
  tabIndex?: number;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariants;
  width?: ButtonWidth;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  $hideBorder?: boolean;
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  ariaLabel = "button",
  disabled = false,
  elements,
  Icon,
  iconPosition,
  innerRef,
  shape,
  size,
  tabIndex = 0,
  type,
  variant,
  width,
  onClick,
  onKeyDown,
  $hideBorder = false,
  children,
}) => {
  return (
    <StyledButton
      aria-label={ariaLabel}
      disabled={disabled}
      elements={elements}
      $hideBorder={$hideBorder}
      ref={innerRef}
      shape={shape}
      size={size}
      tabIndex={tabIndex}
      type={type}
      variant={variant}
      width={width}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {iconPosition && iconPosition === "left" && Icon}
      {children}
      {iconPosition && iconPosition === "right" && Icon}
    </StyledButton>
  );
};

const StyledButton = styled(ButtonBase).attrs(
  ({
    disabled,
    elements,
    $hideBorder,
    shape,
    size,
    tabIndex,
    variant,
    width,
  }: ButtonProps) => ({
    disabled,
    elements,
    $hideBorder,
    shape,
    size: size || "small",
    tabIndex,
    variant: variant || "primary",
    width,
  }),
)<ButtonProps>`
  display: flex;
  justify-content: center;

  ${({ theme, variant, disabled }) => styleVariants(theme, variant, disabled)}
  ${({ theme, size }) => sizeVariants(theme, size)}
  ${({ width }) => width && widthVariants(width)} ${({ shape }) =>
    shape && shapeVariants(shape)}
  ${({ elements }) => elements && elementsVariants(elements)};
  ${({ $hideBorder }) => $hideBorder && `border: none;`};
`;

export type ButtonVariants = "primary" | "secondary" | "tertiary" | "link";
export type ButtonSize =
  | "extraSmall"
  | "small"
  | "large"
  | "fullHeight"
  | "fullWidth"
  | "smallFullWidth";
export type ButtonWidth = "small" | "large" | "fullWidth";
export type ButtonShape = "rounded";
export type ButtonElements = "manyInRow";

const styleVariants = (theme: any, variant = "primary", disabled = false) =>
  ({
    primary: `
      color: ${
        disabled
          ? theme.buttons.primary.disabledBackgroundOppositeColor
          : theme.buttons.primary.backgroundOppositeColor
      };
      background: ${
        disabled
          ? theme.buttons.primary.disabledBackgroundColor
          : theme.buttons.primary.backgroundColor
      };
      border: 1px solid ${theme.buttons.primary.borderColor};

      svg {
        color: ${
          disabled
            ? theme.buttons.primary.disabledBackgroundOppositeColor
            : theme.buttons.primary.backgroundOppositeColor
        };
        fill: ${
          disabled
            ? theme.buttons.primary.disabledBackgroundOppositeColor
            : theme.buttons.primary.backgroundOppositeColor
        };
        path: ${
          disabled
            ? theme.buttons.primary.disabledBackgroundOppositeColor
            : theme.buttons.primary.backgroundOppositeColor
        };
      }

      ${
        !disabled &&
        `
        &:hover {
          background: ${theme.buttons.primary.onHoverBackgroundColor};
          color: ${theme.buttons.primary.onHoverBackgroundOppositeColor};

          svg {
            color: ${theme.buttons.primary.onHoverBackgroundOppositeColor};
            fill: ${theme.buttons.primary.onHoverBackgroundOppositeColor};
            path: ${theme.buttons.primary.onHoverBackgroundOppositeColor};
          }

          p {
            color: ${theme.buttons.primary.onHoverBackgroundOppositeColor};
          }
        }

        &:focus {
          background: ${theme.buttons.primary.onHoverBackgroundColor};
          color: ${theme.buttons.primary.onHoverBackgroundOppositeColor};

          svg {
            color: ${theme.buttons.primary.onHoverBackgroundOppositeColor};
            fill: ${theme.buttons.primary.onHoverBackgroundOppositeColor};
            path: ${theme.buttons.primary.onHoverBackgroundOppositeColor};
          }
        }
      `
      }
    `,
    secondary: css`
      color: ${disabled
        ? theme.buttons.secondary.disabledBackgroundOppositeColor
        : theme.buttons.secondary.backgroundOppositeColor};
      background: ${disabled
        ? theme.buttons.secondary.disabledBackgroundColor
        : theme.buttons.secondary.backgroundColor};
      border: 1px solid
        ${disabled
          ? theme.buttons.secondary.disabledBackgroundColor
          : theme.buttons.secondary.borderColor};

      svg {
        color: ${disabled
          ? theme.buttons.secondary.disabledBackgroundOppositeColor
          : theme.buttons.secondary.backgroundOppositeColor};
        fill: ${disabled
          ? theme.buttons.secondary.disabledBackgroundOppositeColor
          : theme.buttons.secondary.backgroundOppositeColor};
        path: ${disabled
          ? theme.buttons.secondary.disabledBackgroundOppositeColor
          : theme.buttons.secondary.backgroundOppositeColor};
      }

      ${!disabled &&
      css`
        &:hover {
          background: ${theme.buttons.secondary.onHoverBackgroundColor};
          color: ${theme.buttons.secondary.onHoverBackgroundOppositeColor};

          svg {
            color: ${theme.buttons.secondary.onHoverBackgroundOppositeColor};
            fill: ${theme.buttons.secondary.onHoverBackgroundOppositeColor};
            path: ${theme.buttons.secondary.onHoverBackgroundOppositeColor};
          }
        }

        &:focus {
          background: ${theme.buttons.secondary.onHoverBackgroundColor};
          color: ${theme.buttons.secondary.onHoverBackgroundOppositeColor};

          svg {
            color: ${theme.buttons.secondary.onHoverBackgroundOppositeColor};
            fill: ${theme.buttons.secondary.onHoverBackgroundOppositeColor};
            path: ${theme.buttons.secondary.onHoverBackgroundOppositeColor};
          }
        }
      `}
    `,

    tertiary: css`
      color: ${disabled
        ? theme.buttons.tertiary.disabledBackgroundOppositeColor
        : theme.buttons.tertiary.backgroundOppositeColor};
      background: ${disabled
        ? theme.buttons.tertiary.disabledBackgroundColor
        : theme.buttons.tertiary.backgroundColor};
      border: 1px solid
        ${disabled
          ? theme.buttons.tertiary.disabledBackgroundColor
          : theme.buttons.tertiary.borderColor};

      svg {
        color: ${disabled
          ? theme.buttons.tertiary.disabledBackgroundOppositeColor
          : theme.buttons.tertiary.backgroundOppositeColor};
        fill: ${disabled
          ? theme.buttons.tertiary.disabledBackgroundOppositeColor
          : theme.buttons.tertiary.backgroundOppositeColor};
        path: ${disabled
          ? theme.buttons.tertiary.disabledBackgroundOppositeColor
          : theme.buttons.tertiary.backgroundOppositeColor};
      }

      ${!disabled &&
      css`
        &:hover {
          background: ${theme.buttons.tertiary.onHoverBackgroundColor};
          color: ${theme.buttons.tertiary.onHoverBackgroundOppositeColor};

          svg {
            color: ${theme.buttons.tertiary.onHoverBackgroundOppositeColor};
            fill: ${theme.buttons.tertiary.onHoverBackgroundOppositeColor};
            path: ${theme.buttons.tertiary.onHoverBackgroundOppositeColor};
          }
        }

        &:focus {
          background: ${theme.buttons.tertiary.onHoverBackgroundColor};
          color: ${theme.buttons.tertiary.onHoverBackgroundOppositeColor};

          svg {
            color: ${theme.buttons.tertiary.onHoverBackgroundOppositeColor};
            fill: ${theme.buttons.tertiary.onHoverBackgroundOppositeColor};
            path: ${theme.buttons.tertiary.onHoverBackgroundOppositeColor};
          }
        }
      `}
    `,

    link: css`
      color: ${theme.buttons.link.color};
      background-color: none;
      background: none;
      border: none;

      ${!disabled &&
      css`
        &:hover {
          color: ${theme.buttons.link.onHoverColor};
          background-color: none;
          background: none;
          border: none;
        }

        &:focus {
          color: ${theme.buttons.link.onHoverColor};
          background-color: none;
          background: none;
          border: none;
        }
      `}
    `,
  })[variant];

const sizeVariants = (theme: any, variant = "extraSmall") =>
  ({
    extraSmall: css`
      height: 2rem;
      padding: 0.375rem 0.5rem;
      border-radius: 0.25rem;
    `,
    small: css`
      min-width: 7rem;
      height: 2.5rem;
      padding: 0.5rem 2rem;

      @media (max-width: ${theme.breakpoints.mobileL}) {
        padding: 0.5rem 0.5rem;
      }
    `,
    large: css`
      min-width: 7rem;
      height: 3.125rem;
      padding: 1rem 1.6rem;
    `,
    fullHeight: css`
      min-width: 3.5rem;
      height: 100%;
      padding: 0.5rem 1.5rem;
    `,
  })[variant];

const widthVariants = (variant = "small") =>
  ({
    small: css`
      min-width: 7rem;
    `,
    large: css`
      min-width: 18.75rem;
    `,
    fullWidth: css`
      width: 100%;
    `,
  })[variant];

const shapeVariants = (variant = "rounded") =>
  ({
    rounded: css`
      border-radius: 30px;
    `,
  })[variant];

const elementsVariants = (variant = "manyInRow") =>
  ({
    manyInRow: css`
      display: flex;
      gap: 10px;
      justify-content: center;
    `,
  })[variant];
