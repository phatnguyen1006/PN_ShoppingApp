import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import TodoForm from '../todolist/TodoForm';
import TodoList from '../todolist/TodoList';
import useTodoState from '../todolist/useTodoState';

import '../todolist/todolist.css';


export default function TodoListWeb(){
  
  // Set to not re Assign todos:
  const { todos, addTodo, deleteTodo } = useTodoState([]); // destructering
  const [isDisabled, setIsDisabled] = useState(false); // Set Begin Value
  
  // Tao State cho isColor 
  const [isColor, setIsColor] = useState(true)


  return (
    <div className='App'>    
      <Typography className='h1' component='h1' variant='h2'>
            Todos
            <span>Get things done, one item at a time.</span>
        </Typography>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};