import {
  EventContentWrapper,
  TitleWrapper,
} from "@src/components/Event/event.styled";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const EventContent = ({ item, setCurEvent, handleModal }) => {
  const { t } = useTranslation();
  const handleEvent = () => {
    setCurEvent(item);
    handleModal();
  };
  return (
    <>
      <EventContentWrapper onClick={handleEvent}>
        <Image src={item.icon} width={40} height={40} alt="event-icon" />
        <TitleWrapper>{t(item.title)}</TitleWrapper>
      </EventContentWrapper>
    </>
  );
};

export default EventContent;
