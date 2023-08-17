import React, { useState } from "react";
import TrackList from "../TrackList/TrackList";
import './PlayList.css';

function PlayList() {
    const [value, setValue] = useState('');

    const handleChange = ( { target } ) => setValue(target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="PlayList"><h2>Playlist Name</h2></label>
            <input
                id="PlayList"
                name="PlayList"
                type="text"
                value={value}
                onChange={handleChange}
            />
            <TrackList />  {/* Mandar los resultados a TrackList */}
            <button type="submit"> 
                Save to Spotify
            </button>
        </form>
    );
}

export default PlayList;