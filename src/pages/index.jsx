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
        <title>조선대학교 2024 장미축제</title>
        <meta name="description" content="조선대학교 2024 장미축제!🌹" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="조선대학교 2024 장미축제!🌹" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://rose-festival.vercel.app/" />
        <meta
          property="og:description"
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
