import styled from "@emotion/styled";

export const TooltipWrapper = styled("div")`
  width: 80px;
  background-color: white;
  position: absolute;
  right: 2px;
  bottom: -78px;
  border-radius: 10px;
  box-shadow: 1px 0px 14px -5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 0px 14px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 0px 14px -5px rgba(0, 0, 0, 0.75);
  padding: 5px;
`;
export const Cap = styled("div")`
  width: 0;
  height: 0;
  border-bottom: 10px solid white;
  border-top: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-radius: 10px;
  position: absolute;
  right: 2px;
  top: -15px;
`;
export const ChangeButton = styled("button")`
  width: 100%;
  font-size: 10px;
  padding: 10px 4px;
  color: #525252;
`;
