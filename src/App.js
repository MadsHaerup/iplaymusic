import './App.scss';
import { Router } from '@reach/router';
import Login from './pages/Login';
import Welcome from './pages/Welcome';

function App() {
	return (
		<Router>
			<Welcome path="/" />
			<Login path="/login" />
		</Router>
	);
}

export default App;
