import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import NewsCard from './components/NewsCard';
import Pagination from './components/Pagination';
import SkeletonCard from './components/SkeletonCard';
import Line from './components/Line';

const App = () => {

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'general', label: 'General' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' }
  ];



  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');  // ISO country code (e.g., 'us', 'in')
  const [language, setLanguage] = useState('');  // Language code (e.g., 'en', 'es')
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    fetchNews(1, keyword, event.target.value, country, language);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    fetchNews(1, keyword, category, event.target.value, language);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    fetchNews(1, keyword, category, country, event.target.value);
  };


  const fetchNews = async (page = 1, keyword = '', category = '', country = '', language = '') => {
    setLoading(true);
    try {
      const response = await axios.get('https://backend-ackonews.vercel.app/news', {
        params: {
          page,
          keyword,
          category,
          country,
          language
        },
      });
      setArticles(response.data.articles);
      setCurrentPage(parseInt(response.data.currentPage, 10));
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(currentPage, keyword);
  }, []);

  const handleSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
    fetchNews(1, searchKeyword); // Reset to page 1 when searching
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      fetchNews(page, keyword);  // Fetch news for the next or previous page
    }
  };


  return (
    <div className=" m-0 p-0">
      <div className="m-0 p-0">
        <div className="top-0 shadow-lg z-10 bg-white fixed w-full h-auto md:h-[16.4%]">

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


      <div className='flex flex-col justify-center items-center'>
       
        {loading ? (
          <div className="mt-20 p-4">
            {[...Array(10)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className=" mt-[6rem] mb-[2rem] max-md:mt-[12rem] gap-4 p-4">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))
            ) : (
              <p className='text-center mb-[19rem] mt-[20rem] '>No articles found.</p>
            )}
          </div>
        )}
      </div>
      <div className='flex flex-col justify-center items-center'>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      {/* <SkeletonCard /> */}
    </div>
  );
};

export default App;
