import React, { useState, useEffect } from 'react';
import CategoryCard from '../components/CategoryCard';
import Heading from '../components/Heading';
import PrimaryNav from '../components/PrimaryNav';
import SecondaryNav from '../components/SecondaryNav';
import './Categories.scss';
import { BsSearch } from 'react-icons/bs';


export default function Categories() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('https://api.spotify.com/v1/browse/categories/party')
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
			<SecondaryNav location="Categories" icon={<BsSearch/>} />
			<section className="categories">
				<Heading heading="Categories"/>
				{/* <h1 className="categories__title">categories</h1> */}
				{items.map(function (item) {
					return <CategoryCard key={item.id} item={item} />;
				})}
			</section>
			<PrimaryNav />
		</>
	);
}
