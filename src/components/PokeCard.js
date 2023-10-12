import { IMG_END_POINT } from "../core/BaseApi";
import CardComponent from "../core/CardComponent";
import PokeInfo from "./PokeInfo";

class PokeCard extends CardComponent {
	template() {
		const { pokeId, name } = this.$props.pokemon;

		return `
		    <li class="pokemon_card_container" data-pokemon-id=${pokeId}>
		        <div class="img_container">
		            <div class="img_wrap">
		                <img src='${IMG_END_POINT}${pokeId}.gif' alt='포켓몬 ${name} 이미지'/>
		            </div>
		        </div>
		        <div class="pokemon_card_info${pokeId}"/>
		    </li>
		`;
	}

	mounted() {
		const { pokeId } = this.$props.pokemon;
		const $pokemonInfo = document.querySelector(`.pokemon_card_info${pokeId}`);
		new PokeInfo($pokemonInfo, {
			pokeId: pokeId,
		});
	}
}

export default PokeCard;
