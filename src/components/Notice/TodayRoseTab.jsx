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
import { useTranslation } from "next-i18next";

const TodayRoseTab = ({ curTab, setCurTab }) => {
  const { t } = useTranslation();
  const handleTab = () => {
    setCurTab(0);
  };

  return (
    <TodayRoseTabWrapper curTab={curTab}>
      <Image
        priority
        src={TodayRoseTabBackgroundImageUrl}
        alt="TodayRoseTab"
        fill
        style={{ zIndex: 0 }}
      />
      <TodayRoseTabTypo curTab={curTab} onClick={handleTab}>
        {t("TodayRose")}
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
            {t("TodayRose")}
            <Image src={Star} alt="star-icon" />
          </TodayRoseTitle>
          <Desc>{t("TodayRoseDesc")}</Desc>
        </TitleWrapper>

        <IntroRoseContent />
      </BaseContentWrapper>
    </TodayRoseTabWrapper>
  );
};

export default TodayRoseTab;
