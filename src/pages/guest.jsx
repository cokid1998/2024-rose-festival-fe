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
import { useState, useEffect } from "react";
import axios from "axios";

const Guest = () => {
  const { t } = useTranslation();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/guestbook/`)
      .then((res) => setList(res.data));
  }, []);

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
            {list.map((item) => (
              <GuestBook key={item.guestBookId} item={item} />
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
