import React from 'react';
import SearchBar from './SearchBar';
import Line from './Line';

const Navbar = ({ categories, category, handleCategoryChange, country, handleCountryChange, language, handleLanguageChange, handleSearch }) => {
  return (
    <div className="m-0 p-0">
      <div className="top-0 shadow-lg z-10 bg-white fixed w-full h-auto md:h-[7.7rem]">
        <div className="flex flex-col gap-4 justify-center items-center">
          
          {/* Logo section */}
          <div className="flex items-center justify-between w-full px-4 md:justify-center">
            <img className="w-24 pt-3 md:w-28" src="Aco.svg" alt="aconews" />
            <img className="w-5 mt-2 md:w-6" src="globe.png" alt="globe" />
          </div>
          
          <Line />

          {/* Filters and SearchBar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full px-4">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              <span className="font-bold">Filters:</span>
              
              <select
                onChange={handleCategoryChange}
                value={category}
                className="p-2 border rounded-lg"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>

              <select
                onChange={handleCountryChange}
                value={country}
                className="p-2 border rounded-lg"
              >
                <option value="">All Countries</option>
                <option value="us">United States</option>
                <option value="in">India</option>
                <option value="gb">United Kingdom</option>
              </select>

              <select
                onChange={handleLanguageChange}
                value={language}
                className="p-2 border rounded-lg"
              >
                <option value="">All Languages</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>

            <div className="w-full md:w-auto">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>

          <Line />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
