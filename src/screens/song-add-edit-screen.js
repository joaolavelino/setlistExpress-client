import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HeaderLogged from "../components/Header/HeaderLogged";
import SongAddEditForm from "../components/SongAddEdit/SongAddEditForm";

const SongAddEditScreen = () => {
  const { action } = useParams();

  const [formAction, setFormAction] = useState(action);

  useEffect(() => {
    setFormAction(action);
  }, []);

  return (
    <>
      <HeaderLogged />
      <StyledSongAddEditScreen>
        <h1>Song {action}</h1>
        <SongAddEditForm action={formAction} />
      </StyledSongAddEditScreen>
    </>
  );
};

const StyledSongAddEditScreen = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
  }
`;

export default SongAddEditScreen;
