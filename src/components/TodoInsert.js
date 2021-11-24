import React from 'react';
import './TodoCss/Insert.css';
const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할일을 입력하세요"></input>
      <button type="submit">+</button>
    </form>
  );
};

export default TodoInsert;