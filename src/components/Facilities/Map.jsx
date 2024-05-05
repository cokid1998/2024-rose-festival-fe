import {
  MapWrapper,
  PinWrapper,
} from "@src/components/Facilities/Facilities.styled";
import Image from "next/image";
import PinIcon from "@public/images/facilities/Pin.png";
import { AnimatePresence } from "framer-motion";

const Map = ({ curCategory }) => {
  const getPinPosition = (curCategory) => {
    switch (curCategory) {
      case "주차장":
        return {
          x: 30,
          y: 30,
        };
      case "화장실":
        return {
          x: 100,
          y: 200,
        };
      case "편의점":
        return {
          x: 50,
          y: 30,
        };
      case "카페1":
        return {
          x: 20,
          y: 0,
        };
      case "카페2":
        return {
          x: 170,
          y: 90,
        };
      case "포토존":
        return {
          x: 170,
          y: 220,
        };
      case "장미1":
        return {
          x: 50,
          y: 30,
        };
      case "장미2":
        return {
          x: 220,
          y: 220,
        };
      case "장미3":
        return {
          x: 10,
          y: 90,
        };
    }
  };

  return (
    <MapWrapper>
      <AnimatePresence>
        {curCategory && (
          <PinWrapper
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
            }}
            animate={{
              x: getPinPosition(curCategory).x,
              y: getPinPosition(curCategory).y,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            <Image src={PinIcon} alt="Pin-icon" width={56} height={55}></Image>
          </PinWrapper>
        )}
      </AnimatePresence>
    </MapWrapper>
  );
};

export default Map;
