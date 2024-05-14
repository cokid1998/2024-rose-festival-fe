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
import chaehwanImage from "@public/images/makers/chaehwan.jpeg";
import gaheunImage from "@public/images/makers/gaheun.jpeg";
import jiyoungImage from "@public/images/makers/jiyoung.jpeg";
import jongbinImage from "@public/images/makers/jongbin.jpeg";
import minseoImage from "@public/images/makers/minseo.jpeg";
import taegwanImage from "@public/images/makers/taegwan.jpeg";
import ujungImage from "@public/images/makers/ujung.jpeg";
import hanbiImage from "@public/images/makers/hanbi.jpeg";

const frontInfo = [
  {
    name: "이태관",
    info: "경영학부 17",
    url: taegwanImage,
  },
  {
    name: "채유정",
    info: "컴퓨터공학과 21",
    url: ujungImage,
  },
];

const backInfo = [
  {
    name: "최종빈",
    info: "컴퓨터공학과 19",
    url: jongbinImage,
  },
  {
    name: "송민서",
    info: "컴퓨터공학과 20",
    url: minseoImage,
  },
  {
    name: "임채환",
    info: "컴퓨터공학과 19",
    url: chaehwanImage,
  },
  {
    name: "김가흔",
    info: "정보보안과 22",
    url: gaheunImage,
  },
];

const productInfo = {
  name: "문지영",
  info: "컴퓨터공학과 20",
  url: jiyoungImage,
};
const designInfo = {
  name: "김한비",
  info: "시각디자인학과 22",
  url: hanbiImage,
};

const TheMakers = () => {
  const { t } = useTranslation();
  return (
    <MakersContainer>
      <div style={{ width: "100vw", height: "2400px" }}>
        <Image
          priority
          src={MakersBackgroundImageUrl}
          alt="TheMakers-background"
          fill
        />
      </div>

      <MakersWrapper>
        <MakersTitleWrapper>
          <ImageSize
            src={NoticeTitleBackgroundImageUrl}
            alt="NoticeBackground"
          />
          <MakersTitle>{t("Makers")}</MakersTitle>
        </MakersTitleWrapper>
        <Desc style={{ textAlign: "center", marginBottom: "30px" }}>
          {t("ChosunUnivLikeLion3Team")}
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

        <Job title={"Designer"} />
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
