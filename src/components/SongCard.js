import './SongCard.scss';
import PlayPause from './PlayPauseBtn';
export default function SongCard({ title, artist, duration, id }) {
	return (
		<article className="songCard">
			<PlayPause />
			<h1 className="songCard__title">{title}</h1>
			<p className="songCard__artist">{artist}</p>
			<p className="songCard__duration">{duration}</p>
		</article>
	);
}
