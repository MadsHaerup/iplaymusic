import React from 'react';
import WelcomeCard from '../components/WelcomeCard';
import { Link } from '@reach/router';

export default function Welcome() {
	return (
		<>
			<Link to="/login">
				<WelcomeCard />
			</Link>
		</>
	);
}
