import React from 'react';
import { useSelector } from 'react-redux';

const SaleCompleteItems = () => {
	const products = useSelector((state) =>
		state.products.filter((product) => product.completed === true)
	);

	return <h4>Total Saled product: {products.length}</h4>;
};

export default SaleCompleteItems;