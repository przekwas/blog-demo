import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbah: React.FC<NavbahProps> = (props) => {
	return (
		<nav className="nav justify-content-center bg-white shadow p-2 mb-2">
            <NavLink exact className="py-2 mx-5" activeClassName="text-muted border-top border-bottom border-dark" to="/">Home</NavLink>
            <NavLink className="py-2 mx-5" activeClassName="text-muted border-top border-bottom border-dark" to="/compose">Compose</NavLink>
        </nav>
	);
};

interface NavbahProps {}

export default Navbah;