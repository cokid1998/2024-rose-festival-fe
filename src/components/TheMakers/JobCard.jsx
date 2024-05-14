import {
  CardWrapper,
  TypoWrapper,
  Name,
  Info,
} from "@src/components/TheMakers/JobCard.styled";
import Image from "next/image";

const JobCard = ({ item }) => {
  return (
    <CardWrapper>
      <div
        style={{
          width: "106px",
          height: "106px",
          borderRadius: "50%",
          position: "relative",
        }}
      >
        <Image src={item.url} alt={item.name} fill />
      </div>
      <TypoWrapper>
        <Name>{item.name}</Name>
        <Info>{item.info}</Info>
      </TypoWrapper>
    </CardWrapper>
  );
};
export default JobCard;
