import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = async (query) => {
    try {
      const apiKey = 'YQuqSf2WrqEsPqzZwfwOFcRgWGOKl0JO'; 
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch gifs');
      }

      const data = await response.json();
      setGifs(data.data.slice(0, 3));
    } catch (error) {
      console.error('Error fetching gifs:', error.message);
    }
  };

  return (
    <div>
      <GifSearch onSubmit={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
