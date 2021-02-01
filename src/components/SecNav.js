import { IoIosArrowBack } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import './SecNav.scss';
const SecNav = () => {
	if (window.location.pathname === "/album" ){

		window.onscroll = function () {
			navScroll();
		};
		
			function navScroll() {
				if (document.documentElement.scrollTop > 50) {
					document.querySelector('.secNav').className = 'secNav active';
					document.querySelector('.secNav').style.color = 'black';
					document.querySelector('.secNav__icon').style.color = 'black';
				} else {
					document.querySelector('.secNav').className = 'secNav';
					document.querySelector('.secNav').style.color = 'white';
					document.querySelector('.secNav__icon').style.color = 'white';
				}
			}
		}
	let location = useLocation();
	return (
		<div className="secNav">
			<button className="secNav__arrow" onClick={() => window.history.back()}>
				<IoIosArrowBack className="secNav__icon" />
			</button>
			<p className="secNav__text">{location.pathname.slice(1)}</p>
		</div>
	);
};
export default SecNav;


