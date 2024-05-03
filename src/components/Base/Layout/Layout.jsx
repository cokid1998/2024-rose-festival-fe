import Header from "@src/components/Base/Header/Header";
import SideMenu from "@src/components/Base/SideMenu/SideMenu";
import { LayoutWrapper } from "@src/components/Base/Layout/Layout.styled";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <LayoutWrapper>
      {isMenuOpen ? <SideMenu setIsMenuOpen={setIsMenuOpen} /> : null}
      <Header setIsMenuOpen={setIsMenuOpen} />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
