import { Link } from '@reach/router';
import './PrimaryNav.scss';

export default function PrimaryNav() {
	return (
		<nav className="primaryNav">
			<ul className="primaryNav__ul">
				<li className="primaryNav__ul__list">
					<Link to="/playlists" className="primaryNav__ul__list__link">
						<img src="./img/pulse.svg" alt="" />
					</Link>
				</li>
				<li className="primaryNav__ul__list">
					<Link to="/album" className="primaryNav__ul__list__link">
						<img src="./img/microphone.svg" alt="" />
					</Link>
				</li>
				<li className="primaryNav__ul__list">
					<Link to="/categories" className="primaryNav__ul__list__link">
						<img src="./img/radar.svg" alt="" />
					</Link>
				</li>
				<li className="primaryNav__ul__list">
					<Link to="#" className="primaryNav__ul__list__link">
						<img src="./img/contrast.svg" alt="" />
					</Link>
				</li>
				<li className="primaryNav__ul__list">
					<Link to="/playing" className="primaryNav__ul__list__link">
						<img src="./img/settings.svg" alt="" />
					</Link>
				</li>
			</ul>
		</nav>
	);
}
