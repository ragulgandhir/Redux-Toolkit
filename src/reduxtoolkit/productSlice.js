import { createSlice, nanoid } from '@reduxjs/toolkit';

export const productSlice = createSlice({
	name: 'products',
	initialState: [],
	reducers: {
		addProduct: (state, action) => {
			const product = {
				id: nanoid(),
				title: action.payload.title,
				completed: false,
			};
			state.push(product);
		},
		saleComplete: (state, action) => {
			const index = state.findIndex((product) => product.id === action.payload.id);
			state[index].completed = action.payload.completed;
		},
		deleteProduct: (state, action) => {
			return state.filter((product) => product.id !== action.payload.id);
		},
	},
});

export const { addProduct, saleComplete, deleteProduct } = productSlice.actions;


export default productSlice.reducer;