import logo from '../assets/logo.jpg';

export default function Header() {
	return (
		<header id="main-header">
			<div id="title">
				<img src={logo} alt="Company logo" />
				<h1>React FoodOrder</h1>
			</div>
			<div>
				<button class="button">
					Cart (0)
				</button>
			</div>
		</header>
	);
}
