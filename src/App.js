import './App.scss';
import { Router } from '@reach/router';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Featured from './pages/Featured';
import Playlist from './pages/Playlist';
import Categories from './pages/Categories';
import AlbumDetails from './pages/AlbumDetails';
import TokenContext from './TokenContext';
import { useState } from 'react';
import Callback from './pages/Callback';
import Player1 from './components/Player1';

function App() {
	var tokenState = useState(null);
	return (
		<TokenContext.Provider value={tokenState}>
			<Router>
				{
					(function (){
						// if (tokenState[0]?.access_token)
							return(
								<>
								<Callback path="/callback" />
								<Welcome path="/" />
								<Login path="/login" default />
								<Featured path="/featured" />
								<Playlist path="/playlists" />
								<Playlist path="/playlists/:id" />
								<Categories path="/categories" />
								<Player1 path="/playing" />
								<AlbumDetails path="/album" />
								</>
							)
						

					}())
				}
			</Router>
		</TokenContext.Provider>
	);
}

export default App;
