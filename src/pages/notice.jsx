import {
  NoticeWrapper,
  BoxWrapper,
  LeftBoxWrapper,
  RightBoxWrapper,
  TodayRoseTitleWrapper,
  TodayRoseTitle,
} from "@src/components/Notice/notice.styled";
import LeftBox from "@src/components/Notice/TodayRoseTab";
import NoticeBackgroundImageUrl from "@public/images/notice/Notice-background-image.png";
import RightBoxImageUrl from "@public/images/notice/RightBox.png";
import Image from "next/image";

const Notice = () => {
  return (
    <NoticeWrapper>
      <Image src={NoticeBackgroundImageUrl} alt="Notice-background" fill />
      <BoxWrapper>
        <LeftBox />
        {/* <BoxWrapper>
          <Image src={RightBoxImageUrl} alt="RightBox" fill />
        </BoxWrapper> */}
      </BoxWrapper>
    </NoticeWrapper>
  );
};

export default Notice;
