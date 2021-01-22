import React, { useState, useEffect } from 'react';
import CategoryCard from '../components/CategoryCard';
import PrimaryNav from '../components/PrimaryNav';
import './Categories.scss';

export default function Categories() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./categories.json')
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
			<section className="categories">
				<h1 className="categories__title">categories</h1>
				{items.map(function (item) {
					return <CategoryCard key={item.category} item={item} />;
				})}
			</section>
			<PrimaryNav />
		</>
	);
}
