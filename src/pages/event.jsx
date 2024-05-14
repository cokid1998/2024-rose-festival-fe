import Image from "next/image";
import GuestBackImageUrl from "@public/images/guest/guest-back-image.png";
import {
  FacilitiesWrapper,
  FacilitiesGuideTypoWrapper,
  FacilitiesChoiceBox,
} from "@src/components/Facilities/Facilities.styled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Star from "@public/svg/Star.svg";
import car from "@public/svg/event/car.svg";
import artShow from "@public/svg/event/art-show.svg";
import art from "@public/svg/event/art.svg";
import bohyungArt from "@public/svg/event/bohyung-art.svg";
import campain from "@public/svg/event/campain.svg";
import dabang from "@public/svg/event/dabang.svg";
import museum from "@public/svg/event/museum.svg";
import photoZone from "@public/svg/event/photo-zone.svg";
import shadowPhoto from "@public/svg/event/shadow-photo.svg";
import sing from "@public/svg/event/sing.svg";
import snsEvent from "@public/svg/event/sns-event.svg";
import wish from "@public/svg/event/wish.svg";
import dojagi from "@public/svg/event/dojagi.svg";
import EventContent from "@src/components/Event/EventContent";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import EventImage from "@public/images/event/event-plan.png";
import {
  EventWrapper,
  EventContainer,
  EventBackImageWrapper,
} from "@src/components/Event/event.styled";
import Modal from "@src/components/Base/Modal/Moda";

const Event = () => {
  const { t } = useTranslation();
  const [curEvent, setCurEvent] = useState("");
  const [isModal, setIsModal] = useState(false);
  const handleModal = () => {
    setIsModal((prev) => !prev);
  };

  const eventInfo = [
    {
      title: "Event1Title",
      icon: car,
      date: "Event1Time",
      place: "Event1Place",
    },
    {
      title: "Event2Title",
      icon: art,
      date: "Event2Time",
      place: "Event2Place",
    },
    {
      title: "Event4Title",
      icon: photoZone,
      date: "Event4Time",
      place: "Event4Place",
    },
    {
      title: "Event5Title",
      icon: dojagi,
      date: "Event5Time",
      place: "Event5Place",
    },
    {
      title: "Event6Title",
      icon: artShow,
      date: "Event6Time",
      place: "Event6Place",
    },
    {
      title: "Event7Title",
      icon: campain,
      date: "Event7Time",
      place: "Event7Place",
    },
    {
      title: "Event8Title",
      icon: museum,
      date: "Event8Time",
      place: "Event8Place",
    },
    {
      title: "Event9Title",
      icon: wish,
      date: "Event9Time",
      place: "Event9Place",
    },
    {
      title: "Event10Title",
      icon: shadowPhoto,
      date: "Event10Time",
      place: "Event10Place",
    },
    {
      title: "Event11Title",
      icon: sing,
      date: "Event11Time",
      place: "Event11Place",
    },
    {
      title: "Event12Title",
      icon: dabang,
      date: "Event12Time",
      place: "Event12Place",
    },
    {
      title: "Event13Title",
      icon: bohyungArt,
      date: "Event13Time",
      place: "Event13Place",
    },
    {
      title: "Event14Title",
      icon: snsEvent,
      date: "Event14Time",
      place: "Event14Place",
    },
  ];

  return (
    <EventContainer>
      <Modal curEvent={curEvent} handleModal={handleModal} isModal={isModal} />

      <EventBackImageWrapper>
        <Image
          priority
          src={GuestBackImageUrl}
          alt="facilities-background"
          fill
        />
      </EventBackImageWrapper>

      <EventWrapper>
        <FacilitiesWrapper>
          <FacilitiesGuideTypoWrapper>
            <Image src={Star} alt="star-icon" />
            {t("Event")}
            <Image src={Star} alt="star-icon" />
          </FacilitiesGuideTypoWrapper>
          <div
            style={{
              width: "350px",
              height: "350px",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
              marginBottom: "30px",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <Image src={EventImage} alt="image-plan" fill />
          </div>
          <FacilitiesChoiceBox
            style={{
              rowGap: "18px",
            }}
          >
            {eventInfo.map((item) => {
              return (
                <EventContent
                  key={item.title}
                  item={item}
                  curEvent={curEvent}
                  setCurEvent={setCurEvent}
                  handleModal={handleModal}
                />
              );
            })}
          </FacilitiesChoiceBox>
        </FacilitiesWrapper>
      </EventWrapper>
    </EventContainer>
  );
};

export async function getStaticProps(context) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default Event;
