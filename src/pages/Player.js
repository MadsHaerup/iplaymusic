import React, { useState, useEffect } from 'react';
import Player1 from '../components/Player1';
import '../components/Player1.scss';
import SecondaryNav from '../components/SecondaryNav';

export default function Playlist() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./songs.json')
			.then(function (response) {
				return response.json();
			})

			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<>
			<SecondaryNav />
			<section className="player">
				{items.map(function (item) {
					return <Player1 key={item.title} item={item} />;
				})}
			</section>
		</>
	);
}
