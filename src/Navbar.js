import SearchResults from "./SearchResults";
import React, { useState } from "react";

const Navbar = ({ blogPosts }) => {
  const [searchQuery, setSearchQuery] = useState();
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Leandru's Music Blog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="searchbar"
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={() => {
                setSearchQuery(document.querySelector("#searchbar").value);
              }}
              data-bs-toggle="collapse"
              data-bs-target={"#search-results"}
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Search
            </button>
          </form>
          <div className="collapse" id="search-results">
            <SearchResults
              blogPosts={blogPosts}
              searchQuery={searchQuery !== null ? searchQuery : "1"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
