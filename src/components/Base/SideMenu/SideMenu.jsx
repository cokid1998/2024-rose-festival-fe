import { SideMenuWrapper } from "@src/components/Base/SideMenu/SideMenu.styled";
import { useEffect } from "react";
import Close from "@public/svg/Close.svg";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import Language from "@public/svg/Language.svg";
import { HeaderWrapper, IconMenuWrapper, HeaderLogo } from "../Header/Header.styled";
import Link from "next/link";

const SideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
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
            transition={{
              duration: 0.2,
            }}
          >
            <HeaderWrapper>

            <IconMenuWrapper>
            <Image src={Close} alt="Close-icon" onClick={handleMenuOpen} />
            
            <Link href={"/"}>
            <HeaderLogo>조선대장미축제</HeaderLogo>
            </Link>

            <Image src={Language} alt="Language-icon" />
            </IconMenuWrapper>

            </HeaderWrapper>

          <header style={{
            width: "100%",
            position: 'absolute',
            top: '213px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>

        <Link href={"/"}>
        <div style={{marginBottom: "20px"}}>메인화면</div>
        </Link>

        <Link href={"/notice"}>
        <div style={{marginBottom: "20px"}}>공지사항</div>
        </Link>

        <Link href={"/notice"}>
        <div style={{marginBottom: "20px"}}>오시는 길</div>
        </Link>

        <Link href={"/facilities"}>
        <div style={{marginBottom: "20px"}}>편의시설 안내</div>
        </Link>

        <Link href={"/"}>
        <div style={{marginBottom: "20px"}}>방명록</div>
        </Link>

        <Link href={"/"}>
        <div style={{marginBottom: "20px"}}>만든이들</div>
        </Link>
          </header>
            
            
          </SideMenuWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideMenu;
