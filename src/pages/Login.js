import LoginCard from '../components/LoginCard';
import querystring from 'querystring';

export default function Login() {
	var queryParameters = querystring.stringify({
		response_type: 'code',
		client_id: '3e05f700a0a849c4bcc15ee82f779723',
		scope: 'user-read-private user-read-email',
		redirect_uri: 'http://localhost:8888/callback',
		state: "vdjldfglfdlgrpoiaer9garlogihlgkzhdrlgishlro8tubzpdortuzorihglzdoighlzoirhtlzo8ghldhglzdghlzdoigh"
	});

	return (
		<>
			<LoginCard />
			<a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Log in with Spotify</a>
		</>
	);
}
