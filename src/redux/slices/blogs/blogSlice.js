import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogList: [],
  loading: false
}

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogList: (state, action) => {
      state.blogList = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBlogList, setLoading } = blogSlice.actions

export default blogSlice.reducer