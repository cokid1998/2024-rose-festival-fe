import styled from "@emotion/styled";
import Image from "next/image";

export const BackgroundImageWrapper = styled("div")`
  min-width: 100%;
  max-width: 375px;
  height: 100%;
  position: relative;
`;
export const TypoWrapper = styled("div")`
  width: 190px;
  position: absolute;
  top: 80px;
  left: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const TitleWrapper = styled("h1")`
  font-family: "PyeongChangPeace";
  font-weight: 300;
  font-size: 50px;
  color: white;
  line-height: 140%;
`;
export const PeriodWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Period = styled("h2")`
  font-family: "PyeongChangPeace";
  font-weight: 300;
  font-size: 22px;
  color: white;
`;
export const ImageSize = styled(Image)`
  width: 100%;
  height: auto;
`;
export const MapWrapper = styled("div")`
  width: 343px;
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  position: absolute;
  bottom: 100px;
  left: 50%;
  translate: -50%;
`;
export const MapTitle = styled("h2")`
  font-family: "PyeongChangPeace";
  font-weight: 300;
  font-size: 22px;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Map = styled("div")`
  width: 343px;
  height: 230px;
  background-color: #d9d9d9;
`;
