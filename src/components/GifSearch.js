import React, { useState } from 'react';

function GifSearch({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="gifSearch">Enter your Giphy search:</label>
        <input
          type="text"
          id="gifSearch"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
}

export default GifSearch;
