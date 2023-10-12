export default class Component {
	$target;
	$props;
	$state;

	constructor($target, $props) {
		this.$target = $target;
		this.$props = $props;
		this.setup();
		this.setEvent();
		this.render();
	}

	// 컴포넌트 state 설정
	setup() {}

	// 컴포넌트가 mount 되었을 때 호출되는 함수
	mounted() {}

	// UI 구성
	template() {
		return "";
	}
	render() {
		if (!this.$target) return;
		// UI 렌더링
		this.$target.innerHTML = this.template();
		// 화면에 렌더링된 이후 호출되는 함수
		this.mounted();
	}
	// 컴포넌트에서 필요한 이벤트 설정
	setEvent() {}

	// 상태 변경 후 렌더링
	setState(newState) {
		this.$state = { ...this.$state, ...newState };
		// this.mounted();
		this.render();
	}

	// 이벤트 등록 추상화
	addEvent(eventType, selector, callback) {
		this.$target.addEventListener(eventType, event => {
			if (!event.target.closest(selector)) return false;
			callback(event);
		});
	}
}
