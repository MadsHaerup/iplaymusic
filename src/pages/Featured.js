import React, { useContext, useState, useEffect } from 'react';
import FeaturedCard from '../components/FeaturedCard';
import PrimaryNav from '../components/PrimaryNav';
import axios from 'axios';
import TokenContext from '../TokenContext';
import SecondaryNav from '../components/SecondaryNav';
import Heading from '../components/Heading';
import { BsSearch } from 'react-icons/bs';

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
			<SecondaryNav location="Featured" icon={<BsSearch/>}/>
			<section className="featured">
				<Heading heading="featured"/>

				{content.playlists &&
					content.playlists.items.map(function (item) {
						return (
							<>
								<FeaturedCard key={item.id} item={item} id={item.id} src={item.images[0].url} />
							</>
						);
					})}
			</section>
			<PrimaryNav />
		</>
	);
}
