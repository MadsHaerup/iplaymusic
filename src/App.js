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
import Player from './pages/Player';
import Album from './pages/Album';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn:process.env.SENTRY_DSN
});

function FallbackComponent() {
  return (
		<>
		<div className="notfound">
			<div>
				<p>An error has occurred</p>
				<img src="/img/notfound.svg" alt=""/>
			</div>		
		</div>
	</>
	);
};

const myFallback = <FallbackComponent />;

function App() {
	var tokenState = useState(null);
	return (
		<TokenContext.Provider value={tokenState}>
			<Sentry.ErrorBoundary fallback={myFallback} showDialog>
				<Router>
						<>
							<Callback path="/callback" />
							<Welcome path="/" />
							<Login path="/login" default />
							<Featured path="/featured" />
							<Playlist path="/playlists" />
							<Playlist path="/playlists/:id" />
							<Categories path="/categories" />
							<Player path="/playing" />
							<Player path="/playing/:id" />
							<AlbumDetails path="/album" />
							<Album path="/albums" />
							<Album path="/albums/:id" />
						</>
				</Router>
			</Sentry.ErrorBoundary>
		</TokenContext.Provider>
	);
}

export default App;
