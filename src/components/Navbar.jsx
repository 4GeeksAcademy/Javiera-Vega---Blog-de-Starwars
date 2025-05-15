import { Link } from "react-router-dom";
import logoStarWars from "../assets/img/logo.png"

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div>
					<img
						src={logoStarWars}
						alt="logo Star Wars"
						className="w-50" />
				</div>

				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-dark">
						<li><a className="dropdown-item active" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
						<li><a className="dropdown-item" href="#">Separated link</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};