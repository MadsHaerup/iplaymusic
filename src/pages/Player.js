import React, { useState, useEffect, useContext } from 'react';
import PlayerCard from '../components/PlayerCard';
import '../components/PlayerCard.scss';
import axios from 'axios';
import TokenContext from '../TokenContext';

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

					.then(response => setTracks(response.data));
		},
		[token, setTracks, props.id]
	);

	return (
		<>
			<section className="player">
				<PlayerCard
					key={tracks.id}
					id={tracks.id}
					title={tracks.name}
					// artist={tracks.artists.name}
					// src={tracks.images[0].url}
					duration={tracks.duration_ms}
				/>
			</section>
		</>
	);
}
