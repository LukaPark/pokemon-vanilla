import { getPokemonSpecies, getPokemonInfo } from "../apis/pokemon";
import Component from "../core/Component";
import { convertedText } from "../utils/convertText";
import { typeColor, typeIcon } from "../utils/pokeType";

class PokeInfo extends Component {
	template() {
		const { pokeId } = this.$props;
		const { info, species } = this.$state;
		const types = (info?.types ?? []).reduce(
			(acc, curr) =>
				acc +
				`<button style="background:${typeColor[curr.type.name]};">
					<img src=${typeIcon[curr.type.name]} alt="rock" width="20"/>
					<span>${convertedText[curr.type.name]}</span>
				  </button>`,
			""
		);
		return `<div class="poke-info">
					  <div class="poke-txt">
						<p>No.${String(pokeId).padStart(4, "0")}</p>
						<h3>${species?.names?.[2]?.name ?? ""}</h3>
					  </div>
					  <div class="poke-type">${types}</div>
				    </div>
		  `;
	}

	setup() {
		this.$state = {};
		this.$getPokemonDetail();
	}

	async $getPokemonDetail() {
		const { pokeId } = this.$props;
		const species = await getPokemonSpecies(pokeId);
		const info = await getPokemonInfo(pokeId);
		this.setState({ info, species });
	}
}

export default PokeInfo;
