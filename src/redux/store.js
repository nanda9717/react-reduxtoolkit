import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './slices/blogs/blogSlice'

export const store = configureStore({
  reducer:{
    blogs: blogReducer
  }
})