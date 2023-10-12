import { request } from "../core/BaseApi";

export const getPokeList = async (offset = 0, limit = 30) => {
	return request(`pokemon?offset=${offset}&limit=${limit}`);
};

export const getPokemonSpecies = async poketmonId => {
	return request(`pokemon-species/${poketmonId}`);
};

export const getPokemonInfo = async poketmonId => {
	return request(`pokemon/${poketmonId}`);
};
