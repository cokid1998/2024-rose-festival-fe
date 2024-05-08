import MakersBackgroundImageUrl from "@public/images/makers/TheMakers-background-image.png";
import Image from "next/image";
import { useState } from "react";
import Union from "@public/images/facilities/Union.png";
import {
  Container,
  FacilitiesBackgroundImageWrapper,
  ContenetPositionWrapper,
  FacilitiesWrapper,
  FacilitiesGuideTypoWrapper,
  FacilitiesChoiceBox,
} from "@src/components/Facilities/Facilities.styled";
import Map from "@src/components/Facilities/Map";
import FacilitiesContent from "@src/components/Facilities/FacilitiesContent";
import Star from "@public/svg/Star.svg";

const TheMakers = () => {
  const [curTab, setCurTab] = useState(0);
  return (
    <Container>
      <FacilitiesBackgroundImageWrapper>
        
      <Image src={MakersBackgroundImageUrl} alt="TheMakers-background" fill />
        
      </FacilitiesBackgroundImageWrapper>

      <ContenetPositionWrapper>
        <FacilitiesWrapper>
          <FacilitiesGuideTypoWrapper>
            <Image src={Star} alt="star-icon" />
            만든이들
            <Image src={Star} alt="star-icon" />
          </FacilitiesGuideTypoWrapper>
        </FacilitiesWrapper>
      </ContenetPositionWrapper>
    </Container>
  );
};



export default TheMakers;