import axios from "axios";

export const searchPokemon = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getPokemonData = async (url) => {
  try {
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
};
