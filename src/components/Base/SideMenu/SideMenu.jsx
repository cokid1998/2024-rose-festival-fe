import { SideMenuWrapper, HeaderSide, First, Second } from "@src/components/Base/SideMenu/SideMenu.styled";
import { useEffect } from "react";
import Close from "@public/svg/Close.svg";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import Language from "@public/svg/Language.svg";
import { HeaderWrapper, IconMenuWrapper, HeaderLogo } from "../Header/Header.styled";
import Link from "next/link";
import Main from "@public/svg/Main.svg";
import Booth from "@public/svg/Booth.svg";
import Convenient from "@public/svg/Convenient.svg";
import Map from "@public/svg/Map.svg";
import Register from "@public/svg/Register.svg";
import Sound from "@public/svg/Sound.svg";
import Heart from "@public/svg/Heart.svg";

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
        
        <HeaderSide>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src={Main} alt="Main-icon" style={{ marginBottom: "40px", marginRight: "10px" }} />
            <Link href={"/"}>
                <div style={{marginBottom: "40px"}}>메인화면</div>
            </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src={Sound} alt="Sound-icon" style={{ marginBottom: "40px", marginRight: "10px" }} />
            <Link href={"/notice"}>
                <div style={{marginBottom: "40px"}}>공지사항</div>
            </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
        <Image src={Map} alt="Map-icon" style={{ marginBottom: "40px", marginRight: "10px" }} />
        <Link href={"/notice"}>
        <div style={{marginBottom: "40px"}}>오시는 길</div>
        </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
        <Image src={Convenient} alt="Convenient-icon" style={{ marginBottom: "40px", marginRight: "10px" }} />
        <Link href={"/facilities"}>
        <div style={{marginBottom: "40px"}}>편의시설 안내</div>
        </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
        <Image src={Register} alt="Register-icon" style={{ marginBottom: "40px", marginRight: "10px" }} />
        <Link href={"/"}>
        <div style={{marginBottom: "40px"}}>방명록</div>
        </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
        <Image src={Heart} alt="Heart-icon" style={{ marginBottom: "40px", marginRight: "10px" }} />
        <Link href={"/"}>
        <div style={{marginBottom: "40px"}}>만든이들</div>
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
