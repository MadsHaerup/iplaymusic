import { IoIosArrowBack } from 'react-icons/io';
import React,{useEffect, useState} from 'react';

import './SecondaryNav.scss';

const SecondaryNav = ({location,icon}) => {
	const [scrolled, setScrolled]=useState(false);


	const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 50 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
   
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

	let navbarClasses=['secondaryNav'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
	// ────────────────────────────────────────────────────────────────────────────────

	return (
		<div className={navbarClasses.join(" ")}>
			<button className="secondaryNav__arrow" onClick={() => window.history.back()}>
				<IoIosArrowBack />
			</button>
			<p className="secondaryNav__text">{location}</p>
			<button className="secondaryNav__search">
				{icon}
			</button>
		</div>
	);
};
export default SecondaryNav;
