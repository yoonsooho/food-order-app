import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "userCart",
  initialState: { CartAmount: 0 },
  reducers: {
    countUp(state, action) {
      if (action) {
        state.CartAmount += +action.payload
      } else {
        state.CartAmount++
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { countUp } = counterSlice.actions

export { counterSlice }
