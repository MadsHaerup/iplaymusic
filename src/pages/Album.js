import React, { useState, useEffect, useContext } from 'react';
import PrimaryNav from '../components/PrimaryNav';
import './Album.scss';
import SecondaryNav from '../components/SecondaryNav';
import TokenContext from '../TokenContext';
import axios from 'axios';
import AlbumSliderCard from '../components/AlbumSliderCard';
import { BsSearch } from 'react-icons/bs';

// ────────────────────────────────────────────────────────────────────────────────
import * as Sentry from "@sentry/react";
import {myFallback} from '../errorBoundaries/SentryErrorBoundary';
import SongCard from '../components/SongCard';
import NewReleases from '../components/NewReleases';
import { Link } from '@reach/router';
import Heading from '../components/Heading';

Sentry.init({
  dsn:process.env.SENTRY_DSN
});
// ────────────────────────────────────────────────────────────────────────────────


export default function Album(props) {
	var [token] = useContext(TokenContext);
	var [tracks, setTracks] = useState([]);
	var [albumlists, setAlbumlists] = useState([]);

	// ────────────────────────────────────────────────────────────────────────────────

	//gemmer alle mine albums i statet setAlbumlists
	
	useEffect(
		function () {
			axios.get("https://api.spotify.com/v1/albums?ids=41MnTivkwTO3UUJ8DrqEJJ,6UXCm6bOO4gFlDQZV5yL37,0WzOtZBpXvWdNdH7hCJ4qo", {
				headers: {
				"Authorization": "Bearer " + token.access_token
				},
				})
				.then(response => {
					console.log('data', response.data.albums)
					setAlbumlists(response.data.albums);
				});
			},
			[token, setAlbumlists]
			);

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

					.then(response => setTracks(response.data.items));
		},
		[token, setTracks, props.id]
	);
	console.log('tracks', tracks);
	// ────────────────────────────────────────────────────────────────────────────────

	return (
		<>
			<SecondaryNav location="Music" icon={<BsSearch/>}/>
			<section className="album">
			<Heading heading="All Albums"/>

				<div className="album__FeaturedviewAll">
					<p className="album__FeaturedviewAll__title">featured albums</p>
					<Link className="album__FeaturedviewAll__link" to="/albums/viewall">view all</Link>
				</div>
				<Sentry.ErrorBoundary fallback={myFallback} showDialog>

				<article className="album__slider">

					{albumlists.map(list => (
						<AlbumSliderCard
							key={list.id}
							id={list.id}
							src={list.images[1].url}
							/>
					))} 
				
				</article>
				{tracks.map(track => (
					<SongCard
						key={track.id}
						id={track.id}
						artist={track.artists[0].name}
						title={track.name.slice(0, 18)}
						duration={track.duration_ms}
					/>
				))}
			</Sentry.ErrorBoundary>
			</section>
			<NewReleases/>
			<PrimaryNav />
		</>
	);
}
