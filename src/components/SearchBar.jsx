import "../Navbar.css";

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Rechercher..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
