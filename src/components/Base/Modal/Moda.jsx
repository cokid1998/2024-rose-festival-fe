import {
  ModalWrapper,
  ModalBox,
  TypoWrapper,
  Tag,
  Body,
  LabelWrapper,
} from "@src/components/Base/Modal/Modal.styled";
import Close from "@public/svg/Close.svg";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "next-i18next";

const Modal = ({ curEvent, handleModal, isModal }) => {
  const { t } = useTranslation();
  return (
    <AnimatePresence>
      {isModal && (
        <ModalWrapper onClick={handleModal}>
          <ModalBox
            initial={{
              transform: "translate(-50%,-50%) scale(0)",
              opacity: 0,
            }}
            animate={{
              transform: "translate(-50%,-50%) scale(1)",
              opacity: 1,
            }}
            exit={{
              transform: "translate(-50%,-50%) scale(0)",
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={Close}
              alt="close"
              style={{
                position: "absolute",
                top: 15,
                right: 15,
              }}
              onClick={handleModal}
            />
            <TypoWrapper>
              <LabelWrapper>
                <Tag>{t("EventModal")}</Tag>&nbsp;:&nbsp;
                <Body>{t(curEvent.title)}</Body>
              </LabelWrapper>
              <LabelWrapper>
                <Tag>{t("EventModalTime")}</Tag>&nbsp;:&nbsp;
                <Body>{t(curEvent.date)}</Body>
              </LabelWrapper>
              <LabelWrapper>
                <Tag>{t("EventModalPlace")}</Tag>&nbsp;:&nbsp;
                {t(curEvent.place)}
              </LabelWrapper>
            </TypoWrapper>
          </ModalBox>
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default Modal;
