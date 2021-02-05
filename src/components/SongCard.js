import './SongCard.scss';
import PlayPause from './PlayPauseBtn';
import { navigate } from '@reach/router';
import timeConvert from './timeConvert';
export default function SongCard({ title, artist, duration, id, description }) {
	return (
		<article className="songCard" onClick={() => navigate(`/playing/${id}`)}>
			<PlayPause />
			<h1 className="songCard__title">{title}</h1>
			<p className="songCard__artist">{artist}</p>
			<p className="songCard__duration">{timeConvert(duration)} </p>
			<p>{description}</p>
		</article>
	);
}
