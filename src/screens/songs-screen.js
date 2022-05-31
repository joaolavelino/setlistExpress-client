import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import HeaderLogged from "../components/Header/HeaderLogged";
import SongList from "../components/songList/SongList";

const SongsScreen = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <HeaderLogged />
      <StyledSongs>
        <SongList />
      </StyledSongs>
    </>
  );
};

const StyledSongs = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SongsScreen;
