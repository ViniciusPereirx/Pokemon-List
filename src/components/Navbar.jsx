import React, { useContext } from "react";
import FavoriteContext from "../contexts/FavoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <div>
      <nav>
        <div>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="pokeapi-logo"
            className="navbar-img"
          />
        </div>
        <div>{favoritePokemons.length} ❤️</div>
      </nav>
    </div>
  );
};

export default Navbar;
