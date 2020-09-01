import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbah: React.FC<NavbahProps> = props => {
	return (
		<nav className="nav justify-content-center bg-white shadow p-2 mb-2">
			<NavLink
				exact
				className="mx-5 font-weight-light"
				activeClassName="text-primary font-weight-bold"
				to="/">
				Home
			</NavLink>
			<NavLink
				className="mx-5 font-weight-light"
				activeClassName="text-primary font-weight-bold"
				to="/compose">
				Compose
			</NavLink>
		</nav>
	);
};

interface NavbahProps {}

export default Navbah;
