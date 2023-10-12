import Component from "../core/Component";
import logo from "../assets/main_logo.png";
import { navigateTo } from "../router";
import "../styles/components/header.css";

class Header extends Component {
	template() {
		return `
            <img src="${logo}" alt="logo" width="180" data-component="header-logo"/>
        `;
	}

	setEvent() {
		this.addEvent("click", '[data-component="header-logo', () => {
			this.handleNavigateToDashboard();
		});
	}

	handleNavigateToBack() {
		history.back();
	}

	handleNavigateToDashboard() {
		navigateTo("/");
	}
}

export default Header;
