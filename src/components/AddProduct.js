import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../reduxtoolkit/productSlice';

const AddProduct = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addProduct({
					title: value,
				})
			);
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Product Name: </label>
			<input
				type='text'
				placeholder='product name...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit'>
				Submit
			</button>
		</form>
	);
};

export default AddProduct;