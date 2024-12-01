import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCharacterDetails } from "../services/api";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const loadCharacterDetails = async () => {
      const data = await fetchCharacterDetails(id);
      setCharacter(data);
    };
    loadCharacterDetails();
  }, [id]);

  if (!character) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img
        src={character.thumbnail.path + "/portrait_uncanny.jpg"}
        alt={character.name}
      />
      <p>{character.description || "Pas de description disponible."}</p>
      <h2>Comics liés :</h2>
      <ul>
        {character.comics.items.map((comic, index) => (
          <li key={index}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetails;
