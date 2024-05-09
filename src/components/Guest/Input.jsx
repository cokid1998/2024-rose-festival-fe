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

const Input = () => {
  return (
    <InputContiainer>
      <InputHeader>
        <Deco />
        작성하기
      </InputHeader>

      <InputBody>
        <Wrapper>
          <NickName defaultValue={getRandomName()} />
          <Button>완료</Button>
        </Wrapper>
        <TextArea />
      </InputBody>
    </InputContiainer>
  );
};

export default Input;
