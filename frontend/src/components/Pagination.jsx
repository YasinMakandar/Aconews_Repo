const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);  // Increment the page number correctly
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);  // Decrement the page number correctly
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4 my-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg ${
          currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-black"
        } text-white`}
      >
        Prev
      </button>
      <span className="flex items-center justify-center">Page {currentPage} of {totalPages}</span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="bg-black text-white p-2 rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
