import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../components/Svg";
import { LogoIcon as LogoWithText } from "../icons";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const Flex = styled.div`
  position: fixed;
  z-index: 98;
  margin-left: 14px;
`

const StyledLink = styled(Link)`
  align-items: center;
  display: flex;
  .mobile-icon {
    width: 30px;
    transition: transform 0.3s;

    :hover {
      transform: scale(1.2);
    }
  }
  .desktop-icon {
    width: 166px;
    display: none;

    ${({ theme }) => theme.mediaQueries.nav} {
      display: flex;
    }
  }
`;

const Logo: React.FC<Props> = ({ isDark, href, isPushed }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <LogoWithText className="desktop-icon" isDark={isDark} />
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Monz home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Monz home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);