import {
  NoticeTabWrapper,
  BaseContentWrapper,
  ImageSize,
  TitleWrapper,
  RoseIconWrapper,
  NoticeTabTypo,
  NoticeTitle,
  Desc,
} from "@src/components/Notice/notice.styled";
import Image from "next/image";
import NoticeTabBackgroundImageUrl from "@public/images/notice/NoticeTabBackground.png";
import NoticeTitleBackgroundImageUrl from "@public/images/notice/NoticeTitleBackground.png";
import NoticeTitleRoseIcon from "@public/images/notice/RoseIcon/NoticeRose.png";
import WarningContent from "@src/components/Notice/WarningContent";
import { useTranslation } from "next-i18next";

const NoticeTab = ({ curTab, setCurTab }) => {
  const { t } = useTranslation();
  const handleTab = () => {
    setCurTab(1);
  };

  return (
    <NoticeTabWrapper curTab={curTab}>
      <Image
        priority
        src={NoticeTabBackgroundImageUrl}
        alt="NoticeTab"
        fill
        style={{ zIndex: 0 }}
      />
      <NoticeTabTypo curTab={curTab} onClick={handleTab}>
        {t("TourGuide")}
      </NoticeTabTypo>

      <BaseContentWrapper>
        <TitleWrapper>
          <RoseIconWrapper width="260px" height="58px" top="10px">
            <RoseIconWrapper
              width="89px"
              height="58px"
              top="-40px"
              right="85px"
            >
              <ImageSize src={NoticeTitleRoseIcon} alt="NoticeRose" />
            </RoseIconWrapper>
            <ImageSize
              src={NoticeTitleBackgroundImageUrl}
              alt="NoticeBackground"
            />
            <NoticeTitle>{t("NotesForVisitors")}</NoticeTitle>
            <Desc
              style={{
                width: "100%",
                position: "absolute",
                left: "50%",
                translate: "-43%",
                marginTop: "16px",
              }}
            >
              {t("NotesForVisitorsDesc")}
            </Desc>
          </RoseIconWrapper>
        </TitleWrapper>

        <WarningContent />
      </BaseContentWrapper>
    </NoticeTabWrapper>
  );
};

export default NoticeTab;
