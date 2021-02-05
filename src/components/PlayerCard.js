import './PlayerCard.scss';
import { BsFillSkipStartFill, BsSkipEndFill } from 'react-icons/bs';
import { FaBackward, FaForward } from 'react-icons/fa';
import PlayPause from './PlayPauseBtn';
import timeConvert from './timeConvert';

export default function PlayerCard({ src, duration, title, artist }) {
	return (
		<article className="playerCard">
			{/* <img className="playerCard__backgroundImg" src="./img/soundwave.svg" alt="sound wave" /> */}
			<img className="playerCard__image" src={src} alt="player" />
			<h1 className="playerCard__title"> {title}</h1>
			<p className="playerCard__artist">{artist}</p>
			<input className="playerCard__range" type="range" min="0" max="" />
			<div className="playerCard__duration">
				<p className="duration__start">0:00</p>
				<p className="duration__end">{timeConvert(duration)} </p>
			</div>
			<div className="playerCard__controls">
				<button>
					<BsFillSkipStartFill />
				</button>
				<button>
					<FaBackward />
				</button>
				<PlayPause />
				<button>
					<FaForward />
				</button>
				<button>
					<BsSkipEndFill />
				</button>
			</div>
		</article>
	);
}
