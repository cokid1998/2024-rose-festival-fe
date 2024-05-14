import Image from "next/image";
import Union from "@public/images/facilities/Union.png";
import {
  Container,
  FacilitiesBackgroundImageWrapper,
  ContenetPositionWrapper,
  FacilitiesWrapper,
  FacilitiesGuideTypoWrapper,
  FacilitiesChoiceBox,
} from "@src/components/Facilities/Facilities.styled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Map from "@src/components/Facilities/Map";
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
import { useTranslation } from "next-i18next";

const Facilities = () => {
  const { t } = useTranslation();
  const [curCategory, setCurCategory] = useState("");
  const facilitiesInfo = [
    {
      title: "Toilet",
      onIcon: ToiletOn,
      offIcon: ToiletOff,
    },
    {
      title: "Parking",
      onIcon: ParkingOn,
      offIcon: ParkingOff,
    },
    {
      title: "Convenience",
      onIcon: StoreOn,
      offIcon: StoreOff,
    },
    {
      title: "PhotoZone",
      onIcon: CameraOn,
      offIcon: CameraOff,
    },
    {
      title: "Cafe",
      onIcon: CafeOn,
      offIcon: CafeOff,
    },
    {
      title: "Rose1",
      onIcon: RoseOn,
      offIcon: RoseOff,
    },
    {
      title: "Rose2",
      onIcon: RoseOn,
      offIcon: RoseOff,
    },
    {
      title: "Rose3",
      onIcon: RoseOn,
      offIcon: RoseOff,
    },
  ];

  return (
    <Container>
      <FacilitiesBackgroundImageWrapper>
        <Image priority src={Union} alt="facilities-background" fill />
      </FacilitiesBackgroundImageWrapper>

      <ContenetPositionWrapper>
        <FacilitiesWrapper>
          <FacilitiesGuideTypoWrapper>
            <Image priority src={Star} alt="star-icon" />
            {t("FacilitiesInfoTitle")}
            <Image priority src={Star} alt="star-icon" />
          </FacilitiesGuideTypoWrapper>
          <Map curCategory={curCategory} />
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

export async function getStaticProps(context) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default Facilities;
