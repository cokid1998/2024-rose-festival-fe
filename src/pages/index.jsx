import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  TitleWrapper,
  BackgroundImageWrapper,
  ImageSize,
  TypoWrapper,
  PeriodWrapper,
  Period,
  MapWrapper,
  MapTitle,
  Map,
} from "@src/components/Index/Index.styled";
import BackgroundImageUrl from "@public/images/index/index-background.png";
import Star from "@public/svg/Star.svg";
import Image from "next/image";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>조선대학교 2024 장미축제!🌹</title>
        <meta
          name="description"
          content="2024 조선대학교 장미축제 많이 놀러와주세요🎉"
        />
        <meta property="og:url" content="https://rose-festival.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="조선대학교 2024 장미축제!🌹" />
        <meta
          property="og:description"
          content="2024 조선대학교 장미축제 많이 놀러와주세요🎉"
        />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rose-festival.vercel.app" />
        <meta
          property="twitter:url"
          content="https://rose-festival.vercel.app/"
        />
        <meta name="twitter:title" content="조선대학교 2024 장미축제!🌹" />
        <meta
          name="twitter:description"
          content="2024 조선대학교 장미축제 많이 놀러와주세요🎉"
        />
      </Head>

      <BackgroundImageWrapper>
        <ImageSize src={BackgroundImageUrl} alt="index-background" />
        <TypoWrapper>
          <TitleWrapper>{t("Title")}</TitleWrapper>
          <PeriodWrapper>
            <Period>{t("Date1")}</Period>
            <Period>⸺</Period>
            <Period style={{ width: "200px" }}>{t("Date2")}</Period>
          </PeriodWrapper>
        </TypoWrapper>
        <MapWrapper>
          <MapTitle>
            <Image src={Star} alt="star-icon" />
            {t("RoseGardenMap")}
            <Image src={Star} alt="star-icon" />
          </MapTitle>
          <Map />
        </MapWrapper>
      </BackgroundImageWrapper>
    </>
  );
}

export async function getStaticProps(context) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
