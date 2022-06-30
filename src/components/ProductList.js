import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';

const ProductList = () => {
	const products = useSelector((state) => state.products);

	return (
		<ul>
			{products.map((product) => (
				<ProductItem  id={product.id} title={product.title} completed={product.completed} />
			))}
		</ul>
	);
};

export default ProductList;