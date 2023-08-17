import React from "react";

function Song(props) {
    return (
        <div className="Song">
            <h3>{props.song}</h3>{/* Recibe una cancion y retorna un formato con la info de la cancion */}
            <p>{props.artist}</p>
        </div>
    );
}

export default Song;