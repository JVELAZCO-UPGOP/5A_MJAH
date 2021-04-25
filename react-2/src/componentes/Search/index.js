import React from 'react';
import "./Search.css";

function Search(props) {
    return (
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
    );
}

export default Search;


