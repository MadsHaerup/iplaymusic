import './Player1.scss';
import { BsFillSkipStartFill, BsSkipEndFill } from 'react-icons/bs';
import { FaBackward, FaForward } from 'react-icons/fa';
import PlayPause from './PlayPauseBtn';

export default function Player1({ item }) {
	return (
		<article className="player1">
			<img className="player1__backgroundImg" src="./img/soundwave.svg" alt="sound wave" />
			<img className="player1__image" src="./img/player.svg" alt="player" />
			<h1 className="player1__title"> {item.title}</h1>
			<p className="player1__artist">{item.artist}</p>
			<input className="player1__range" type="range" min="0" max="" />
			<div className="player1__duration">
				<p className="duration__start">0:00</p>
				<p className="duration__end">{item.duration}</p>
			</div>
			<div className="player1__controls">
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
