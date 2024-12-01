import { useState, useEffect } from "react";
import { fetchComics } from "../services/api";
import ComicCard from "../components/ComicCard";
import Pagination from "../components/Pagination";

import "../pages.css";

function Comics() {
  const [comics, setComics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadComics = async () => {
      const data = await fetchComics(currentPage);
      setComics(data.results);
    };
    loadComics();
  }, [currentPage]);

  return (
    <div>
      {/* Pagination affichée en haut */}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Grille des comics */}
      <div className="comic-grid">
        {comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>

      {/* Pagination affichée en bas */}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Comics;
