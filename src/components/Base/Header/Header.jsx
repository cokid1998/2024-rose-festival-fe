import {
  HeaderWrapper,
  IconMenuWrapper,
} from "@src/components/Base/Header/Header.styled";
import Menu from "@public/svg/Menu.svg";
import Language from "@public/svg/Language.svg";
import Image from "next/image";

const Header = ({ setIsMenuOpen }) => {
  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <HeaderWrapper>
      <IconMenuWrapper>
        <Image src={Menu} alt="Menu-icon" onClick={handleMenuOpen} />
        <Image src={Language} alt="Language-icon" />
      </IconMenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
