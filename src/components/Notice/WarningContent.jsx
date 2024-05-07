import {
  ImageTypeWrapper,
  WarningContentWrapper,
  WarningTypo,
} from "@src/components/Notice/notice.styled";
import Image from "next/image";
import CloackImageUrl from "@public/images/notice/WarningIcon/Clock.png";
import StoneImageUrl from "@public/images/notice/WarningIcon/Stone.png";
import VImageUrl from "@public/images/notice/WarningIcon/V.png";
import KickboardImageUrl from "@public/images/notice/WarningIcon/Kickboard.png";
import PuppyImageUrl from "@public/images/notice/WarningIcon/Puppy.png";
import SmokeImageUrl from "@public/images/notice/WarningIcon/Smoke.png";
import TrashImageUrl from "@public/images/notice/WarningIcon/Trash.png";
import { useTranslation } from "next-i18next";

const WarningContent = () => {
  const { t } = useTranslation();
  const contenetInfo = [
    {
      imageUrl: CloackImageUrl,
      desc: "Guide1",
      position: {},
    },
    {
      imageUrl: StoneImageUrl,
      desc: "Guide2",
      position: {
        left: "20px",
        top: "10px",
      },
    },
    {
      imageUrl: VImageUrl,
      desc: "Guide3",
      position: {
        top: "25px",
      },
    },
    {
      imageUrl: KickboardImageUrl,
      desc: "Guide4",
      position: {
        left: "20px",
        top: "25px",
      },
    },
    {
      imageUrl: PuppyImageUrl,
      desc: "Guide5",
      position: {
        top: "25px",
      },
    },
    {
      imageUrl: SmokeImageUrl,
      desc: "Guide6",
      position: {
        left: "20px",
        top: "60px",
      },
    },
    {
      imageUrl: TrashImageUrl,
      desc: "Guide7",
      position: {
        top: "70px",
      },
    },
  ];
  return (
    <WarningContentWrapper>
      {contenetInfo.map((item, idx) => {
        return (
          <ImageTypeWrapper
            key={idx}
            left={item.position.left ?? ""}
            right={item.position.right ?? ""}
            top={item.position.top ?? ""}
            bottom={item.position.bottom ?? ""}
          >
            {idx % 2 === 0 ? (
              <Image src={item.imageUrl} width={125} alt="warning-image" />
            ) : null}

            <WarningTypo>{t(item.desc)}</WarningTypo>

            {idx % 2 === 1 ? (
              <Image src={item.imageUrl} width={125} alt="warning-image" />
            ) : null}
          </ImageTypeWrapper>
        );
      })}
    </WarningContentWrapper>
  );
};

export default WarningContent;
