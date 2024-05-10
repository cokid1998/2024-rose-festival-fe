import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const HeaderWrapper = styled("header")`
  width: 100%;
  max-width: 768px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  top: 0;
  ${({ isTop, isMenuOpen }) => {
    if (isTop == 0 && !isMenuOpen) {
      return css`
        background-color: white;
      `;
    }
  }}
`;

export const IconMenuWrapper = styled("div")`
  width: 100%;
  padding: 0 32px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled("h1")`
  width: 248px;
  font-family: "PyeongChangPeace";
  font-size: 20px;
  text-align: center;
  ${({ isTop }) => {
    if (!isTop) {
      return css`
        color: black;
      `;
    } else {
      return css`
        color: white;
      `;
    }
  }};
`;

export const ChangeLanguageContainer = styled("div")`
  position: relative;
`;
