// 할 일에 대한 정보가 들어있는 todos배열을
// map을 이용하여 여러개의 TodoItem컴포넌트를 렌더링해줌

import React from 'react';
import TodoItem from './TodoItem';
import './TodoCss/List.css';


const TodoList = ({todos,onRemove,onCheck}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onCheck={onCheck}/>
      ))}
    </div>
  );
};

export default TodoList;