import React, { useState } from "react";
import './PlayList.css';
import Song from "../Song/Song";

function PlayList( { selectedTracks }) {
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
            {selectedTracks.map(element =>{
                    const { artist, track, album } = element;
                    return <Song
                        track={track}
                        artist={artist}
                        album={album}
                    />
            })
            }
            <button type="submit"> 
                Save to Spotify
            </button>

        </form>
    );
}

export default PlayList;