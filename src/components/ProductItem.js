
import React from 'react';
import { useDispatch } from 'react-redux';
import { saleComplete, deleteProduct } from '../reduxtoolkit/productSlice';

const ProductItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(saleComplete({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteProduct({ id }));
	};

	return (
		<li>
			<div>
				<span>
					<input
						type='checkbox'
						onClick={handleCheckboxClick}
						checked={completed}
					></input>
					{title}
				</span>
				<button onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
		</li>
	);
};

export default ProductItem;