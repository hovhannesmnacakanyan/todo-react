import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div className='mt-6'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
