import React, { useState, useEffect, useContext } from 'react';
import NewReleasesList from '../components/NewReleasesList';
import './NewReleases.scss';
import TokenContext from '../TokenContext';
import axios from 'axios';
import { Link } from '@reach/router';

export default function NewReleases(props) {
	var [token] = useContext(TokenContext);
	var [tracks, setTracks] = useState({});
	var [newReleases, setNewReleases] = useState([]);

	// ────────────────────────────────────────────────────────────────────────────────

	//gemmer alle mine playlist i statet setPlaylists
	useEffect(
		function () {
			axios
				.get('https://api.spotify.com/v1/browse/new-releases', {	headers: {		Authorization: 'Bearer ' + token.access_token,
					},
				})
				.then(response =>{
          console.log('new releases',response.data.albums.items )
          setNewReleases(response.data.albums.items);
        });
		},
		[token, setNewReleases]
	);
	console.log(newReleases);

	// ────────────────────────────────────────────────────────────────────────────────

	//henter playlist med id'et og dens tracks
	// useEffect(
	// 	function () {
	// 		if (props.id)
	// 			axios
	// 				.get('https://api.spotify.com/v1/browse/new-releases/' + props.id + '/tracks', {
	// 					headers: {
	// 						Authorization: 'Bearer ' + token.access_token,
	// 					},
	// 				})

	// 				.then(response => {
	// 					console.log('new releases tracks',response.data)
	// 					setTracks(response.data)});
	// 	},
	// 	[token, setTracks, props.id]
	// );
	// ────────────────────────────────────────────────────────────────────────────────

	return (
    <>
    <div className="album__FeaturedviewAll">
					<p className="album__FeaturedviewAll__title">new releases</p>
					<Link className="album__FeaturedviewAll__link" to="/albums/viewallreleases">view all</Link>
		</div>
		<div className="newReleases">
      {newReleases.map(release =>( 
        <NewReleasesList
        src={release.images[2].url}
        artist={release.artists[0].name}
        title={release.name.slice(0, 16)}
        id={release.id}
        totalTracks={release.total_tracks}
        key={release.id}
        />
      ))}
    </div>
    </>
		
	);
}
