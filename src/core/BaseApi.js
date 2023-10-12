export const API_END_POINT = "https://pokeapi.co/api/v2/";
export const IMG_END_POINT =
	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";

export const request = async (url, options = {}) => {
	try {
		const fullUrl = `${API_END_POINT}${url}`;
		const response = await fetch(fullUrl, options);

		if (response.ok) {
			return await response.json();
		}
		throw new Error("API 호출에 실패했습니다.");
	} catch (e) {
		console.error(e.message);
	}
};
