import React from "react";
import './SearchBar.css'
function SearchBar( { handleSubmit, search, handleChange, value } ) {

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Search"></label>
            <input
                id="Search"
                name="Search"
                type="text"
                value={value}
                onChange={handleChange}
            />
            <button type="submit" onClick={search}>
                Search
            </button>
        </form>
    );
}

export default SearchBar;