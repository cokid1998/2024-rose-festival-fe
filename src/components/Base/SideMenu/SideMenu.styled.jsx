import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SideMenuWrapper = styled(motion.nav)`
  width: 100lvw;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  backdrop-filter: blur(25px);
`;

export const HeaderSide = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MenuTypo = styled("div")`
  font-family: "NanumSquareRound";
  color: #1e1e1e;
  font-weight: 700;
  font-size: 15px;
  padding: 20px;
`;
