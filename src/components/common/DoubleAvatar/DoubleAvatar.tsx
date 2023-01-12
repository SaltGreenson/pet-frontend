import React from "react";

import {
  AvatarsContainer,
  FirstAvatar,
  SecondAvatar,
} from "./DoubleAvatar-styles";

interface DoubleAvatarProps {
  firstAvatarBackground: string;
  secondAvatarBackground: string;
}

const DoubleAvatar = ({
  firstAvatarBackground,
  secondAvatarBackground,
}: DoubleAvatarProps) => (
  <AvatarsContainer>
    <FirstAvatar avatarBackground={firstAvatarBackground} />
    <SecondAvatar avatarBackground={secondAvatarBackground} />
  </AvatarsContainer>
);

export default DoubleAvatar;
