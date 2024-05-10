import styled from "@emotion/styled";

export const MakersContainer = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const MakersWrapper = styled("div")`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 350px;
  padding: 0 16px;
`;
export const MakersTitleWrapper = styled("div")`
  width: 260px;
  height: 58px;
  position: relative;
  margin-bottom: 15px;
`;
export const MakersTitle = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "PyeongChangPeace";
  font-size: 25px;
  font-weight: 300;
  color: #016e57;
`;
export const JobTitle = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "NanumSquare";
  font-size: 17px;
  font-weight: 400;
  color: white;
`;
export const CardContainer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;
