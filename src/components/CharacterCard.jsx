function CharacterCard({ character }) {
  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorited = favorites.some((fav) => fav.id === character.id);

    if (isFavorited) {
      const updatedFavorites = favorites.filter(
        (fav) => fav.id !== character.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, character])
      );
    }
  };

  return (
    <div>
      <img
        src={character.thumbnail.path + "/portrait_fantastic.jpg"}
        alt={character.name}
      />
      <h3>{character.name}</h3>
      <button onClick={handleFavorite}>Favori</button>
    </div>
  );
}

export default CharacterCard;
