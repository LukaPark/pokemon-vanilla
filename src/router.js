import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

const root = document.querySelector("#app");

const routes = [
	{ path: "/", component: Home },
	{ path: "/pokemons/:id", component: Detail },
];

const render = path => {
	const matchedRoute = routes
		.map(route => {
			const isMatch = path.match(getPathConvert(route.path));
			return { route, isMatch };
		})
		.find(matchedRoute => matchedRoute.isMatch !== null);
	matchedRoute ? new matchedRoute.route.component(root) : new NotFound(root);
};

const getPathConvert = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

export const navigateTo = path => {
	if (window.location.pathname !== path) {
		// 해당 path render
		window.history.pushState({}, "", window.location.origin + path);
		render(path);
	}
};

export const initializeRouter = () => {
	// 뒤로가기시 해당 path render
	window.addEventListener("popstate", () => {
		render(window.location.pathname);
	});
	// DOM 구성이 완료되었을 때 document 객체에서 실행.
	window.addEventListener("DOMContentLoaded", () => {
		render(window.location.pathname);
	});
};
