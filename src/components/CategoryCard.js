import './CategoryCard.scss';
import { BsThreeDots } from 'react-icons/bs';
export default function CategoryCard({ item }) {
	return (
		<>
			<article className="categoryCard" style={{ backgroundColor: item.color }}>
				<p className="categoryCard__category">{item.category}</p>
				<button className="categoryCard__btn">
					<BsThreeDots className="categoryCard__btn__icon" />
				</button>
			</article>
		</>
	);
}
