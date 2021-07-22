import React from 'react';
import Checkbox from './Checkbox';

const TodoItem = () => {
  return (
    <div className='flex justify-between my-2'>
      <h2>Todo text</h2>
      <Checkbox />
    </div>
  );
};

export default TodoItem;
