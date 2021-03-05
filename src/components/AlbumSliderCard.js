import React from 'react';
import { navigate } from '@reach/router';

import './SliderCard.scss';

export default function AlbumSliderCard({ src, id, key }) {
	return (
		<div className="sliderCard" onClick={() => navigate(`/albums/${id}`)} key={key}>
			<img className="sliderCard__img" src={src} alt="" />
		</div>
	);
}
