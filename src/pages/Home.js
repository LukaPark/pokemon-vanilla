import { getPokeList } from "../apis/pokemon";
import Header from "../components/Header";
import PokeList from "../components/PokeList";
import Component from "../core/Component";

class Home extends Component {
	// render 될 영역
	template() {
		return `
        <header class='header'></header>
        <main>
          <section class='poke_list_container'></section>
        </main>
        `;
	}
	// render 전 내부 상태 관리
	setup() {
		this.$state = {};
		this.$getPokeList();
	}

	// render 후 실행 될 함수
	mounted() {
		const $header = document.querySelector(".header");
		const $pokeListContainer = document.querySelector(".poke_list_container");
		// header 컴포넌트 인스턴스 화
		new Header($header, {
			header: $header,
		});
		// list 컴포넌트 인스턴스화
		new PokeList($pokeListContainer, {
			pokeList: this.$state.pokeList,
		});
	}

	async $getPokeList() {
		const data = await getPokeList();
		this.setState({ pokeList: data.results });
	}
}

export default Home;
