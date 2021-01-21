import './PrimaryNav.scss';

export default function PrimaryNav() {
	return (
		<nav className="primaryNav">
			<ul className="primaryNav__ul">
				<li className="primaryNav__ul__list">
					<a href="#" className="primaryNav__ul__list__link">
						<img src="./img/pulse.svg" alt="" />
					</a>
				</li>
				<li className="primaryNav__ul__list">
					<a href="#" className="primaryNav__ul__list__link">
						<img src="./img/microphone.svg" alt="" />
					</a>
				</li>
				<li className="primaryNav__ul__list">
					<a href="#" className="primaryNav__ul__list__link">
						<img src="./img/radar.svg" alt="" />
					</a>
				</li>
				<li className="primaryNav__ul__list">
					<a href="#" className="primaryNav__ul__list__link">
						<img src="./img/contrast.svg" alt="" />
					</a>
				</li>
				<li className="primaryNav__ul__list">
					<a href="#" className="primaryNav__ul__list__link">
						<img src="./img/settings.svg" alt="" />
					</a>
				</li>
			</ul>
		</nav>
	);
}
