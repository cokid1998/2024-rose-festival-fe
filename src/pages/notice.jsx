import {
  NoticeWrapper,
  BoxWrapper,
} from "@src/components/Notice/notice.styled";
import TodayRoseTab from "@src/components/Notice/TodayRoseTab";
import NoticeBackgroundImageUrl from "@public/images/notice/Notice-background-image.png";
import Image from "next/image";
import NoticeTab from "@src/components/Notice/NoticeTab";
import { useState } from "react";

const Notice = () => {
  const [curTab, setCurTab] = useState(0);

  return (
    <NoticeWrapper>
      <Image src={NoticeBackgroundImageUrl} alt="Notice-background" fill />
      <BoxWrapper>
        <TodayRoseTab curTab={curTab} setCurTab={setCurTab} />
        <NoticeTab curTab={curTab} setCurTab={setCurTab} />
      </BoxWrapper>
    </NoticeWrapper>
  );
};

export default Notice;
