import styled from "@emotion/styled";
import Image from "next/image";
import { css } from "@emotion/react";

export const TabWrapper = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const TodayRoseTabWrapper = styled(TabWrapper)`
  z-index: ${({ curTab }) => (curTab === 0 ? 1 : "unset")};
`;
export const NoticeTabWrapper = styled(TabWrapper)`
  z-index: ${({ curTab }) => (curTab === 1 ? 1 : "unset")};
`;

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
export const BaseContentWrapper = styled("div")`
  position: absolute;
  top: 160px;
`;
export const TitleWrapper = styled("div")`
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
export const Desc = styled("p")`
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
export const TodayRoseTabTypo = styled("div")`
  position: absolute;
  top: 20px;
  left: 5px;
  font-family: "NanumSquareRound";
  font-weight: 400;
  color: white;
  font-size: 23px;
  padding: 13px 30px;
  border-bottom: ${({ curTab }) => (!curTab ? "1px solid white" : "")};
  z-index: 2;
`;

/* NoticeTab */
export const NoticeTabTypo = styled("div")`
  position: absolute;
  top: 20px;
  right: 15px;
  font-family: "NanumSquareRound";
  font-weight: 400;
  color: white;
  font-size: 23px;
  padding: 13px 30px;
  border-bottom: ${({ curTab }) => (curTab ? "1px solid white" : "")};
  z-index: 2;
`;
export const NoticeTitle = styled("div")`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  font-family: "PyeongChangPeace";
  font-size: 25px;
  color: #016e57;
  text-align: center;
`;
export const WarningContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 100px;
  position: relative;
  top: 300px;
`;
export const ImageTypeWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 27px;
  position: relative;
  ${({ left, right, top, bottom }) => {
    return css`
      left: ${left};
      right: ${right};
      top: ${top};
      bottom: ${bottom};
    `;
  }}
`;
export const WarningTypo = styled("p")`
  width: 150px;
  font-family: "Pretendard";
  font-size: 17px;
  color: white;
  width: ${({ width }) => width};
  line-height: 150%;
`;
