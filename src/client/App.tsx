import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbah from './components/Navbah';
import Home from './views/Home';
import Compose from './views/Compose';
import Details from './views/Details';

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
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;
