import RightTail from "@public/images/notice/RightTailRoseThumbnail.png";
import LeftTail from "@public/images/notice/LeftTailRoseThumbnail.png";
import FirstRoseIcon from "@public/images/notice/RoseIcon/FirstRose.png";
import SecondRoseIcon from "@public/images/notice/RoseIcon/SecondRose.png";
import ThirdRoseIcon from "@public/images/notice/RoseIcon/ThirdRose.png";
import FourthRoseIcon from "@public/images/notice/RoseIcon/FourthRose.png";
import Image from "next/image";
import {
  RoseContentWrapper,
  RoseThumbWrapper,
  ImageWrapper,
  RoseWrapper,
  RoseTitle,
  RoseIconWrapper,
} from "@src/components/Notice/notice.styled";

const roseItemInfo = [
  {
    roseTitle: "장미이름0",
    imageUrl: FirstRoseIcon,
    iconPositionInfo: {
      width: "42px",
      height: "28px",
      top: "-10px",
      right: "-10px",
    },
  },
  {
    roseTitle: "장미이름1",
    imageUrl: SecondRoseIcon,
    iconPositionInfo: {
      width: "42px",
      height: "28px",
      bottom: "-5px",
      left: "-10px",
    },
  },
  {
    roseTitle: "장미이름2",
    imageUrl: ThirdRoseIcon,
    iconPositionInfo: {
      width: "55px",
      height: "47px",
      right: "-10px",
      bottom: "-5px",
    },
  },
  {
    roseTitle: "장미이름3",
    imageUrl: FourthRoseIcon,
    iconPositionInfo: {
      width: "43px",
      height: "40px",
      top: "-20px",
      left: "-10px",
    },
  },
];

const IntroRoseContent = () => {
  return (
    <RoseContentWrapper>
      {roseItemInfo.map((item, idx) => {
        return (
          <RoseThumbWrapper key={item.roseTitle}>
            <ImageWrapper tailDirection={idx % 2}>
              <Image
                src={idx % 2 === 0 ? RightTail : LeftTail}
                width={290}
                height={240}
                alt="Rose-image"
              />
            </ImageWrapper>
            <RoseWrapper>
              <RoseIconWrapper
                width={item.iconPositionInfo.width}
                height={item.iconPositionInfo.height}
                top={item.iconPositionInfo.top ?? ""}
                right={item.iconPositionInfo.right ?? ""}
                left={item.iconPositionInfo.left ?? ""}
                bottom={item.iconPositionInfo.bottom ?? ""}
              >
                <Image src={item.imageUrl} fill alt="roseIcon" />
              </RoseIconWrapper>
              <RoseTitle>{item.roseTitle}</RoseTitle>
            </RoseWrapper>
          </RoseThumbWrapper>
        );
      })}
      <RoseThumbWrapper>
        <ImageWrapper tailDirection={0}>
          <Image src={RightTail} width={290} height={240} alt="Rose-image" />
        </ImageWrapper>
        <RoseWrapper>
          <RoseIconWrapper
            width="40px"
            height={"30px"}
            bottom={"-10px"}
            left={"-10px"}
          >
            <Image src={SecondRoseIcon} fill alt="roseIcon" />
          </RoseIconWrapper>
          <RoseTitle>장미이름4</RoseTitle>
          <RoseIconWrapper
            width="45px"
            height={"30px"}
            top={"-10px"}
            right={"-10px"}
          >
            <Image src={FirstRoseIcon} fill alt="roseIcon" />
          </RoseIconWrapper>
        </RoseWrapper>
      </RoseThumbWrapper>
    </RoseContentWrapper>
  );
};

export default IntroRoseContent;
