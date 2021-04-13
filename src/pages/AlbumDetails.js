import React, { useState, useEffect } from 'react';
import SongCard from '../components/SongCard';
import PrimaryNav from '../components/PrimaryNav';
import './AlbumDetails.scss';
import SecondaryNav from '../components/SecondaryNav';

export default function AlbumDetails() {
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
			<SecondaryNav location="Album" />
			<section className="albumDetails">
				<div className="albumDetails__header">
					<img src="./img/albumbg.svg" alt="" className="albumDetails__background" />
					<h1 className="albumDetails__title">old town road</h1>
					<p className="albumDetails__length">{items.length} songs </p>
					<p className="albumDetails__tags">genres hashtags</p>
					<div className="albumDetails__hashtags">
						<button className="albumDetails__hashtags__tag">#country</button>
						<button className="albumDetails__hashtags__tag">#country road</button>
					</div>
				</div>
				<h2 className="albumDetails__songs">all songs</h2>
				{items.map(function (item) {
					return <SongCard key={item.title} item={item} />;
				})}
			</section>
			<PrimaryNav />
		</>
	);
}
