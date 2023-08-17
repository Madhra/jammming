import React from "react";
import TrackList from "../TrackList/TrackList";
function SearchResults () {
    return(
        <div className="songsCotainer">
            <h2>Results</h2>
            <TrackList /> {/* Mandar los resultados a TrackList */}
        </div>
    );
}

export default SearchResults;