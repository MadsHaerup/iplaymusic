import './App.scss';
import { Router } from '@reach/router';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Featured from './pages/Featured';
import Playlist from './pages/Playlist';
import Categories from './pages/Categories';

function App() {
	return (
		<Router>
			<Welcome path="/" />
			<Login path="/login" />
			<Featured path="/featured" />
			<Playlist path="/playlist" />
			<Categories path="/categories" />
		</Router>
	);
}

export default App;
