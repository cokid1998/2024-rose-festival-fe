import {
  CardWrapper,
  TypoWrapper,
  Name,
  Info,
} from "@src/components/TheMakers/JobCard.styled";

const JobCard = ({ item }) => {
  return (
    <CardWrapper>
      <div
        style={{
          width: "106px",
          height: "106px",
          backgroundColor: "#d9d9d9",
          borderRadius: "50%",
        }}
      ></div>
      <TypoWrapper>
        <Name>{item.name}</Name>
        <Info>{item.info}</Info>
      </TypoWrapper>
    </CardWrapper>
  );
};
export default JobCard;
