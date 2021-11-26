import React from 'react';
import {MdCheckBoxOutlineBlank,MdCheckBox,MdRemoveCircleOutline} from 'react-icons/md';
import cn from 'classnames';
import './TodoCss/Item.scss';
const TodoItem = ({todo, onRemove, onCheck}) => {
  const {id, text, checked} = todo;
  return (
    <div className="TodoItem">
      <div className={cn("checkbox",{checked})} onClick={()=>onCheck(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoItem;

// import cn 여러 종류의 값을 전달해야 하는 경우에 classnames를 사용해서 객체로 통째로 전달하기 위해 사용