import React, { useState, useEffect } from 'react';
import FeaturedCard from '../components/FeaturedCard';

export default function Featured() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./featured.json')
			.then(function (response) {
				return response.json();
			})

			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="featured">
			<h1 className="featured__title">featured</h1>
			{items.map(function (item) {
				return <FeaturedCard key={item.title} item={item} />;
			})}
		</section>
	);
}
