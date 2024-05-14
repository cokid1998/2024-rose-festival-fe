import styled from "@emotion/styled";

export const EventWrapper = styled("div")`
  height: auto;
  position: absolute;
  top: 290px;
  display: flex;
  flex-direction: column;
`;

export const EventContentWrapper = styled("div")`
  width: 100px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;
  border-radius: 15px;
  border: 1px solid black;
  padding: 5px;
`;
export const EventContainer = styled("div")`
  width: 100%;
  height: 1400px;
  position: relative;
  display: flex;
  justify-content: center;
`;
export const EventBackImageWrapper = styled("div")`
  position: absolute;
  width: 100%;
  height: 1300px;
  bottom: 0;
`;
export const TitleWrapper = styled("div")`
  width: 100%;
  text-wrap: balance;
`;
