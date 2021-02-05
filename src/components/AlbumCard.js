import './AlbumCard.scss';
import { navigate } from '@reach/router';
import timeConvert from './timeConvert';
export default function AlbumCard({ title, artist, duration, id, description }) {
	return (
		<article className="albumCard" onClick={() => navigate(`/albums/${id}`)}>
			<h1 className="albumCard__title">{title}</h1>
			<p className="albumCard__artist">{artist}</p>
			<p className="albumCard__duration">{timeConvert(duration)} </p>
			<p>{description}</p>
		</article>
	);
}
