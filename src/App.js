import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import PlayList from './components/PlayList/PlayList';
import React, {useEffect, useState} from "react";

function App() {
    const [accessToken, setAccessToken] = useState('');
    const [value, setValue] = useState('');

    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [trackID, setTrackID] = useState([]);
    const [selectedTracks, setSelectedTracks] = useState([]);

    const CLIENT_ID = "530f244a6ae54b919f96cb7176d1c79e";
    const CLIENT_SECRET ='1860e439d2eb4b2a8047523b42f83dfe';
    const BASE_URL = 'https://api.spotify.com/v1';

    useEffect(() => {

        let authParameters = {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        };

        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(results => results.json())
            .then(data => setAccessToken(data.access_token))
    }, []);

    async function search() {
        console.log(`Searching for ${value}`);
        let trackParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            }
        }
        await fetch( BASE_URL + '/search?q=' + value + '&type=track', trackParameters)
            .then(response => response.json())
            .then(data => {
                let items = data.tracks.items;

                items.map(element => setArtists(prevArtists => [...prevArtists, element.artists[0].name]));

                items.map(element => setAlbums(prevAlbums => [...prevAlbums, element.album.name]));

                items.map(element => setTracks(prevTracks => [...prevTracks, element.name]));

                items.map(element => setTrackID(prevTracksID => [...prevTracksID, element.id]));
            });
    }
    const handleChange = ( { target } ) => setValue(target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        setValue('');
        setTracks([]);
        setArtists([]);
        setAlbums([]);
    }
    const addSelectedTracks = ( newItem ) => setSelectedTracks(prevItems => [...prevItems, newItem]);

  return (
    <>
      <header><h1>ja<span>mmm</span>ing</h1> </header>
      <SearchBar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          search={search}
          value={value}
      />
      <section>
          <SearchResults
              tracks={tracks}
              albums={albums}
              artists={artists}
              addSelectedTracks={addSelectedTracks}
              trackID={trackID}
          />
          <PlayList
              selectedTracks={selectedTracks}
          />
      </section>
    </>
  );
}

export default App;
