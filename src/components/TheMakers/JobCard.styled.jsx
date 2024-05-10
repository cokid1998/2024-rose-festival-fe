import styled from "@emotion/styled";

export const CardWrapper = styled("div")`
  width: 30%;
  background-color: white;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 23px 30px;
  gap: 20px;
`;

export const TypoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const Name = styled("div")`
  font-family: "NanumSquareRound";
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

export const Info = styled("div")`
  font-family: "NanumSquare";
  font-size: 13px;
  color: black;
`;
