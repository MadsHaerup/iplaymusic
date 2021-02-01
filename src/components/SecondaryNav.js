import { IoIosArrowBack } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import './SecondaryNav.scss';
const SecondaryNav = () => {
	if (window.location.pathname !== '/login') {
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
	}
	return (
		<div className="secondaryNav">
			<button className="secondaryNav__arrow" onClick={() => window.history.back()}>
				<IoIosArrowBack />
			</button>
			<p className="secondaryNav__text">{window.location.pathname.slice(1)}</p>
			<button className="secondaryNav__search">
				<BsSearch />
			</button>
		</div>
	);
};
export default SecondaryNav;
