import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {},
  isLoggedIn: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserData, setIsLoggedIn } = loginSlice.actions

export default loginSlice.reducer