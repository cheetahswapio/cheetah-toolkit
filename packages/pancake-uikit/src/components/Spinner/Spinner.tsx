import React from "react";
import styled, { keyframes } from "styled-components";
import CheetahIcon from "./CheetahIcon";
import { SpinnerProps } from "./types";

const scale = keyframes`
  0% {
    transform: scale(.8);
  }
  100% {
    transform: scale(1.5);
  }
`;

const Container = styled.div`
  position: relative;
`;

const RotatingCheetahIcon = styled(CheetahIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${scale} 1.5s alternate infinite ease-in;
  transform: translate3d(0, 0, 0);
`;


const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingCheetahIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
