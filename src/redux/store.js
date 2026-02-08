import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blogs/blogSlice';
import loginReducer from './slices/login/loginSlice';
import todoReducer from './slices/todos/todoSlice';

export const store = configureStore({
  reducer:{
    blogs: blogReducer,
    login: loginReducer,
    todo: todoReducer,
  }
})