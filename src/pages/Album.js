import React, { useState, useEffect, useContext } from 'react';
import AlbumCard from '../components/AlbumCard';
import PrimaryNav from '../components/PrimaryNav';
import './Album.scss';
import SecondaryNav from '../components/SecondaryNav';
import TokenContext from '../TokenContext';
import axios from 'axios';
import AlbumSliderCard from '../components/AlbumSliderCard';

export default function Album(props) {
	var [token] = useContext(TokenContext);
	var [tracks, setTracks] = useState({});
	var [albumlists, setAlbumlists] = useState([]);

	// ────────────────────────────────────────────────────────────────────────────────

	//gemmer alle mine albums i statet setAlbumlists

	//FIXME returns undefined
	useEffect(
		function () {
			axios
				.get('https://api.spotify.com/v1/albums?ids=61ulfFSmmxMhc2wCdmdMkN', {
					headers: {
						Authorization: 'Bearer ' + token.access_token,
					},
				})
				.then(response => setAlbumlists(response.data.items));
		},
		[token, setAlbumlists]
	);
	console.log('album', albumlists);

	// ────────────────────────────────────────────────────────────────────────────────

	//henter albums med id'et og dens tracks
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
	console.log('tracks', tracks);
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
						<AlbumSliderCard
							key={list.artists.id}
							list={list}
							id={list.artists.id}
							src={list.images.url}
							/>
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
