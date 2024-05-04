import styled from "@emotion/styled";
import Image from "next/image";
import { css } from "@emotion/react";

export const NoticeWrapper = styled("div")`
  width: 100%;
  height: 2670px;
  position: relative;
`;
export const ImageSize = styled(Image)`
  width: 100%;
  height: auto;
`;
export const BoxWrapper = styled("div")`
  width: 100%;
  height: 2350px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const RightBoxWrapper = styled("div")`
  width: 100%;
  height: 2350px;
  position: absolute;
  z-index: unset;
`;
export const NoticeContentWrapper = styled("div")`
  position: absolute;
  top: 160px;
`;
export const TodayRoseTitleWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 30px;
`;
export const TodayRoseTitle = styled("h3")`
  font-family: "PyeongChangPeace";
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const TodayRoseDesc = styled("p")`
  font-family: "Pretendard";
  font-weight: 300;
  color: white;
`;
export const RoseIconWrapper = styled("div")`
  position: absolute;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
`;
export const RoseContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
export const RoseThumbWrapper = styled("div")`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const ImageWrapper = styled("div")`
  width: 290px;
  height: 240px;
  position: relative;
  ${({ tailDirection }) => {
    return css`
      left: ${tailDirection ? "" : "10px"};
      right: ${tailDirection ? "10px" : ""};
    `;
  }}
`;
export const RoseWrapper = styled("div")`
  width: 200px;
  height: 50px;
  background-color: #0b6044;
  border-radius: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const RoseTitle = styled("div")`
  font-family: "PyeongChangPeace";
  font-weight: 300;
  color: white;
  width: 186px;
  height: 37px;
  border: 1px solid white;
  border-radius: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TodayRoseTab = styled("div")`
  position: absolute;
  top: 20px;
  left: 5px;
  font-family: "NanumSquareRound";
  font-weight: 400;
  color: white;
  font-size: 23px;
  padding: 13px 30px;
  border-bottom: 1px solid white;
`;
