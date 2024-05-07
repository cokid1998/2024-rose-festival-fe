import { useState } from "react";
import {
  HeaderWrapper,
  IconMenuWrapper,
  HeaderLogo,
  ChangeLanguageContainer,
} from "@src/components/Base/Header/Header.styled";
import { useTranslation } from "next-i18next";
import Menu from "@public/svg/Menu.svg";
import Language from "@public/svg/Language.svg";
import Image from "next/image";
import Link from "next/link";
import ChangeLanguage from "@src/components/Base/Header/ChangeLanguage";

const Header = ({ setIsMenuOpen }) => {
  const { t } = useTranslation();
  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const [language, setLanguage] = useState(false);
  const handleToggle = () => {
    setLanguage((prev) => !prev);
  };
  return (
    <HeaderWrapper>
      <IconMenuWrapper>
        <Image src={Menu} alt="Menu-icon" onClick={handleMenuOpen} />
        <Link href={"/"}>
          <HeaderLogo>{t("HeaderTitle")}</HeaderLogo>
        </Link>

        <ChangeLanguageContainer onClick={handleToggle}>
          <Image src={Language} alt="Language-icon" />
          {language && <ChangeLanguage />}
        </ChangeLanguageContainer>
      </IconMenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
