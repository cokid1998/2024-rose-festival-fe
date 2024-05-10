import { useEffect, useState } from "react";
import {
  HeaderWrapper,
  IconMenuWrapper,
  HeaderLogo,
  ChangeLanguageContainer,
} from "@src/components/Base/Header/Header.styled";
import { useTranslation } from "next-i18next";
import Menu from "@public/svg/Menu.svg";
import MenuBlack from "@public/svg/MenuBlack.svg";
import Language from "@public/svg/Language.svg";
import Image from "next/image";
import Link from "next/link";
import ChangeLanguage from "@src/components/Base/Header/ChangeLanguage";
import BlackLanguage from "@public/svg/LanguageBlack.svg";

const Header = ({ isMenuOpen, language, setLanguage, setIsMenuOpen }) => {
  const { t } = useTranslation();
  const [isTop, setIsTop] = useState(true);
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    if (position === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [position]);
  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleToggle = () => {
    setLanguage((prev) => !prev);
  };

  return (
    <HeaderWrapper isTop={isTop} isMenuOpen={isMenuOpen}>
      <IconMenuWrapper>
        <Image
          src={isTop ? Menu : MenuBlack}
          alt="Menu-icon"
          onClick={handleMenuOpen}
        />
        <Link href={"/"}>
          <HeaderLogo isTop={isTop}>{t("HeaderTitle")}</HeaderLogo>
        </Link>

        <ChangeLanguageContainer onClick={handleToggle}>
          <Image src={isTop ? Language : BlackLanguage} alt="Language-icon" />
          {language && <ChangeLanguage />}
        </ChangeLanguageContainer>
      </IconMenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
