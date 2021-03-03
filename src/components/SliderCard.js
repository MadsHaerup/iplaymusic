import React from 'react';
import { navigate } from '@reach/router';

import './SliderCard.scss';

export default function SliderCard({ src, name, id }) {
	return (
		<div className="sliderCard" onClick={() => navigate(`/playlists/${id}`)}>
			<img className="sliderCard__img" src={src} alt="" />
			<p className="sliderCard__text">{name}</p>
		</div>
	);
}
