import React from 'react';
import { navigate } from '@reach/router';

import './SliderCard.scss';

export default function AlbumSliderCard({ src, list, id }) {
	return (
		<div className="sliderCard" onClick={() => navigate(`/albums/${id}`)}>
			<img className="sliderCard__img" src={src} alt="" />
			<p className="sliderCard__text">{list}</p>
		</div>
	);
}
