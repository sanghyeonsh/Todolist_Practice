import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoCss/Insert.css';
const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };
//  e.target.value 값을 통하여 onChange가 발생하면 value를 객체에 담겨있는 현재의 텍스트 값으로 바꿈
// 이 값을 밑에 onSubmit으로 Insert시켜줌!
  const onSubmit = (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    };
//e.preventDefault는 이벤트가 일어났을 때 브라우저 고유의 동작을 중단하기 위해 사용(안썼을 때 막 지 혼자 지워짐)
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
      <button type="submit" onSubmit={onSubmit}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;