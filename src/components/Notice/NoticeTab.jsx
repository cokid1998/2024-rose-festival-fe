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

const NoticeTab = ({ curTab, setCurTab }) => {
  const handleTab = () => {
    setCurTab(1);
    console.log(curTab);
  };

  return (
    <NoticeTabWrapper curTab={curTab}>
      <Image
        src={NoticeTabBackgroundImageUrl}
        alt="NoticeTab"
        fill
        style={{ zIndex: 0 }}
      />
      <NoticeTabTypo curTab={curTab} onClick={handleTab}>
        관람안내
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
            <NoticeTitle>관람객 유의사항</NoticeTitle>
            <Desc
              style={{
                width: "100%",
                position: "absolute",
                left: "50%",
                translate: "-43%",
                marginTop: "16px",
              }}
            >
              관람 시 유의사항을 안내해 드릴게요
            </Desc>
          </RoseIconWrapper>
        </TitleWrapper>

        <WarningContent />
      </BaseContentWrapper>
    </NoticeTabWrapper>
  );
};

export default NoticeTab;
