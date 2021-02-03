import { Link, navigate } from '@reach/router';
import './FeaturedCard.scss';

export default function FeaturedCard({ item, id, src }) {
	return (
		<article className="featuredCard" onClick={() => navigate(`/playlists/${id}`)}>
			<img src={src} alt="" className="featuredCard__image" />
			<p className="featuredCard__description">
				<Link to={`/playlists/${id}`}>{item.name}</Link>
			</p>
		</article>
	);
}
