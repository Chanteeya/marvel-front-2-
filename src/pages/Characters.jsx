import { useState, useEffect } from "react";
import { fetchCharacters } from "../services/api";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";

import "../pages.css";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadCharacters = async () => {
      const data = await fetchCharacters(currentPage);
      setCharacters(data.results);
    };
    loadCharacters();
  }, [currentPage]);

  return (
    <div>
      {/* Pagination affichée juste après le navbar */}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Grille des personnages */}
      <div className="character-grid">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Characters;
