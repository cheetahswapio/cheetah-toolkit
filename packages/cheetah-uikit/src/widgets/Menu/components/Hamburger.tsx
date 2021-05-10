import React from "react";
import styled from "styled-components";
import { HamburgerIcon, HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
}

const Hamburger: React.FC<Props> = ({ isPushed, togglePush, isDark }) => {

  return (
    <Flex>
      <Burger aria-label="Toggle menu" onClick={togglePush}>
        <BurgerLine isDark={isDark} isPushed={isPushed} />
        <BurgerLine isDark={isDark} isPushed={isPushed} />
        <BurgerLine isDark={isDark} isPushed={isPushed} />
      </Burger>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  margin-right: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-right: 26px;
  }
`;

const Burger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20px;
  height: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }
`

const BurgerLine = styled.div<{ isPushed: boolean; isDark: boolean }>`
  width: ${({ isPushed }) => (isPushed ? "19px" : "20px")};
  height: 3px;
  border-radius: 3px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  background: ${({ theme }) => theme.colors.textSubtle};

  &:first-child {
    transform: ${({ isPushed }) => (isPushed ? 'rotate(45deg)' : 'rotate(0)')};
  }
  &:nth-child(2) {
    opacity: ${({ isPushed }) => (isPushed ? '0' : '1')};
    transform: ${({ isPushed }) => (isPushed ? 'translateX(20px)' : 'translateX(0)')};
  }
  &:nth-child(3) {
    transform: ${({ isPushed }) => (isPushed ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`

export default React.memo(Hamburger, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
