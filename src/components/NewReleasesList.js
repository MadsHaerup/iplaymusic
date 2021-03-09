import './NewReleasesList.scss';
import { navigate } from '@reach/router';
export default function NewReleasesList({ title, artist, totalTracks, id ,src, key}) {
	return (
		<article className="newReleasesList" onClick={() => navigate(`/playing/${id}`)} key={key}>
			<img className="newReleasesList__image" src={src} alt=""/>
			<h1 className="newReleasesList__title">{title}</h1>
			<p className="newReleasesList__artist">{artist}</p>
			<p className="newReleasesList__duration">{totalTracks + ' songs'} </p>
		</article>
	);
}

