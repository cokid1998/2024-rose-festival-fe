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
import Rose1 from "@public/images/notice/RoseImage/Rose1.png";
import Rose2 from "@public/images/notice/RoseImage/Rose2.png";
import Rose3 from "@public/images/notice/RoseImage/Rose3.png";
import Rose4 from "@public/images/notice/RoseImage/Rose4.png";
import Rose5 from "@public/images/notice/RoseImage/Rose5.png";
import { useTranslation } from "next-i18next";

const roseItemInfo = [
  {
    roseTitle: "Charleston",
    imageUrl: FirstRoseIcon,
    roseImageUrl: Rose1,
    iconPositionInfo: {
      width: "42px",
      height: "28px",
      top: "-10px",
      right: "-10px",
    },
  },
  {
    roseTitle: "Candlelight",
    imageUrl: SecondRoseIcon,
    roseImageUrl: Rose2,
    iconPositionInfo: {
      width: "42px",
      height: "28px",
      bottom: "-5px",
      left: "-10px",
    },
  },
  {
    roseTitle: "Rokoko",
    imageUrl: ThirdRoseIcon,
    roseImageUrl: Rose3,
    iconPositionInfo: {
      width: "55px",
      height: "47px",
      right: "-10px",
      bottom: "-5px",
    },
  },
  {
    roseTitle: "Matsuri",
    imageUrl: FourthRoseIcon,
    roseImageUrl: Rose4,
    iconPositionInfo: {
      width: "43px",
      height: "40px",
      top: "-20px",
      left: "-10px",
    },
  },
];

const IntroRoseContent = () => {
  const { t } = useTranslation();

  return (
    <RoseContentWrapper>
      {roseItemInfo.map((item) => {
        return (
          <RoseThumbWrapper key={item.roseTitle}>
            <ImageWrapper>
              <Image
                src={item.roseImageUrl}
                width={280}
                height={250}
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
              <RoseTitle>{t(item.roseTitle)}</RoseTitle>
            </RoseWrapper>
          </RoseThumbWrapper>
        );
      })}
      <RoseThumbWrapper>
        <ImageWrapper>
          <Image src={Rose5} width={280} height={250} alt="Rose-image" />
        </ImageWrapper>
        <RoseWrapper>
          <RoseIconWrapper
            width="40px"
            height="30px"
            bottom="-10px"
            left="-10px"
          >
            <Image src={SecondRoseIcon} fill alt="roseIcon" />
          </RoseIconWrapper>
          <RoseTitle>{t("DesertPeace")}</RoseTitle>
          <RoseIconWrapper width="45px" height="30px" top="-10px" right="-10px">
            <Image src={FirstRoseIcon} fill alt="roseIcon" />
          </RoseIconWrapper>
        </RoseWrapper>
      </RoseThumbWrapper>
    </RoseContentWrapper>
  );
};

export default IntroRoseContent;
