import React, { useState, useEffect, useContext } from 'react';
import SongCard from '../components/SongCard';
import PrimaryNav from '../components/PrimaryNav';
import './Playlist.scss';
import SecondaryNav from '../components/SecondaryNav';
import TokenContext from '../TokenContext';
import axios from 'axios';
import { Link } from '@reach/router';

export default function Playlist(props) {
	var [token] = useContext(TokenContext);
	var [tracks, setTracks] = useState({});
	var [currentPlaylist, setCurrentPlaylist] = useState(null);
	var [playlists, setPlaylists] = useState([]);

	//gemmer alle playlist i statet setPlaylists
	useEffect(
		function () {
			axios.get('https://api.spotify.com/v1/me/playlists', {
					headers: {
						"Authorization": 'Bearer ' + token.access_token,
					},
				})

				.then(response => setPlaylists(response.data.items));
		},
		[token, setPlaylists]
	);
	console.log(playlists);

	//henter playlist med id'et
	useEffect(
		function () {
			if (currentPlaylist)
				axios.get('https://api.spotify.com/v1/playlists' + currentPlaylist + '/tracks', {
						headers: {
							"Authorization": 'Bearer ' + token.access_token,
						},
					})

					.then(response => setTracks(response.data));
		},
		[token, setTracks, currentPlaylist]
	);

	// var [items, setItem] = useState([]);
	// useEffect(function () {
	// 	fetch('./songs.json')
	// 		.then(function (response) {
	// 			return response.json();
	// 		})

	// 		.then(function (data) {
	// 			console.log(data);
	// 			setItem(data);
	// 		});
	// }, []);

	return (
		<>
			<SecondaryNav />
			<section className="playlist">
				<div className="playlist__header">
					<img src="./img/playlist.svg" alt="" className="playlist__background" />
					<h1 className="playlist__title">playlists</h1>
				</div>

				{playlists.map(list => (
					<p key={list.id}>
						<Link to={`/playlists/${list.id}`} onClick={() => setCurrentPlaylist(list.id)}>
							{list.name}
						</Link>
					</p>
				))}

				{tracks.items?.map(({ track }) => (
					<SongCard key={track.id} artist={track.artists[0].name} title={track.name} duration={track.duration_ms} />
				))}
				{/* {items.map(function (item) {
					return <SongCard key={item.title} item={item} />;
				})} */}
				<button className="playlist__btn">listen all</button>
			</section>
			<PrimaryNav />
		</>
	);
}
