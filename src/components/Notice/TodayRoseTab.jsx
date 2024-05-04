import {
  NoticeContentWrapper,
  ImageSize,
  TodayRoseTitle,
  TodayRoseTitleWrapper,
  RoseIconWrapper,
  TodayRoseDesc,
  TodayRoseTab,
} from "@src/components/Notice/notice.styled";
import IntroRoseContent from "@src/components/Notice/IntroRoseContent";
import Image from "next/image";
import LeftBoxImageUrl from "@public/images/notice/LeftBox.png";
import TodayRoseTitleRoseImageUrl from "@public/images/notice/RoseIcon/TodayRoseTitleRose.png";
import Star from "@public/svg/Star.svg";

const LeftBox = () => {
  return (
    <>
      <Image src={LeftBoxImageUrl} alt="LeftBox" fill />
      <TodayRoseTab>오늘의 장미</TodayRoseTab>
      <NoticeContentWrapper>
        <TodayRoseTitleWrapper>
          <RoseIconWrapper width="50px" height="52px" top="-40px" right="85px">
            <ImageSize src={TodayRoseTitleRoseImageUrl} />
          </RoseIconWrapper>
          <TodayRoseTitle>
            <Image src={Star} alt="star-icon" />
            오늘의 장미
            <Image src={Star} alt="star-icon" />
          </TodayRoseTitle>
          <TodayRoseDesc>오늘의 개화 상황을 알려드릴게요</TodayRoseDesc>
        </TodayRoseTitleWrapper>

        <IntroRoseContent />
      </NoticeContentWrapper>
    </>
  );
};

export default LeftBox;
