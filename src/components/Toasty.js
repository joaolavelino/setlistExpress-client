import React from "react";
import styled from "styled-components";

const Toasty = ({ error }) => {
  return (
    <StyledToasty className={`${error.status ? "" : "hidden"}`}>
      <p>{error.message}</p>
    </StyledToasty>
  );
};

const StyledToasty = styled.div`
  position: fixed;
  bottom: 0;
  right: 1rem;
  width: 60%;
  max-width: 20rem;
  background-color: darkorange;
  color: white;
  transition: 0.2s;
  pointer-events: none;
  &.hidden {
    transform: translateY(10rem);
    opacity: 0;
    pointer-events: none;
  }
`;

export default Toasty;
