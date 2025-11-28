import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, check, content, date, onCheckUpdate, onDelete }) => {
  const onChageCheckbox = () => {
    onCheckUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input checked={check} onChange={onChageCheckbox} className="check" type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
};

export default memo(TodoItem);