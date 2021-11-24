// 할 일에 대한 정보를 렌더링해줌
// 할 일의 완료 여부 토글
// 할 일에 대한 정보가 들어있는 todos배열을
// map을 이용하여 여러개의 TodoItem컴포넌트를 렌더링해줌
import React from 'react';
import './TodoCss/Item.css';
const TodoItem = () => {
  return (
    <div className="TodoItem">
      <div className="checkbox">
        <div className="text">할 일</div>
      </div>
      <div className="remove"></div>
    </div>
  );
};

export default TodoItem;
