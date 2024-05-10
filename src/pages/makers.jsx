import Image from "next/image";
import MakersBackgroundImageUrl from "@public/images/makers/TheMakers-background-image.png";
import {
  MakersContainer,
  MakersTitleWrapper,
  MakersWrapper,
  MakersTitle,
  JobTitle,
  CardContainer,
} from "@src/components/TheMakers/People.styled";
import Star from "@public/svg/Star.svg";
import { Desc, ImageSize } from "@src/components/Notice/notice.styled";
import { useTranslation } from "next-i18next";
import Job from "@src/components/TheMakers/Job";
import NoticeTitleBackgroundImageUrl from "@public/images/notice/NoticeTitleBackground.png";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import JobCard from "@src/components/TheMakers/JobCard";

const frontInfo = [
  {
    name: "이태관",
    info: "경영학부 17",
  },
  {
    name: "채유정",
    info: "컴퓨터공학과 21",
  },
];

const backInfo = [
  {
    name: "최종빈",
    info: "컴퓨터공학과 19",
  },
  {
    name: "송민서",
    info: "컴퓨터공학과 20",
  },
  {
    name: "임채환",
    info: "컴퓨터공학과 19",
  },
  {
    name: "김가흔",
    info: "정보보안과 22",
  },
];

const productInfo = {
  name: "문지영",
  info: "컴퓨터공학과 20",
};
const designInfo = {
  name: "김한비",
  info: "시각디자인학과 22",
};

const TheMakers = () => {
  const { t } = useTranslation();
  return (
    <MakersContainer>
      <div style={{ width: "100vw", height: "2400px" }}>
        <Image src={MakersBackgroundImageUrl} alt="TheMakers-background" fill />
      </div>

      <MakersWrapper>
        <MakersTitleWrapper>
          <ImageSize
            src={NoticeTitleBackgroundImageUrl}
            alt="NoticeBackground"
          />
          <MakersTitle>만든이들</MakersTitle>
        </MakersTitleWrapper>
        <Desc style={{ textAlign: "center", marginBottom: "30px" }}>
          조선대학교 멋쟁이 사자처럼 3팀
        </Desc>

        <Job title={"Developer"} />
        <JobTitle style={{ margin: "26px 0 25px" }}>
          <Image src={Star} alt="star-icon" />
          Front-End
          <Image src={Star} alt="star-icon" />
        </JobTitle>
        <CardContainer>
          {frontInfo.map((item) => (
            <JobCard item={item} key={item.name} />
          ))}
        </CardContainer>

        <JobTitle style={{ margin: "26px 0 25px" }}>
          <Image src={Star} alt="star-icon" />
          Back-End
          <Image src={Star} alt="star-icon" />
        </JobTitle>
        <CardContainer style={{ marginBottom: "60px" }}>
          {backInfo.map((item) => (
            <JobCard item={item} key={item.name} />
          ))}
        </CardContainer>

        <Job title={"Product Manager"} />
        <CardContainer style={{ marginTop: "26px", marginBottom: "60px" }}>
          <JobCard item={productInfo} />
        </CardContainer>

        <Job title={"Product Manager"} />
        <CardContainer style={{ marginTop: "26px" }}>
          <JobCard item={designInfo} />
        </CardContainer>
      </MakersWrapper>
    </MakersContainer>
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
export default TheMakers;
