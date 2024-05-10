import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

export const Container = styled("div")`
  height: 975px;
  position: relative;
  display: flex;
  justify-content: center;
`;
export const FacilitiesBackgroundImageWrapper = styled("div")`
  position: absolute;
  width: 100vw;
  max-width: 768px;
  height: 865px;
  bottom: 0;
`;
export const ContenetPositionWrapper = styled("div")`
  height: auto;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;
export const FacilitiesWrapper = styled("div")`
  width: 100%;
  position: relative;
  bottom: 70px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const FacilitiesGuideTypoWrapper = styled("div")`
  font-family: "PyeongChangPeace";
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid white;
  padding-bottom: 17px;
  margin-bottom: 32px;
`;
export const MapWrapper = styled("div")`
  width: 360px;
  height: 312px;
  background-color: #d9d9d9;
  margin-bottom: 54px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
`;
export const PinWrapper = styled(motion.div)`
  position: absolute;
`;
export const FacilitiesChoiceBox = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 18px;
  row-gap: 34px;
`;
export const FacilitiesContentWrapper = styled("div")`
  width: 100px;
  height: 70px;
  ${({ curCategory, itemCategory }) => {
    if (curCategory === itemCategory) {
      return css`
        outline: 2px solid white;
        border-radius: 10px;
        div {
          color: white;
        }
      `;
    } else {
      return css`
        outline-offset: 2px solid #21634b;
      `;
    }
  }}
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconTypoWrapper = styled("div")`
  font-family: "NanumSquareRound";
  font-weight: 700;
  color: #21634b;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
