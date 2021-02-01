import './FeaturedCard.scss';

export default function FeaturedCard({ item }) {
	return (
		<article className="featuredCard">
			<img src={item.images[0].url} alt="" className="featuredCard__image" />
		</article>
	);
}
