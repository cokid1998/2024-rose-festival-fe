import {
  MapWrapper,
  PinWrapper,
} from "@src/components/Facilities/Facilities.styled";
import Image from "next/image";
import PinIcon from "@public/images/facilities/Pin.png";
import { AnimatePresence } from "framer-motion";
import MapImage from "@public/images/facilities/Map.png";
const Map = ({ curCategory }) => {
  const getPinPosition = (curCategory) => {
    switch (curCategory) {
      case "Parking":
        return {
          x: 3,
          y: 10,
        };
      case "Toilet":
        return {
          x: 215,
          y: 150,
        };
      case "Convenience":
        return {
          x: 215,
          y: 150,
        };
      case "Cafe":
        return {
          x: 215,
          y: 150,
        };
      case "PhotoZone":
        return {
          x: 275,
          y: 230,
        };
      case "Rose1":
        return {
          x: 50,
          y: 30,
        };
      case "Rose2":
        return {
          x: 220,
          y: 220,
        };
      case "Rose3":
        return {
          x: 10,
          y: 90,
        };
    }
  };

  return (
    <MapWrapper>
      <Image src={MapImage} fill alt="map-image" />

      <AnimatePresence>
        {curCategory && (
          <PinWrapper
            initial={{
              x: 150,
              y: 150,
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
            <Image src={PinIcon} alt="Pin-icon" width={56} height={55} />
          </PinWrapper>
        )}
      </AnimatePresence>
    </MapWrapper>
  );
};

export default Map;
