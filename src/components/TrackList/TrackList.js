import React from "react";
import Song from "../Song/Song";
import './TrackList.css'

function TrackList( { tracks, artists, albums, addSelectedTracks, trackID } ) {
    return(
        <div className="TrackList">
            {tracks ? (tracks.map((track, index) => {
                return <Song
                    track={track}
                    artist={artists[index]}
                    album={albums[index]}
                    addSelectedTracks={addSelectedTracks}
                    trackID={trackID[index]}
                />
            })) : null}
        </div>
    );
}

export default TrackList;