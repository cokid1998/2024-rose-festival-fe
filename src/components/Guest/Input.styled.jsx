import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const InputContiainer = styled(motion.div)`
  width: 100vw;
  height: 470px;
  border-radius: 25px;
  background-color: white;
  position: absolute;
  bottom: -320px;
  overflow: hidden;
  position: fixed;
`;
export const InputHeader = styled("div")`
  font-family: "NanumSquareRound";
  color: #21634b;
  height: 70px;
  border-bottom: 1px solid #afafaf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export const Deco = styled("div")`
  width: 60px;
  height: 4px;
  border-radius: 33px;
  background-color: #dbdbdb;
`;
export const InputBody = styled("div")`
  padding: 32px 24px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const NickName = styled("input")`
  border: 1px solid #afafaf;
  height: 34px;
  border-radius: 10px;
  font-family: "NanumSquare";
  color: #bebebe;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
`;
export const Button = styled("button")`
  width: 110px;
  height: 40px;
  border-radius: 30px;
  background-color: #ff99be;
  color: white;
  font-weight: 700;
  font-size: 17px;
`;
export const TextArea = styled("textarea")`
  box-sizing: border-box;
  width: 100%;
  height: 170px;
  border: 1px solid #afafaf;
  border-radius: 30px;
  padding: 20px;
  font-family: "NanumSquare";
  font-size: 13px;
  color: #bebebe;
  font-weight: 400;
`;
