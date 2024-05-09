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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Guest = () => {
  const { t } = useTranslation();
  const DummyData = [
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.1",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.2",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.3",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.4",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.5",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.6",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.7",
    },
    {
      nickName: "asdf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam totam laboriosam placeat, mollitia consequatur corporis impedit recusandae adipisci atque.8",
    },
  ];
  return (
    <GuestContinaer>
      <GuestBackImageWrapper>
        <Image src={GuestBackImageUrl} fill alt="guest-back-image" />
        <GuestContenetWrapper>
          <GuestTypoWrapper>
            <Image src={Star} alt="star-icon" />
            {t("Guest")}
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

export async function getStaticProps(context) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
export default Guest;
