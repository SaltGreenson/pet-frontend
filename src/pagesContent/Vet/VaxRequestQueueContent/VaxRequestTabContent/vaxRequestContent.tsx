import React, { useState } from "react";

import { EditModal, PopUp, VaxCard } from "@/components/elements";
import { Paragraph } from "@/components/common";
import { VaxCardType } from "@/components/elements/VaxCard/VaxCard";
import VaxRequestUpdateContent from "./vaxRequestUpdateContent";

import { Colors } from "@/styles/colors";
import { VaxCardContainer, ViewMoreTitle } from "../VaxRequestQueue-styles";

interface VaxRequestContentProps {
  vaxCardArray: VaxCardType[];
}

const VaxRequestContent = ({ vaxCardArray }: VaxRequestContentProps) => {
  const [isActivePopUp, setIsActivePopUp] = useState(false);
  return (
    <VaxCardContainer>
      <Paragraph color={Colors.LABEL_COLOR}>Month 21, 2021</Paragraph>
      {vaxCardArray.map((card: VaxCardType) => (
        <VaxCard
          {...card}
          key={card.id}
          onUpdate={() => setIsActivePopUp(!isActivePopUp)}
          onSend={() => console.log("Send")}
        />
      ))}
      <ViewMoreTitle>View More Requests</ViewMoreTitle>
      {isActivePopUp && (
        <PopUp setActive={setIsActivePopUp}>
          <EditModal
            title={"Update"}
            subTitle={"Personal"}
            buttonTitle={"Submit"}
            setActive={setIsActivePopUp}
            onSubmit={() => {
              "stub";
            }}
          >
            <VaxRequestUpdateContent />
          </EditModal>
        </PopUp>
      )}
    </VaxCardContainer>
  );
};

export default VaxRequestContent;
