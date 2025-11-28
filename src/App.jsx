import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
// import Exam from "./components/Exam";

import { useState, useRef, useReducer, useCallback } from "react";

const mockupData = [
  {
    id: 2,
    check: false,
    content: "TypeScript 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    check: false,
    content: "Next.js 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 0,
    check: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
];

function reducer (state, action) {
  switch (action.type) {
    case "CREATE" :
      return [action.data, ...state];
    case "UPDATE" :
      return state.map( (todo) => todo.id === action.targetId ? { ...todo, check: !todo.check } : todo );
    case "DELETE" :
       return state.filter( (todo) => todo.id !== action.targetId);
    default:
      return state;
  }
};

function App () {
  const [todos, dispatch] = useReducer(reducer, mockupData);

  const idRef = useRef(3);

  const onCreate = useCallback( (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        check: false,
        content: content,
        date: new Date().getTime(),
      },
    })
  }, []);

  const onCheckUpdate = useCallback( (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  }, []);

  const onDelete = useCallback( (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }, []);

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onCheckUpdate={onCheckUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App;