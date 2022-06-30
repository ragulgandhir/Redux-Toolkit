import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload
    },
    decrement: (state, action) => {
      state.count -= action.payload
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
    decrementByAmount: (state, action) => {
        state.count -= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

export default counterSlice.reducer