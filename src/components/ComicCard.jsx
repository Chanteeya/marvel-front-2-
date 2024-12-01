function ComicCard({ comic }) {
  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorited = favorites.some((fav) => fav.id === comic.id);

    if (isFavorited) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== comic.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      localStorage.setItem("favorites", JSON.stringify([...favorites, comic]));
    }
  };

  return (
    <div>
      <img
        src={comic.thumbnail.path + "/portrait_fantastic.jpg"}
        alt={comic.title}
      />
      <h3>{comic.title}</h3>
      <button onClick={handleFavorite}>Favori</button>
    </div>
  );
}

export default ComicCard;
