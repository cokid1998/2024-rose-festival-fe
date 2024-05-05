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
  font-family: "PyeongChangPeace";
  color: white;
  font-size: 20px;
`;
