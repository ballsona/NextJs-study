import React from "react";
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

import {
  storybookButton,
  storybookButtonPrimary,
  storybookButtonSecondary,
  storybookButtonLarge,
  storybookButtonMedium,
  storybookButtonSmall,
} from "./Button.style";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

const selectButtonSize = (size: string) => {
  switch (size) {
    case "small":
      return storybookButtonSmall;
    case "medium":
      return storybookButtonMedium;
    case "large":
      return storybookButtonLarge;
  }
};

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? storybookButtonPrimary : storybookButtonSecondary;
  return (
    <button type="button" css={[mode, storybookButton, selectButtonSize(size)]}>
      {label}
    </button>
  );
};
