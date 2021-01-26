import { IoIosArrowBack } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import './SecondaryNav.scss';
const SecondaryNav = () => {
	let location = useLocation();
	return (
		<div className="secondaryNav">
			<button className="secondaryNav__arrow" onClick={() => window.history.back()}>
				<IoIosArrowBack />
			</button>
			<p className="secondaryNav__text">{location.pathname.slice(1)}</p>
			<button className="secondaryNav__search">
				<BsSearch />
			</button>
		</div>
	);
};
export default SecondaryNav;

window.onscroll = function () {
	navScroll();
};

function navScroll() {
	if (document.documentElement.scrollTop > 50) {
		document.querySelector('.secondaryNav').className = 'secondaryNav active';
	} else {
		document.querySelector('.secondaryNav').className = 'secondaryNav';
	}
}
