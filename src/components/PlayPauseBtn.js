import React from 'react';
import { BsFillPauseFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import './PlayPauseBtn.scss';

class PlayPause extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn,
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick} className="playPause">
				{this.state.isToggleOn ? <FaPlay style={{ color: 'white' }} /> : <BsFillPauseFill style={{ color: 'white' }} />}
			</button>
		);
	}
}

export default PlayPause;
