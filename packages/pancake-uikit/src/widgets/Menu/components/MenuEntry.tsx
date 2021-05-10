import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { Text } from "../../../components/Text";
import { Colors } from "../../../theme/types";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<Props>`
  transition: color 0.2s;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  font-weight: 500;
  margin: 4px 0px 4px;
  align-items: center;
  height: 40px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 18px")};
  font-size: ${({ secondary }) => (secondary ? "13px" : "14px")};
  border-radius: 6px;
  color: ${({ isActive, theme }) => (isActive ? `${theme.colors.fillColor}` : `${theme.colors.textSubtle}` )};
  background-color: ${({ isActive, theme }) => (isActive ? `${theme.colors.primary}` : "transparent")};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ isActive, theme }) => (isActive ? `${theme.colors.fillColor}` : `${theme.colors.tertiaryText}` )};
  }

  &:hover path {
    fill: ${({ theme }) => theme.colors.fillColor};
    transition: color 0.2s;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkStatus = styled(Text)<{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
`;

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
