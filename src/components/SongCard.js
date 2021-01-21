import './SongCard.scss';
import { FaPlay } from 'react-icons/fa';
export default function SongCard({ item }) {
	return (
		<article className="songCard">
			<button className="songCard__btn">
				<FaPlay className="songCard__btn__icon" />
			</button>
			<h1 className="songCard__title">{item.title}</h1>
			<p className="songCard__artist">{item.artist}</p>
			<p className="songCard__duration">{item.duration}</p>
		</article>
	);
}
