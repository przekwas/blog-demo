import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbah from './components/Navbah';
import Home from './views/Home';
import Compose from './views/Compose';
import Details from './views/Details';
import Admin from './views/Admin';

const App: React.FC<AppProps> = props => {
	return (
		<BrowserRouter>
		<Navbah />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/compose">
					<Compose />
				</Route>
				<Route exact path="/details/:blogid">
					<Details />
				</Route>
				<Route exact path="/admin/:blogid">
					<Admin />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;
