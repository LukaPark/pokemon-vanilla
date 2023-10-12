import { getPokeList } from "../apis/pokemon";
import Component from "../core/Component";
import { navigateTo } from "../router";
import PokeCard from "./PokeCard";
import "../styles/components/poke.css";

class PokeList extends Component {
	isUpdateList = true;
	nextOffset = 0;

	// render 할 내용
	template() {
		return `<ul class="poke_list"></ul>`;
	}

	// render 후
	mounted() {
		if (this.$props.pokeList) {
			this.renderList(this.$props.pokeList);
			window.addEventListener("scroll", this.infiniteScroll.bind(this));
		}
	}

	renderList(list = [], nextOffset = 0) {
		const $pokeList = document.querySelector(".poke_list");
		list.map((pokemon, index) => {
			new PokeCard($pokeList, {
				pokemon: { ...pokemon, pokeId: nextOffset + index + 1 },
			});
		});
	}

	// 클릭 이벤트
	setEvent() {
		const { goDetailPage } = this;
		// @event Delegation
		this.addEvent("click", ".pokemon_card_container", e => {
			goDetailPage(e.target.closest("[data-pokemon-id]").dataset.pokemonId);
		});
	}

	goDetailPage(pokeId) {
		navigateTo(`/pokemons/${pokeId}`);
	}

	async infiniteScroll() {
		const currentScroll = window.scrollY;
		const windowHeight = window.innerHeight;
		const bodyHeight = document.body.clientHeight;
		const paddingBottom = 100;

		if (currentScroll + windowHeight + paddingBottom >= bodyHeight) {
			if (this.isUpdateList) {
				this.isUpdateList = false;
				this.nextOffset += 30;
				const data = await getPokeList(this.nextOffset, 30);
				this.renderList(data.results, this.nextOffset);
				this.isUpdateList = true;
			}
		}
	}
}

export default PokeList;
