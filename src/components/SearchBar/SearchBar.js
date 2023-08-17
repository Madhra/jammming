import React, { useState, useEffect } from "react";
import './SearchBar.css'
function SearchBar() {
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [accesToken, setAccessToken] = useState('')
    const [value, setValue] = useState('');

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
            .then(data => setAccessToken(data.access_token));
    }, []);

    async function search() {
        console.log(`Searching for ${value}`);
        let trackParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accesToken,
            }
        }
        let track_ID = await fetch( BASE_URL+ '/search?q=' + value + '&type=track', trackParameters)
            .then(response => response.json())
            .then(data => {
                let items = data.tracks.items;

                items.map(element => {
                        setArtists(prevArtists => [...prevArtists, element.artists[0].name]);
                    });

                items.map(element => {
                        setAlbums(prevAlbums => [...prevAlbums, element.album.name]);
                    });

                items.map(element =>{
                   setTracks(prevTracks => [...prevTracks, element.name]);
                });
            });
    }
    const handleChange = ( { target } ) => setValue(target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Search"></label>
            <input
                id="Search"
                name="Search"
                type="text"
                value={value}
                onChange={handleChange}
            />
            <button type="submit" onClick={search}>
                Search
            </button>
        </form>
    );
}

export default SearchBar;