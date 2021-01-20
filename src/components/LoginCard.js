import { IoIosKey, IoIosFingerPrint } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import './LoginCard.scss';
export default function LoginCard() {
	return (
		<section className="login">
			<h1 className="login__title">log in</h1>
			<label htmlFor="username" className="login__label">
				username
			</label>
			<div className="login__inputContainer">
				<input id="username" type="text" placeholder="Enter your username" />
				<FaRegUserCircle className="login__inputContainer__icon" />
			</div>

			<label htmlFor="password" className="login__label">
				password
			</label>
			<div className="login__inputContainer">
				<input id="password" type="text" placeholder="Enter your password" />
				<IoIosKey className="login__inputContainer__icon" />
			</div>

			<button className="login__btn">log in</button>
			<button className="login__fingerprint">
				<IoIosFingerPrint className="login_fingerprintIcon" />
			</button>
			<p className="login__fingerprintText">one-touch login</p>
		</section>
	);
}
