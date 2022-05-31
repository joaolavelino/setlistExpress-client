import React from "react";
import styled from "styled-components";

const ConfirmToasty = ({ toasty, setToasty, setConfirm }) => {
  return (
    <StyledToasty className={`${toasty ? "" : "hidden"}`}>
      <div>
        <p>Are you sure??</p>
      </div>
      <div className="buttons">
        <button className="gray" onClick={() => setConfirm(true)}>
          Confirm
        </button>
        <button className="gray" onClick={() => setToasty(false)}>
          Cancel
        </button>
      </div>
    </StyledToasty>
  );
};

const StyledToasty = styled.div`
  position: fixed;
  bottom: 0;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: auto;
  min-width: 5rem;
  height: 8rem;
  max-width: 20rem;
  padding: 1rem 2rem;
  background-color: darkred;
  color: white;
  transition: 0.2s;

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

  .buttons {
    display: flex;
    gap: 1rem;
  }
`;

export default ConfirmToasty;
