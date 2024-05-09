import MakersBackgroundImageUrl from "@public/images/makers/TheMakers-background-image.png";
import Image from "next/image";
import { useState } from "react";
import {
  MakersContainer,
  MakersWrapper,
} from "@src/components/TheMakers/People.styled";
import Star from "@public/svg/Star.svg";
import PeopleTab from "@src/components/TheMakers/PeopleTab";

const TheMakers = () => {
  const [curTab, setCurTab] = useState(0);
  return (
    <MakersContainer>
      <div style={{ width: "100vw", height: "2400px" }}>
        <Image src={MakersBackgroundImageUrl} alt="TheMakers-background" fill />
      </div>

      <MakersWrapper>
        <PeopleTab curTab={curTab} setCurTab={setCurTab} />
      </MakersWrapper>
    </MakersContainer>
  );
};

export default TheMakers;
