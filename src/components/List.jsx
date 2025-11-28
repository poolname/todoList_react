import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, memo } from "react";

const List = ({ todos, onCheckUpdate, onDelete }) => {
  const [search, setSearch] = useState(""); // search 상태 업데이트 함수 생성 초기값 ""

  const onChangeSearch = (e) => { // onChangeSearch 이벤트 값 받는 함수 생성
    setSearch(e.target.value); // 상태 업데이트 값을 입력값으로 받음
  };

  const getFilterData = () => { // 필터링함수 생성
    if (search === "") { // 입력값이 빈칸이면
      return todos; // todos 원본 데이터 반환 (App 컴포넌트의 mockupData)
    }
    return todos.filter( (todo) => // 원본 데이터의 필터 메서드 (매개변수 todo)
      todo.content.toLowerCase().includes(search.toLowerCase()) // todo의 컨텐츠(입력받는 내용 및 원본 데이터, 목업 데이터)를 소문자로 변경
      // includes로 검색하려는 내용이 들어있는지 확인, 검색하려는 내용도 소문자로 변경
    );
  };

  const filterTodos = getFilterData(); // map 메서드 사용을 위해 함수를 변수화 시킴

     
  const { totalCount, doneCount, notDoneCount } = useMemo( () => {
    const totalCount = todos.length;
    const doneCount = todos.filter( (todo) => todo.check).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]);


  return (
    <div className="List">
      <div className="todos_search">
        <h2>Todo List 📓</h2>
        <p>
          작성하고 싶은 내용을 입력하여 추가해보세요. 수정 및 삭제도 할 수
          있습니다.
        </p>

        <div>
          <p>totalCount : {totalCount}</p>
          <p>doneCount : {doneCount}</p>
          <p>notDoneCount : {notDoneCount}</p>
        </div>
        
        <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력해주세요." />        
        <div className="todos_wrapper">
          {filterTodos.map( (todo) => {
            return <TodoItem key={todo.id} {...todo} onCheckUpdate={onCheckUpdate} onDelete={onDelete} />
          })}
        </div>
      </div>
    </div>
  )
};

export default memo(List);