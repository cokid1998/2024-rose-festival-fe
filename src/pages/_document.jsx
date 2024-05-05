import { Html, Head, Main, NextScript } from "next/document";
import styled from "@emotion/styled";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <Body>
        <Main />
        <NextScript />
      </Body>
    </Html>
  );
}

const Body = styled("body")`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    90deg,
    hsla(10, 100%, 63%, 1) 0%,
    hsla(318, 100%, 81%, 1) 50%,
    hsla(0, 0%, 100%, 1) 100%
  );
`;
