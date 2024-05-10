import TitleWrapperImageUrl from "@public/images/makers/Title-Wrapper.png";
import Image from "next/image";
import { JobContainer, JobTitle } from "@src/components/TheMakers/Job.styled";

const Job = ({ title }) => {
  return (
    <JobContainer>
      <Image src={TitleWrapperImageUrl} alt="Title-wrapper" fill />
      <JobTitle>{title}</JobTitle>
    </JobContainer>
  );
};

export default Job;
