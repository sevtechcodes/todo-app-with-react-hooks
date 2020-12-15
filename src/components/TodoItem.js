// import React from "react";

// class TodoItem extends React.Component {
//   componentWillUnmount() {
//     alert("Item about to be deleted!");
//   }

//   render() {
//     const completedStyle = {
//       fontStyle: "italic",
//       color: "#d35e0f",
//       opacity: 0.4,
//       textDecoration: "line-through"
//     };

//     const { completed, id, title } = this.props.todo;

//     return (
//       <li className="todo-item">
//         <input
//           type="checkbox"
//           checked={completed}
//           onChange={() => this.props.handleChangeProps(id)}
//         />
//         <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
//         <span style={completed ? completedStyle : null}>{title}</span>
//       </li>
//     );
//   }
// }

// export default TodoItem;


//NOTE: Re-write it with React Hooks
//We will check the componentWillUnmount and change it with useEffect

import React, {useEffect} from "react"

const TodoItem = props =>{
  const completedStyle ={
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const {completed, id, title} = props.todo

  //when the component is about the unmount, return function will be called.
  useEffect(() => {
    return() => {
      alert ("About to be deleted. Are you sure?")
    }
  }, [])

  return(
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={()=>props.handleChangeProps(id)}
      />

      <button onClick={()=> props.deleteTodoProps(id)}>DELETE</button>
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  )
}

export default TodoItem