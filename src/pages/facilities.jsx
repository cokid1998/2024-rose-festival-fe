import Image from "next/image";
import Union from "@public/images/facilities/Union.png";
import {
  Container,
  FacilitiesBackgroundImageWrapper,
  ContenetPositionWrapper,
  FacilitiesWrapper,
  FacilitiesGuideTypoWrapper,
  Map,
  FacilitiesChoiceBox,
} from "@src/components/Facilities/Facilities.styled";
import FacilitiesContent from "@src/components/Facilities/FacilitiesContent";
import Star from "@public/svg/Star.svg";
import ParkingOn from "@public/svg/facilities/OnIcon/ParkingOn.svg";
import ToiletOn from "@public/svg/facilities/OnIcon/ToiletOn.svg";
import StoreOn from "@public/svg/facilities/OnIcon/StoreOn.svg";
import CafeOn from "@public/svg/facilities/OnIcon/CafeOn.svg";
import CameraOn from "@public/svg/facilities/OnIcon/CameraOn.svg";
import RoseOn from "@public/svg/facilities/OnIcon/RoseOn.svg";
import ParkingOff from "@public/svg/facilities/OffIcon/ParkingOff.svg";
import ToiletOff from "@public/svg/facilities/OffIcon/ToiletOff.svg";
import StoreOff from "@public/svg/facilities/OffIcon/StoreOff.svg";
import CafeOff from "@public/svg/facilities/OffIcon/CafeOff.svg";
import CameraOff from "@public/svg/facilities/OffIcon/CameraOff.svg";
import RoseOff from "@public/svg/facilities/OffIcon/RoseOff.svg";
import { useState } from "react";

const facilitiesInfo = [
  {
    title: "주차장",
    onIcon: ParkingOn,
    offIcon: ParkingOff,
  },
  {
    title: "화장실",
    onIcon: ToiletOn,
    offIcon: ToiletOff,
  },
  {
    title: "편의점",
    onIcon: StoreOn,
    offIcon: StoreOff,
  },
  {
    title: "카페1",
    onIcon: CafeOn,
    offIcon: CafeOff,
  },
  {
    title: "카페2",
    onIcon: CafeOn,
    offIcon: CafeOff,
  },
  {
    title: "포토존",
    onIcon: CameraOn,
    offIcon: CameraOff,
  },
  {
    title: "장미1",
    onIcon: RoseOn,
    offIcon: RoseOff,
  },
  {
    title: "장미2",
    onIcon: RoseOn,
    offIcon: RoseOff,
  },
  {
    title: "장미3",
    onIcon: RoseOn,
    offIcon: RoseOff,
  },
];

const Facilities = () => {
  const [curCategory, setCurCategory] = useState("");

  return (
    <Container>
      <FacilitiesBackgroundImageWrapper>
        <Image src={Union} alt="facilities-background" fill />
      </FacilitiesBackgroundImageWrapper>

      <ContenetPositionWrapper>
        <FacilitiesWrapper>
          <FacilitiesGuideTypoWrapper>
            <Image src={Star} alt="star-icon" />
            편의시설 안내
            <Image src={Star} alt="star-icon" />
          </FacilitiesGuideTypoWrapper>

          <Map />

          <FacilitiesChoiceBox>
            {facilitiesInfo.map((item) => {
              return (
                <FacilitiesContent
                  key={item.title}
                  item={item}
                  curCategory={curCategory}
                  setCurCategory={setCurCategory}
                />
              );
            })}
          </FacilitiesChoiceBox>
        </FacilitiesWrapper>
      </ContenetPositionWrapper>
    </Container>
  );
};

export default Facilities;
