import { SideMenuWrapper } from "@src/components/Base/SideMenu/SideMenu.styled";
import { useEffect } from "react";
import Close from "@public/svg/Close.svg";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

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
            <Image src={Close} alt="Close-icon" onClick={handleMenuOpen} />
            SideMenu
          </SideMenuWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideMenu;
