import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '@/redux/slices/todos/todoSlice';

const Profile = () => {

  const dispatch = useDispatch();

  const { todoData, loading, isError } = useSelector((state) => state.todo ); 

  useEffect(()=>{
    dispatch(fetchTodos())
  },[]);

  return (
    <div>
      <h1>Welcome to your Profile!</h1>
      <p>This is a protected route.</p>
      <h3>Todo List</h3>
      <div>
        {
          loading ? <h4>Loading...</h4> : (todoData?.length > 0) ? (todoData?.map((row,index) => <div key={index}>{row.title}</div> )) : 'No Result found'
        }
      </div>
    </div>
  );
};

export default Profile;