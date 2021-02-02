import React, { useContext, useState, useEffect } from 'react';
import FeaturedCard from '../components/FeaturedCard';
import PrimaryNav from '../components/PrimaryNav';
import axios from 'axios';
import TokenContext from '../TokenContext';
import SecondaryNav from '../components/SecondaryNav';

export default function Featured() {
	var [token] = useContext(TokenContext);
	var [content, setContent] = useState({});

	useEffect(
		function () {
			axios
				.get('https://api.spotify.com/v1/browse/featured-playlists', {
					headers: {
						Authorization: 'Bearer ' + token.access_token,
					},
				})
				.then(response => {
					setContent(response.data);
				});
		},
		[token, setContent]
	);
	console.log(content);

	return (
		<>
			<SecondaryNav />
			<section className="featured">
				<h1 className="featured__title">featured</h1>

				{content.playlists &&
					content.playlists.items.map(function (item) {
						return (
								<FeaturedCard key={item.id} item={item} />
						)
					})}
			</section>
			<PrimaryNav />
		</>
	);
}
