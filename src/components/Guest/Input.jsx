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
import { useState } from "react";
import axios from "axios";

const Input = () => {
  const { t } = useTranslation();
  const [name, setName] = useState(getRandomName());
  const [text, setText] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/guestbook/`, {
      content: text,
      nickName: name,
    });
    window.location.reload();
  };

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
          <NickName defaultValue={name} onChange={(e) => handleName(e)} />
          <Button type="button" onClick={handleSubmit}>
            {t("Complete")}
          </Button>
        </Wrapper>
        <TextArea onChange={(e) => handleText(e)} />
      </InputBody>
    </InputContiainer>
  );
};

export default Input;
