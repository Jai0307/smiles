import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 50px;
`;
const Dot = styled.div`
  background-color: purple;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s linear infinite;
`;

const LoadingComponent: React.FC<{}> = ({}) => {
    return (
      <DotWrapper>
        <Dot style={{animationDelay:'0s'}} />
        <Dot style={{animationDelay:'0.1s'}}  />
        <Dot style={{animationDelay:'0.2s'}}  />
      </DotWrapper>
    )
}
export default LoadingComponent