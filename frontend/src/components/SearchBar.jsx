import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className=" flex justify-center">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search news..."
        className="p-2 border rounded-full w-[90%]"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-black text-white px-3 py-0 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
