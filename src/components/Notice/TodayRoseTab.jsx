import {
  TodayRoseTabWrapper,
  BaseContentWrapper,
  ImageSize,
  TodayRoseTitle,
  TitleWrapper,
  RoseIconWrapper,
  Desc,
  TodayRoseTabTypo,
} from "@src/components/Notice/notice.styled";
import IntroRoseContent from "@src/components/Notice/IntroRoseContent";
import Image from "next/image";
import TodayRoseTabBackgroundImageUrl from "@public/images/notice/TodayRoseTabBackground.png";
import TodayRoseTitleRoseImageUrl from "@public/images/notice/RoseIcon/TodayRoseTitleRose.png";
import Star from "@public/svg/Star.svg";

const TodayRoseTab = ({ curTab, setCurTab }) => {
  const handleTab = () => {
    setCurTab(0);
    console.log(curTab);
  };

  return (
    <TodayRoseTabWrapper curTab={curTab}>
      <Image
        src={TodayRoseTabBackgroundImageUrl}
        alt="TodayRoseTab"
        fill
        style={{ zIndex: 0 }}
      />
      <TodayRoseTabTypo curTab={curTab} onClick={handleTab}>
        오늘의 장미
      </TodayRoseTabTypo>

      <BaseContentWrapper>
        <TitleWrapper>
          <RoseIconWrapper width="50px" height="52px" top="-40px" right="85px">
            <ImageSize
              src={TodayRoseTitleRoseImageUrl}
              alt="TodatRoseTitleBackground"
            />
          </RoseIconWrapper>
          <TodayRoseTitle>
            <Image src={Star} alt="star-icon" />
            오늘의 장미
            <Image src={Star} alt="star-icon" />
          </TodayRoseTitle>
          <Desc>오늘의 개화 상황을 알려드릴게요</Desc>
        </TitleWrapper>

        <IntroRoseContent />
      </BaseContentWrapper>
    </TodayRoseTabWrapper>
  );
};

export default TodayRoseTab;
