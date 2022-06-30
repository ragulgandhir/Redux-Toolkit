import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import counterReducer from './counterSlice'
import filmReducer from './filmSlice'

export default configureStore({
	reducer: {
		counter: counterReducer,
		products: productReducer,
		film: filmReducer,
		
	},
});