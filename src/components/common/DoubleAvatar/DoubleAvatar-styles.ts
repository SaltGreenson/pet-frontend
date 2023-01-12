import styled from "styled-components";

import { Colors } from "@/styles/colors";

export type AvatarProps = {
  avatarBackground: string;
};

export const AvatarsContainer = styled.div`
  height: 100px;
`;

export const FirstAvatar = styled.div<AvatarProps>`
  background: no-repeat
    url(${({ avatarBackground = Colors.MEDIUM_GREY }) => avatarBackground})
    center/100%;
  height: 88px;
  width: 88px;
  border-radius: 100%;
  object-fit: cover;
`;

export const SecondAvatar = styled(FirstAvatar)`
  position: relative;
  height: 56px;
  width: 56px;
  left: 44px;
  bottom: 53px;
  background-color: ${Colors.WHITE};
  border: 4px solid ${Colors.WHITE};
`;
