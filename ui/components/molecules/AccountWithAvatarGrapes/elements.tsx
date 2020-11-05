import styled from "styled-components/native";
import BaseCardSquare from "../../atoms/Cards/BaseCardSquare";
import FlexWrapper from "../../atoms/Wrappers/FlexWrapper";

export const WrapperRoundedAvatar = styled.View`
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  border-radius: 100%;
  padding: 10px;
`;

export const WrapperCardLabel = styled(BaseCardSquare)`
  border-radius: 40px;
  width: auto;
  height: auto;
  padding:10px;
  position:relative;
  z-index:0;
  top:-10px;
`;

export const WrapperGrapes = styled(FlexWrapper)`
    flex-direction:column;
    align-items:center;
    justify-content:center;
    flex:none;
`;
