import React from "react";
import "./TodoItem.css";

function Todo(props) {
  
  const { content } = props;
  return <div className="d-flex justify-content-between" onClick={Cizik}>
    <p className=" ">{content}</p>
  <button className="btn btn-danger" onClick={props.deleteItem}>Sil</button>
  </div>;
}

function Cizik () {

}




export default Todo;
