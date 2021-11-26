import React, { useCallback, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


function App(){
  const [todos, setTodos] = useState([
    {id:1,text: '일정1',checked: true,},
    {id:2,text: '일정2',checked: true,},
    {id:3,text: '일정3',checked: true,},]);
  const [nextId,setnextId]=useState(4);
  const onInsert=useCallback(
    (text) => {
      const todo={
        id: nextId,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      setnextId(nextId+1);
    },
    [todos, nextId]
  )
  const onRemove = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  },
  [todos]);
  const onCheck = useCallback((id) => {
    setTodos(todos.map((todo) => (todo.id===id ? {...todo, checked: !todo.checked}: todo)));
  },[todos]);
  
  
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onCheck={onCheck} />
    </TodoTemplate>
  );
}


export default App;

// concat은 기존배열.concat을 했을 때 배열의 마지막에 추가되도록 할 때 사용
// useCallback은 특정함수를 새로 만들지 않고 재사용하도록 할 때 사용