import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {

  const [searchFieldQuery, setSearchFieldQuery] = useState("");
  const [result, setResult] = useState([]);


  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchFieldQuery !== "" && searchFieldQuery !== undefined && searchFieldQuery !== null) {
      await axios.get(`http://localhost:4000/movies?query=${searchFieldQuery}`)
        .then((response) => {
          setResult(response.data);
        })
        .catch(() => {
          alert("Requested movie was not found")
        })
    }
  }

  return (
    <div>
      <input
        className="search-input"
        name="search"
        onChange={(e) => setSearchFieldQuery(e.target.value)}
        value={searchFieldQuery}
      />

      <button
        className="search-button"
        onClick={handleSearch}
      >
        Search
      </button>

      <div>
        {result.map(d =>
          <p>{d.title}</p>
          // <button>Add to Library</button>
        )}
      </div>
    </div>
  );
}

export default Search;
