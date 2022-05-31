import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { songInfo } from "../../redux/songsSlice";

const SongCard = ({ song }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectSong = () => {
    console.log(song);
    dispatch(songInfo(song));
    navigate("/song");
  };

  return (
    <StyledSongCard onClick={selectSong}>
      <h2>{song.title}</h2>
    </StyledSongCard>
  );
};

const StyledSongCard = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem 1.5rem;
  border-left: 3px solid darkorange;
  border-right: 3px solid rgba(0, 0, 0, 0);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  flex-grow: 1;
  transition: 200ms;
  cursor: pointer;
  &:hover {
    background-color: rgba(151, 65, 0, 0.5);
    border-left: 10px solid darkorange;
  }
  @media screen and (max-width: 500px) {
    padding: 0.5rem 1rem;
    width: 100%;
  }
`;

export default SongCard;
