import React, { useState, useEffect, useContext } from 'react';
import SongCard from '../components/SongCard';
import PrimaryNav from '../components/PrimaryNav';
import './Playlist.scss';
import SecondaryNav from '../components/SecondaryNav';
import TokenContext from '../TokenContext';
import axios from 'axios';
import { Link } from '@reach/router';
import SliderCard from '../components/SliderCard';

export default function Playlist(props) {
	var [token] = useContext(TokenContext);
	var [tracks, setTracks] = useState({});
	var [currentPlaylist, setCurrentPlaylist] = useState(null);
	var [playlists, setPlaylists] = useState([]);

	//gemmer alle playlist i statet setPlaylists
	useEffect(
		function () {
			axios
				.get('https://api.spotify.com/v1/me/playlists', {
					headers: {
						Authorization: 'Bearer ' + token.access_token,
					},
				})
				.then(response => setPlaylists(response.data.items));
		},
		[token, setPlaylists]
	);
	console.log(playlists);

	var [playlistID, setPlaylistID] = useState([]);

	// get playlist
	useEffect(
		function () {
			if (setPlaylistID)
				axios
					.get('https://api.spotify.com/v1/playlists/' + playlistID, {
						headers: {
							Authorization: 'Bearer ' + token.access_token,
						},
					})
					.then(response => setPlaylistID(response.data));
		},
		[token, setPlaylistID]
	);
	console.log(playlistID);

	//henter playlist med id'et
	useEffect(
		function () {
			if (currentPlaylist)
				axios
					.get('https://api.spotify.com/v1/playlists/' + currentPlaylist + '/tracks', {
						headers: {
							Authorization: 'Bearer ' + token.access_token,
						},
					})

					.then(response => setTracks(response.data));
		},
		[token, setTracks, currentPlaylist]
	);

	return (
		<>
			<SecondaryNav />
			<section className="playlist">
				<div className="playlist__header">
					<img src="./img/playlist.svg" alt="" className="playlist__background" />
					<h1 className="playlist__title">playlists</h1>
				</div>

				<article className="playlist__slider">
					{playlists.map(list => (
						<>
							<Link to={`/playlists/${list.id}`} onClick={() => setCurrentPlaylist(list.id)}>
								<SliderCard key={list.id} list={list} src={list.images[0].url} />
							</Link>
						</>
					))}

					{playlistID.map(list => (
						<>
							{function () {
								setPlaylistID(list.id);
							}}

							<SliderCard key={list.id} list={list} src={list.images[0].url} />
						</>
					))}
				</article>
				{tracks.items?.map(({ track }) => (
					<SongCard
						key={track.id}
						artist={track.artists[0].name}
						title={track.name.slice(0, 18)}
						duration={track.duration_ms}
					/>
				))}

				<button className="playlist__btn">listen all</button>
			</section>
			<PrimaryNav />
		</>
	);
}
