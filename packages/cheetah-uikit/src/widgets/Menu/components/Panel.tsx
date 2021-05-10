import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { NavProps, PushedProps } from "../types";
import UserBlock from "./UserBlock";

interface Props extends NavProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: 70px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100%;
  transition: width 0.2s;
  border-right: ${({ isPushed }) => (isPushed ? "1px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 88;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: 1px solid rgba(133, 133, 133, 0.1);
    width: 256px;
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu, account, login, logout } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <UserBlock account={account} login={login} logout={logout} />
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
