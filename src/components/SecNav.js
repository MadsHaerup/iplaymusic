import { IoIosArrowBack } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import './SecNav.scss';
const SecNav = () => {
	let location = useLocation();
	return (
		<div className="secondaryNav">
			<button className="secondaryNav__arrow" onClick={() => window.history.back()}>
				<IoIosArrowBack className="secondaryNav__icon" />
			</button>
			<p className="secondaryNav__text">{location.pathname.slice(1)}</p>
		</div>
	);
};
export default SecNav;

window.onscroll = function () {
	navScroll();
};

function navScroll() {
	if (document.documentElement.scrollTop > 50) {
		document.querySelector('.secondaryNav').className = 'secondaryNav active';
		document.querySelector('.secondaryNav').style.color = 'black';
		document.querySelector('.secondaryNav__icon').style.color = 'black';
	} else {
		document.querySelector('.secondaryNav').className = 'secondaryNav';
		document.querySelector('.secondaryNav').style.color = 'white';
		document.querySelector('.secondaryNav__icon').style.color = 'white';
	}
}
