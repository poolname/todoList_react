import "./Editor.css";
import { useState, useRef, memo } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => { // onSubmit 함수 생성
    if (content === "") { // content(입력값)이 비어 있으면
      contentRef.current.focus(); // content 입력하는 곳으로 포커싱
      return; // 빈 문자열이면 onCreate를 호출하지 않도록 반환
    }
    onCreate(content); // onCreate 함수 호출(content 즉 입력값을 전달)
    setContent(""); // setContent를 다시 비워서 초기화
  };

  const onKeyDown = (e) => { // 
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input ref={contentRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown} placeholder="내용을 추가해주세요." />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default memo(Editor);