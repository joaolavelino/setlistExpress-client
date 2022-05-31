import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SongCard from "../cards/SongCard";
import setlist from "../../service/db.json";
import { AiOutlineClose } from "react-icons/ai";

const SongList = () => {
  const [songs, setSongs] = useState(null);
  const [artists, setArtists] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSongs(songArray);
  }, []);

  useEffect(() => {
    setArtists(songsByArtist);
  }, [songs]);

  const songArray = setlist.setlist;
  // console.log(setlist);
  // const songArray = [
  //   { title: "Bad", artist: "U2" },
  //   { title: "Kite", artist: "U2" },
  //   { title: "Where the streets have no name", artist: "U2" },
  //   { title: "Hurt", artist: "Jhonny Cash" },
  //   { title: "Ring of Fire", artist: "Jhonny Cash" },
  //   { title: "The Thrill is Gone", artist: "BB King" },
  //   { title: "Hotel California", artist: "The Eagles" },
  //   { title: "Under Pressure", artist: "Queen" },
  //   { title: "Somebody to Love", artist: "Queen" },
  //   { title: "Strutter", artist: "Kiss" },
  // ];

  const songsByArtist = () => {
    const artistArray = [];
    songs &&
      songs.forEach((song) => {
        if (!artistArray.includes(song.artist)) {
          artistArray.push(song.artist);
          artistArray.sort();
        } else return;
      });
    // console.log(artistArray);
    return artistArray;
  };

  const showSongsByArtist = (artist) => {
    const byArtist = songs.filter((e) => e.artist === artist);
    // console.log(byArtist);
    return byArtist.map((item, index) => (
      <SongCard key={`byartist${index}`} song={item} />
    ));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length > 0) {
      let filteredSongs = [];
      songArray.forEach((song) => {
        let title = song.title.toLowerCase();
        let artist = song.artist.toLowerCase();
        let query = search.toLowerCase();
        if (title.includes(query) || artist.includes(query)) {
          filteredSongs.push(song);
        }
      });
      console.log(filteredSongs);
      setSongs(filteredSongs);
    } else {
      setSongs(songArray);
    }
  }, [search]);

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <StyledSongList>
      <div className="search">
        <h3>SEARCH</h3>
        <input type="text" value={search} onChange={handleChange} />
        <button className="input" onClick={clearSearch}>
          <AiOutlineClose />
        </button>
      </div>
      {artists && (
        <>
          {artists.map((item) => (
            <div className="artist" key={`${item}`}>
              <h2 className="artist-name">{item}</h2>
              <div className="cards">{showSongsByArtist(item)}</div>
            </div>
          ))}
        </>
      )}
    </StyledSongList>
  );
};

const StyledSongList = styled.section`
  width: 100%;
  min-width: 300px;
  margin: 2rem auto 0;
  padding: 0rem;
  text-align: center;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .search {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      margin: 0 0 0 1rem;
      flex-grow: 1;
    }
  }

  .artist {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: bold;
    .artist-name {
      font-weight: bold;
      text-transform: uppercase;
    }
    .cards {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      gap: 1rem;
      @media screen and (max-width: 500px) {
        flex-flow: column nowrap;
      }
    }
  }
`;

export default SongList;
