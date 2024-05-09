import {
  GuestContinaer,
  GuestBackImageWrapper,
  GuestContenetWrapper,
  GuestTypoWrapper,
  GuestBookWrapper,
} from "@src/components/Guest/Guest.styled";
import GuestBackImageUrl from "@public/images/guest/guest-back-image.png";
import Image from "next/image";
import Star from "@public/svg/Star.svg";
import GuestBook from "@src/components/Guest/GuestBook";
import Input from "@src/components/Guest/Input";
import { getRandomName } from "@src/utils/getRandomName";

const Guest = () => {
  const DummyData = [
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.",
    },
  ];
  return (
    <GuestContinaer>
      <GuestBackImageWrapper>
        <Image src={GuestBackImageUrl} fill alt="guest-back-image" />
        <GuestContenetWrapper>
          <GuestTypoWrapper>
            <Image src={Star} alt="star-icon" />
            방명록
            <Image src={Star} alt="star-icon" />
          </GuestTypoWrapper>

          <GuestBookWrapper>
            {DummyData.map((item) => (
              <GuestBook key={item.text} item={item} />
            ))}
          </GuestBookWrapper>
        </GuestContenetWrapper>
        <Input />
      </GuestBackImageWrapper>
    </GuestContinaer>
  );
};

export default Guest;
