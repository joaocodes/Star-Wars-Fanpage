import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="navbararea">
			<div className="container">
				<nav className="navbar mb-3">
					<Link to="/">
						<span className="navitem ">People</span>
					</Link>
					<Link to="/demo">
						<span className="navitem">Vehicles</span>
					</Link>
					<Link to="/demo">
						<span className="navitem">Ships</span>
					</Link>
					<Link to="/demo">
						<span className="navitem">Planets</span>
					</Link>
				</nav>
			</div>
		</div>
	);
};
