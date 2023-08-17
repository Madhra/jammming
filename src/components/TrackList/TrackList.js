import React from "react";
import Song from "../Song/Song";

function TrackList(props) {
    return(
        <div className="TrackList">
            <Song song=''/> {/* Hacer un map de las canciones recibidas y mostrarlas tanto en Results como en Playlist */}
        </div>
    );
}

export default TrackList;