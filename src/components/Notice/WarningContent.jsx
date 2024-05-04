import {
  ImageTypeWrapper,
  WarningContentWrapper,
  WarningTypo,
} from "@src/components/Notice/notice.styled";
import Image from "next/image";
import { ImageWrapper } from "@src/components/Notice/notice.styled";
import CloackImageUrl from "@public/images/notice/WarningIcon/Clock.png";
import StoneImageUrl from "@public/images/notice/WarningIcon/Stone.png";
import VImageUrl from "@public/images/notice/WarningIcon/V.png";
import KickboardImageUrl from "@public/images/notice/WarningIcon/Kickboard.png";
import PuppyImageUrl from "@public/images/notice/WarningIcon/Puppy.png";
import SmokeImageUrl from "@public/images/notice/WarningIcon/Smoke.png";
import TrashImageUrl from "@public/images/notice/WarningIcon/Trash.png";

const contenetInfo = [
  {
    imageUrl: CloackImageUrl,
    desc: (
      <>
        장미원은 9:00부터
        <br />
        21:00까지 운영해요
      </>
    ),
    position: {},
  },
  {
    imageUrl: StoneImageUrl,
    desc: (
      <>
        경계석 위에 올라서거나
        <br />
        앉으면 안돼요
      </>
    ),
    position: {
      left: "20px",
      top: "10px",
    },
  },
  {
    imageUrl: VImageUrl,
    desc: (
      <>
        장미밭에 들어가거나
        <br />
        장미를 만지면 안돼요
      </>
    ),
    position: {
      top: "25px",
    },
  },
  {
    imageUrl: KickboardImageUrl,
    desc: (
      <>
        자전거, 킥보드등은
        <br />
        반입할 수 없어요
      </>
    ),
    position: {
      left: "20px",
      top: "25px",
    },
  },
  {
    imageUrl: PuppyImageUrl,
    desc: (
      <>
        장미원에 애완동물은
        <br />
        데려오면 안돼요
      </>
    ),
    position: {
      top: "25px",
    },
  },
  {
    imageUrl: SmokeImageUrl,
    desc: (
      <>
        장미원은 음식물 반입,
        <br />
        그리고 흡연을 금지해요
      </>
    ),
    position: {
      left: "20px",
      top: "60px",
    },
  },
  {
    imageUrl: TrashImageUrl,
    desc: (
      <>
        쓰레기는 쓰레기통에
        <br />
        버려주세요
      </>
    ),
    position: {
      top: "70px",
    },
  },
];

const WarningContent = () => {
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

            <WarningTypo>{item.desc}</WarningTypo>

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
