import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ModalWrapper = styled(motion.div)`
  width: 100lvw;
  height: 100lvh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const ModalBox = styled(motion.div)`
  display: flex;

  align-items: center;
  box-sizing: border-box;
  width: 350px;
  height: 300px;
  background-color: white;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
`;
export const TypoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const LabelWrapper = styled("div")`
  display: flex;
`;
export const Tag = styled("span")`
  white-space: nowrap;
`;
export const Body = styled("span")``;
