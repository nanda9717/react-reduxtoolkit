import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogList: [
            { id:1, title:'Title One', body:'Body One Here'},
            { id:2, title:'Title Two', body:'Body Two Here'},
            { id:3, title:'Title Three', body:'Body Three Here'},
            { id:4, title:'Title Four', body:'Body Four Here'},
            { id:5, title:'Title Five', body:'Body Five Here'}
        ],
}

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setNewBlog: (state, action) => {
      state.blogList = [...state.blogList, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { setNewBlog } = blogSlice.actions

export default blogSlice.reducer