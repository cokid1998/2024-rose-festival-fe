import {
  TooltipWrapper,
  Cap,
  ChangeButton,
} from "@src/components/Base/Header/ChangeLanguage.styled";
import { useRouter } from "next/router";

const ChangeLanguage = () => {
  const router = useRouter();

  const handleLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <TooltipWrapper>
      <Cap />
      <ChangeButton
        style={{ borderBottom: "1px solid #DEDEDE" }}
        onClick={() => handleLanguage("ko")}
      >
        한국어
      </ChangeButton>
      <ChangeButton onClick={() => handleLanguage("en")}>English</ChangeButton>
    </TooltipWrapper>
  );
};
export default ChangeLanguage;
