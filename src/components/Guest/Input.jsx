import {
  InputHeader,
  Deco,
  InputContiainer,
  InputBody,
  NickName,
  Wrapper,
  Button,
  TextArea,
} from "@src/components/Guest/Input.styled";
import { getRandomName } from "@src/utils/getRandomName";
import { useTranslation } from "next-i18next";

const Input = () => {
  const { t } = useTranslation();
  return (
    <InputContiainer
      drag="y"
      dragConstraints={{
        top: -320,
        bottom: 0,
      }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragElastic={0.5}
    >
      <InputHeader>
        <Deco />
        {t("Create")}
      </InputHeader>

      <InputBody>
        <Wrapper>
          <NickName defaultValue={getRandomName()} />
          <Button>{t("Complete")}</Button>
        </Wrapper>
        <TextArea />
      </InputBody>
    </InputContiainer>
  );
};

export default Input;
