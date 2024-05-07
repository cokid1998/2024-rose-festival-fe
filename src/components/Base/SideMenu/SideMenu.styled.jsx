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
align-items: center;
justify-content: space-between;
`;