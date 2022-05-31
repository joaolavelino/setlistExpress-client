import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ConfirmToasty from "../Toasties/ConfirmToasty";

const SongAddEditForm = ({ action }) => {
  const song = useSelector((state) => state.songs.song);
  const [toasty, setToasty] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [fields, setFields] = useState({
    title: "",
    artist: "",
    key: "",
    lyrics: "",
  });

  useEffect(() => {
    if (action === "edit")
      setFields({
        title: song.title,
        artist: song.artist,
        key: song.key,
        lyrics: song.lyrics,
      });
    if (action === "add")
      setFields({
        title: "",
        artist: "",
        key: "",
        lyrics: "",
      });
  }, [action]);

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <StyledSongAddEditForm>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={fields.title}
          onChange={handleChange}
        />
        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          name="artist"
          id="artist"
          required
          value={fields.artist}
          onChange={handleChange}
        />
        <label htmlFor="artist">Key</label>
        <input
          type="text"
          name="key"
          id="key"
          required
          value={fields.key}
          onChange={handleChange}
        />
        <label htmlFor="lyrics">Lyrics</label>
        <textarea
          name="lyrics"
          id="lyrics"
          cols="30"
          rows="10"
          value={fields.lyrics}
          onChange={handleChange}
        />
        <div className="buttons">
          <button>Confirm</button>
          <button
            type="button"
            className={"gray"}
            onClick={() => setToasty(true)}
          >
            {action === "edit" ? "Delete" : "Cancel"}
          </button>
        </div>
      </StyledSongAddEditForm>
      <ConfirmToasty
        toasty={toasty}
        setToasty={setToasty}
        setConfirm={setConfirm}
      />
    </>
  );
};

const StyledSongAddEditForm = styled.form`
  flex-grow: 1;
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  textarea {
    resize: auto;
    height: calc(100vh - 80px);
    padding: 1rem;
    font-family: monospace;
    font-size: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding-top: 1rem;
  }
`;

export default SongAddEditForm;
