import React, { useState, useEffect, useContext } from 'react';
import PlayerCard from '../components/PlayerCard';
import '../components/PlayerCard.scss';
import axios from 'axios';
import TokenContext from '../TokenContext';
import SecNav from '../components/SecNav';

export default function Playlist(props) {
	var [token] = useContext(TokenContext);
	var [tracks, setTracks] = useState([]);

	//henter playlist med id'et og dens tracks
	useEffect(
		function () {
			if (props.id)
				axios
					.get('https://api.spotify.com/v1/tracks/' + props.id, {
						headers: {
							Authorization: 'Bearer ' + token.access_token,
						},
					})

					.then(response => {
						console.log('player', response.data);
						setTracks(response.data);
					});
		},
		[token, setTracks, props.id]
	);

	return (
		<>
			<SecNav />
			<section className="player">
				<PlayerCard
					key={tracks.id}
					id={tracks.id}
					title={tracks.name}
					artist={tracks.artists && tracks.artists[0].name}
					src={tracks.album && tracks.album.images[0].url}
					// src={tracks.images ? tracks.images[0].url : ''}
					duration={tracks.duration_ms}
				/>
			</section>
		</>
	);
}
