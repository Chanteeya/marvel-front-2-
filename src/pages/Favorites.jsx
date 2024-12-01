import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import ComicCard from "../components/ComicCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h1>Mes Favoris</h1>
      <div className="favorites-list">
        {favorites.map((item) =>
          item.thumbnail ? (
            <CharacterCard key={item.id} character={item} />
          ) : (
            <ComicCard key={item.id} comic={item} />
          )
        )}
      </div>
    </div>
  );
}

export default Favorites;
