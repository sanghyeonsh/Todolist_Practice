// 만들 투두리스트의 레이아웃을 설정하는 컴포넌트
// 페이지의 중앙에 있는 흰색박스

import React from 'react';
import './TodoCss/Template.css';

const TodoTemplate = ({children}) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;