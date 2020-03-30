import React from 'react';
import ReactDOM from 'react-dom';

// App组件, 大写字母开头
import TodoList from './TodoList';


ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);


