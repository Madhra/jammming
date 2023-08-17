import React from "react";
import './Song.css'
function Song( { artist, track, album, addSelectedTracks, trackID } ) {
    return (
        <div
            className="Song"
             onClick={() => addSelectedTracks({
                artist: artist,
                track: track,
                album: album,
                id: trackID})}
        >
            <h3>{track}</h3>
            <p>{artist} | {album}</p>
        </div>
    );
}

export default Song;