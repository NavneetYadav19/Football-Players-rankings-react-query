import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
   
    navigate(`/players/${encodeURIComponent(query)}`);
  };

  return (
    <div className="p-4 w-[250px] md:w-[100%]">
      <form className='flex' onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search players..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <button type="submit" className="ml-2 px-4 py-2 hover:text-gray-800 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
