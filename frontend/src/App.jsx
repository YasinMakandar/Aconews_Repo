import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import Pagination from './components/Pagination';
import SkeletonCard from './components/SkeletonCard';

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
      <Navbar
        categories={categories}
        category={category}
        handleCategoryChange={handleCategoryChange}
        country={country}
        handleCountryChange={handleCountryChange}
        language={language}
        handleLanguageChange={handleLanguageChange}
        handleSearch={handleSearch}
      />

      <div className='flex flex-col justify-center items-center'>
        {loading ? (
          <div className="mt-20 p-4">
            {[...Array(10)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className=" mt-[9rem] mb-[2rem] max-md:mt-[12rem] gap-4 p-4">
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
    </div>
  );
};

export default App;
