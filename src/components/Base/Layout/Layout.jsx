import Header from "@src/components/Base/Header/Header";
import SideMenu from "@src/components/Base/SideMenu/SideMenu";
import { LayoutWrapper } from "@src/components/Base/Layout/Layout.styled";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(false);

  return (
    <LayoutWrapper>
      <SideMenu
        language={language}
        setLanguage={setLanguage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Header
        language={language}
        setLanguage={setLanguage}
        setIsMenuOpen={setIsMenuOpen}
      />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
