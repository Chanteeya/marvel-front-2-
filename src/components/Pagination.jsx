import "../pages.css";

function Pagination({ currentPage, setCurrentPage }) {
  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Précédent
      </button>
      <span className="pagination-text">Page {currentPage}</span>
      <button
        className="pagination-button"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Suivant
      </button>
    </div>
  );
}

export default Pagination;
