import React from 'react';
import './SliderCard.scss';

export default function SliderCard({ src, list }) {
	return (
		<div className="sliderCard">
			<img className="sliderCard__img" src={src} alt="" />
			<p className="sliderCard__text">{list.name}</p>
		</div>
	);
}
