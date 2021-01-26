import './CategoryCard.scss';
import { BsThreeDots } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
export default function CategoryCard({ item }) {
	return (
		<>
			<details className="categoryCard">
				<summary className="categoryCard__category" style={{ backgroundColor: item.color }}>
					<p className="categoryCard__title">{item.category}</p>
					<button className="categoryCard__btn">
						<BsThreeDots className="categoryCard__btn__icon" />
					</button>
				</summary>
				<div className="categoryCard__sub">
					<p className="categoryCard__sub__text">{item.subcategory[0]} </p>
					<button className="categoryCard__sub__btn">
						<IoIosArrowForward />
					</button>
				</div>
			</details>
		</>
	);
}
