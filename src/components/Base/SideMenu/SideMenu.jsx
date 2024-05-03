import { SideMenuWrapper } from "@src/components/Base/SideMenu/SideMenu.styled";
import { useEffect } from "react";
import Close from "@public/svg/Close.svg";
import Image from "next/image";

const SideMenu = ({ setIsMenuOpen }) => {
  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    // 사이드바가 열렸을 때 스크롤을 막는 코드
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <SideMenuWrapper>
      <Image src={Close} alt="Close-icon" onClick={handleMenuOpen} />
      SideMenu
    </SideMenuWrapper>
  );
};

export default SideMenu;
