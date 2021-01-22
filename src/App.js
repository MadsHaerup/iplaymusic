import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Featured from './pages/Featured';
import Playlist from './pages/Playlist';
import Categories from './pages/Categories';

function App() {
	return (
		<Router>
			<Route path="/" exact component={Welcome} />
			<Route path="/login" component={Login} />
			<Route path="/featured" component={Featured} />
			<Route path="/playlist" component={Playlist} />
			<Route path="/categories" component={Categories} />
		</Router>
	);
}

export default App;
