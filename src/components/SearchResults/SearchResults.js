import React from "react";
import TrackList from "../TrackList/TrackList";
import './SearchResults.css'
function SearchResults ( { tracks, artists, albums, addSelectedTracks, trackID } ) {
    return(
        <div className="songsContainer">
            <h2>Tracks</h2>
            <TrackList
                tracks={tracks}
                artists={artists}
                albums={albums}
                addSelectedTracks={addSelectedTracks}
                trackID={trackID}
            />
        </div>
    );
}

export default SearchResults;