import React from "react";
import TrackList from "../TrackList/TrackList";
function SearchResults ( { tracks, artists, albums } ) {
    return(
        <div className="songsCotainer">
            <h2>Results</h2>
            <TrackList tracks={tracks} artists={artists} albums={albums}/> {/* Mandar los resultados a TrackList */}
        </div>
    );
}

export default SearchResults;