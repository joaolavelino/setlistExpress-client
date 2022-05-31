import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const SongDisplay = () => {
  const { title, artist, key, lyrics } = useSelector(
    (state) => state.songs.song
  );

  return (
    <StyledSongDisplay>
      <div className="song-header">
        <div className="info">
          <h4 className="title">{title}</h4>
          <h5 className="artist">
            {artist} - Key: {key}
          </h5>
        </div>
        <div className="buttons">
          <Link to="/song/edit">
            <button className="edit gray">
              <AiFillEdit />
            </button>
          </Link>
        </div>
      </div>
      <div className="song-lyrics">
        <textarea disabled name="" id="" value={lyrics} />
      </div>
    </StyledSongDisplay>
  );
};

const StyledSongDisplay = styled.section`
  width: 100%;
  max-width: 720px;
  height: 100vh;
  padding: 1.5rem 10px;
  margin: 0 auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;

  .song-header {
    height: auto;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;

    .edit {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  .song-lyrics {
    flex-grow: 1;
  }

  textarea {
    background-color: transparent;
    border: none;
    color: white;
    height: 100%;
    width: 100%;
    font-size: 1rem;
    padding-bottom: 2rem;
    padding-top: 0;
    resize: none;
    font-family: monospace;
  }

  .title {
    font-size: 1.2rem;
    color: darkorange;
    line-height: 1.2rem;
    text-transform: uppercase;
  }
`;

export default SongDisplay;
