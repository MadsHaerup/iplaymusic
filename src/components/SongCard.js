import './SongCard.scss';
import PlayPause from './PlayPauseBtn';
export default function SongCard({ item }) {
	return (
		<article className="songCard">
			<PlayPause />
			<h1 className="songCard__title">{item.title}</h1>
			<p className="songCard__artist">{item.artist}</p>
			<p className="songCard__duration">{item.duration}</p>
		</article>
	);
}
