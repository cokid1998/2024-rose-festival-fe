import {
  GuestBookWrapper,
  NickName,
  TextBox,
} from "@src/components/Guest/GuestBook.styled";

const GuestBook = ({ item }) => {
  return (
    <GuestBookWrapper>
      <NickName>{item.nickName}</NickName>
      <TextBox>{item.text}</TextBox>
    </GuestBookWrapper>
  );
};

export default GuestBook;
