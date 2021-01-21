import './App.scss';
import { Router } from '@reach/router';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Featured from './pages/Featured';

function App() {
	return (
		<Router>
			<Welcome path="/" />
			<Login path="/login" />
			<Featured path="/featured" />
		</Router>
	);
}

export default App;
