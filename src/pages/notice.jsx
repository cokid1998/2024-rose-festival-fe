import {
  NoticeWrapper,
  BoxWrapper,
} from "@src/components/Notice/notice.styled";
import TodayRoseTab from "@src/components/Notice/TodayRoseTab";
import NoticeBackgroundImageUrl from "@public/images/notice/Notice-background-image.png";
import Image from "next/image";
import NoticeTab from "@src/components/Notice/NoticeTab";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Notice = () => {
  const [curTab, setCurTab] = useState(0);

  return (
    <NoticeWrapper>
      <Image
        priority
        src={NoticeBackgroundImageUrl}
        alt="Notice-background"
        fill
      />
      <BoxWrapper>
        <TodayRoseTab curTab={curTab} setCurTab={setCurTab} />
        <NoticeTab curTab={curTab} setCurTab={setCurTab} />
      </BoxWrapper>
    </NoticeWrapper>
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

export default Notice;
