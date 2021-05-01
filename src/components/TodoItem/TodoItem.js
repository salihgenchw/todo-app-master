import React from "react";
import "./TodoItem.css";

function Todo(props) {
  
  const { content, id } = props;
  return <div className="d-flex justify-content-between">
    <p className=" ">{content}</p>
  <button className="btn btn-danger" onClick={() => props.deleteItem(id)}>Sil</button>
  </div>;
}


export default Todo;
