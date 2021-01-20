import './FeaturedCard.scss';

export default function FeaturedCard({ item }) {
	return (
		<article className="featuredCard">
			<img src={item.bgImage} alt="" className="featuredCard__image" />
			<h1 className="featuredCard__title">{item.title}</h1>
			<p className="featuredCard__description">{item.description}</p>
		</article>
	);
}
