import React, { useState, useEffect, useContext } from 'react';
import AlbumCard from '../components/AlbumCard';
import PrimaryNav from '../components/PrimaryNav';
import './Album.scss';
import SecondaryNav from '../components/SecondaryNav';
import TokenContext from '../TokenContext';
import axios from 'axios';
import SliderCard from '../components/SliderCard';

export default function Album(props) {
	var [token] = useContext(TokenContext);
	var [tracks, setTracks] = useState({});
	var [albumlists, setAlbumlists] = useState([]);

	// ────────────────────────────────────────────────────────────────────────────────

	//gemmer alle mine playlist i statet setPlaylists
	useEffect(
		function () {
			axios
				.get('https://api.spotify.com/v1/albums/', {
					headers: {
						Authorization: 'Bearer ' + token.access_token,
					},
				})
				.then(response => setAlbumlists(response.data.items));
		},
		[token, setAlbumlists]
	);
	console.log(albumlists);

	// ────────────────────────────────────────────────────────────────────────────────

	//henter playlist med id'et og dens tracks
	useEffect(
		function () {
			if (props.id)
				axios
					.get('https://api.spotify.com/v1/albums/' + props.id + '/tracks', {
						headers: {
							Authorization: 'Bearer ' + token.access_token,
						},
					})

					.then(response => setTracks(response.data));
		},
		[token, setTracks, props.id]
	);
	// ────────────────────────────────────────────────────────────────────────────────

	return (
		<>
			<SecondaryNav />
			<section className="album">
				<div className="album__header">
					<h1 className="album__title">all albums</h1>
				</div>
				<article className="album__slider">
					{albumlists.map(list => (
						<>
							<SliderCard key={list.id} list={list} id={list.id} src={list.images[0].url} />
						</>
					))}
				</article>
				{tracks.items?.map(({ track }) => (
					<AlbumCard
						key={track.id}
						id={track.id}
						artist={track.artists[0].name}
						title={track.name.slice(0, 18)}
						duration={track.duration_ms}
					/>
				))}
			</section>
			<PrimaryNav />
		</>
	);
}
