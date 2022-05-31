import React from "react";
import styled from "styled-components";

const ErrorToasty = ({ error }) => {
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  min-width: 5rem;
  height: 3rem;
  max-width: 20rem;
  padding: 1rem 2rem;
  background-color: darkred;
  color: white;
  transition: 0.2s;
  pointer-events: none;

  &.hidden {
    transform: translateY(3rem);
    opacity: 0;
    pointer-events: none;
  }
  p {
    font-family: "Jost", sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export default ErrorToasty;
