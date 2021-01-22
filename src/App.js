import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Featured from './pages/Featured';
import Playlist from './pages/Playlist';
import Categories from './pages/Categories';
import SecondaryNav from './components/SecondaryNav';

function App() {
	return (
		<Router>
			<Route path="/" exact component={Welcome} />
			<Route path="/login" component={Login} />
			<Route path="/featured">
				<SecondaryNav />
				<Featured />
			</Route>
			<Route path="/playlist">
				<SecondaryNav />
				<Playlist />
			</Route>
			<Route path="/categories">
				<SecondaryNav />
				<Categories />
			</Route>
		</Router>
	);
}

export default App;
