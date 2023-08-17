import React from "react";
import './Song.css'
function Song( { artist, track, album } ) {
    return (
        <div className="Song">
            <h3>{track}</h3>
            <p>{artist} | {album}</p>
        </div>
    );
}

export default Song;