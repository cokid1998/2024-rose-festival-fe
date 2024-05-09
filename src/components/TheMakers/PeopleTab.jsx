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
import MakersBackgroundImageUrl from "@public/images/makers/TheMakers-background-image.png";
import NoticeTitleBackgroundImageUrl from "@public/images/notice/NoticeTitleBackground.png";
import People from "@src/components/TheMakers/People";

const PeopleTab = () => {
  return (
    <NoticeTabWrapper>
      <Image
        src={MakersBackgroundImageUrl}
        alt="PeopleTab"
        fill
        style={{ zIndex: 0 }}
      />

      <BaseContentWrapper>
        <TitleWrapper>
          <RoseIconWrapper width="260px" height="58px" top="10px">
            <ImageSize
              src={NoticeTitleBackgroundImageUrl}
              alt="NoticeBackground"
            />
            <NoticeTitle>만든이들</NoticeTitle>
            <Desc
              style={{
                width: "100%",
                position: "absolute",
                left: "50%",
                translate: "-43%",
                marginTop: "16px",
              }}
            >
              조선대학교 멋쟁이 사자처럼 3팀
            </Desc>
          </RoseIconWrapper>
        </TitleWrapper>

        <People />
      </BaseContentWrapper>
    </NoticeTabWrapper>
  );
};

export default PeopleTab;
