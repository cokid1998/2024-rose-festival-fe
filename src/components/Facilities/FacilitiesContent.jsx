import {
  FacilitiesContentWrapper,
  IconTypoWrapper,
} from "@src/components/Facilities/Facilities.styled";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const FacilitiesContent = ({ item, curCategory, setCurCategory }) => {
  const { t } = useTranslation();
  const handleCategory = () => {
    if (item.title === curCategory) {
      setCurCategory("");
    } else {
      setCurCategory(item.title);
    }
  };
  return (
    <FacilitiesContentWrapper
      onClick={handleCategory}
      curCategory={curCategory}
      itemCategory={item.title}
    >
      <IconTypoWrapper>
        <Image
          src={item.title === curCategory ? item.onIcon : item.offIcon}
          alt={`${item.title}-icon`}
        />
        {t(item.title)}
      </IconTypoWrapper>
    </FacilitiesContentWrapper>
  );
};
export default FacilitiesContent;
