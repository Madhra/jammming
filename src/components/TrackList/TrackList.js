import React from "react";
import Song from "../Song/Song";

function TrackList( { tracks, artists, albums } ) {
    return(
        <div className="TrackList">
            {tracks ? (tracks.map((track, index) => {
                return <Song track={track} artist={artists[index]} album={albums[index]}/>
            })) : null}
        </div>
    );
}

export default TrackList;