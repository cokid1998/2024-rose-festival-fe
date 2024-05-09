import {
  SideMenuWrapper,
  HeaderSide,
  MenuTypo,
} from "@src/components/Base/SideMenu/SideMenu.styled";
import { useEffect } from "react";
import Close from "@public/svg/Close.svg";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import Language from "@public/svg/LanguageBlack.svg";
import {
  HeaderWrapper,
  IconMenuWrapper,
  HeaderLogo,
  ChangeLanguageContainer,
} from "../Header/Header.styled";
import Link from "next/link";
import Main from "@public/svg/Main.svg";
import Convenient from "@public/svg/Convenient.svg";
import Map from "@public/svg/Map.svg";
import Register from "@public/svg/Register.svg";
import Sound from "@public/svg/Sound.svg";
import Heart from "@public/svg/Heart.svg";
import ChangeLanguage from "@src/components/Base/Header/ChangeLanguage";
import { useTranslation } from "next-i18next";

const SideMenu = ({ language, setLanguage, isMenuOpen, setIsMenuOpen }) => {
  const { t } = useTranslation();
  const handleMenuOpen = (event) => {
    setIsMenuOpen((prev) => !prev);
    event.stopPropagation();
  };
  const handleToggle = (event) => {
    setLanguage((prev) => !prev);
    event.stopPropagation();
  };
  useEffect(() => {
    // 사이드바가 열렸을 때 스크롤을 막는 코드
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <SideMenuWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => handleMenuOpen(event)}
          >
            <HeaderWrapper>
              <IconMenuWrapper>
                <Image src={Close} alt="Close-icon" onClick={handleMenuOpen} />

                <Link href={"/"}>
                  <HeaderLogo style={{ color: "black" }}>
                    {t("HeaderTitle")}
                  </HeaderLogo>
                </Link>

                <ChangeLanguageContainer
                  onClick={(event) => handleToggle(event)}
                >
                  <Image src={Language} alt="Language-icon" />
                  {language && <ChangeLanguage />}
                </ChangeLanguageContainer>
              </IconMenuWrapper>
            </HeaderWrapper>

            <header
              style={{
                width: "100%",
                position: "absolute",
                top: "213px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <HeaderSide>
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={handleMenuOpen}
                >
                  <Image
                    src={Main}
                    alt="Main-icon"
                    style={{ padding: "20px 0" }}
                  />
                  <Link href={"/"}>
                    <MenuTypo>{t("MainMenu")}</MenuTypo>
                  </Link>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={handleMenuOpen}
                >
                  <Image
                    src={Sound}
                    alt="Sound-icon"
                    style={{ padding: "20px 0" }}
                  />
                  <Link href={"/notice"}>
                    <MenuTypo>{t("Notice")}</MenuTypo>
                  </Link>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={handleMenuOpen}
                >
                  <Image
                    src={Map}
                    alt="Map-icon"
                    style={{ padding: "20px 0" }}
                  />
                  <Link href={"/"}>
                    <MenuTypo>{t("WayToCome")}</MenuTypo>
                  </Link>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={handleMenuOpen}
                >
                  <Image
                    src={Convenient}
                    alt="Convenient-icon"
                    style={{ padding: "20px 0" }}
                  />
                  <Link href={"/facilities"}>
                    <MenuTypo>{t("Facilities")}</MenuTypo>
                  </Link>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={handleMenuOpen}
                >
                  <Image
                    src={Register}
                    alt="Register-icon"
                    style={{ padding: "20px 0" }}
                  />
                  <Link href={"/guest"}>
                    <MenuTypo>{t("Guest")}</MenuTypo>
                  </Link>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={handleMenuOpen}
                >
                  <Image
                    src={Heart}
                    alt="Heart-icon"
                    style={{ padding: "20px 0" }}
                  />
                  <Link href={"/makers"}>
                    <MenuTypo>{t("Makers")}</MenuTypo>
                  </Link>
                </div>
              </HeaderSide>
            </header>
          </SideMenuWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideMenu;
