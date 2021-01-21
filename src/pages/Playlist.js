import React, { useState, useEffect } from 'react';
import SongCard from '../components/SongCard';
import PrimaryNav from '../components/PrimaryNav';
import './Playlist.scss';

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
			<section className="playlist">
				<img src="./img/playlist.svg" alt="" className="playlist__background" />
				<h1 className="playlist__title">playlist</h1>
				{items.map(function (item) {
					return <SongCard key={item.title} item={item} />;
				})}
				<button className="playlist__btn">listen all</button>
			</section>
			<PrimaryNav />
		</>
	);
}
