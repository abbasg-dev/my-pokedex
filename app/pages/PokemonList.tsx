import { Link } from "react-router-dom";
import { Pokemon } from "../models/pokemon.model";

interface PokemonListProps {
  pokemons: Pokemon[] | undefined;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  if (!pokemons || pokemons.length === 0) {
    return <div>No Pokemons found</div>;
  }

  return (
    <ul>
      {pokemons.map((pokemon, index) => {
        const urlParts = pokemon["url"].split("/");
        const id = urlParts[urlParts.length - 2];
        return (
          <div key={index}>
            <li key={id}>
              <Link to={`/pokemon/${id}`}>{pokemon.name}</Link>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default PokemonList;
