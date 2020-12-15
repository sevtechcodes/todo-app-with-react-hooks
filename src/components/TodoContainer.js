// import React from "react";
// import TodosList from "./TodosList";
// import Header from "./Header";
// import InputTodo from "./InputTodo";

// import axios from "axios";
// import uuid from "uuid";

// class TodoContainer extends React.Component {
//   state = {
//     todos: [],
//     show: false
//   };

//   handleChange = id => {
//     this.setState({
//       todos: this.state.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       }),
//       show: !this.state.show
//     });
//   };

//   delTodo = id => {
//     this.setState({
//       todos: [
//         ...this.state.todos.filter(todo => {
//           return todo.id !== id;
//         })
//       ]
//     });
//   };

//   addTodoItem = title => {
//     const newTodo = {
//       id: uuid.v4(),
//       title: title,
//       completed: false
//     };
//     this.setState({
//       todos: [...this.state.todos, newTodo]
//     });
//   };

//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
//       .then(response => this.setState({ todos: response.data }));
//   }

//   render() {
//     return (
//       <div className="container">
//         <Header headerSpan={this.state.show} />
//         <InputTodo addTodoProps={this.addTodoItem} />
//         <TodosList
//           todos={this.state.todos}
//           handleChangeProps={this.handleChange}
//           deleteTodoProps={this.delTodo}
//         />
//       </div>
//     );
//   }
// }
// export default TodoContainer;


//NOTES:
// We will rewrite the code with React Hooks 

import React, {useState, useEffect} from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"

import axios from "axios"
import uuid from "uuid"


//we will replicate the lifecycle login in a function component. componentDidmount()
// useState and useEffect Hook to replicate its logic in a function component.
const TodoContainer = props =>{
  const [todos, setTodos] = useState([])
  const [show, setShow] = useState([false])

  const handleChange = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    )
      setShow(!show)
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }
  
  //We will make an HTTP request with using useEffect 
  //you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
// Though, just like the useState Hook, you can also have multiple useEffect to separate unrelated logic.
  useEffect (()=>{
    console.log("Test run")
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response =>setTodos(response.data))

      //we have the equivalent of componentDidMount when the array is empty and componentDidUpdate when it includes variable(s) that will trigger re-rendering.
      // Update the Hook to include the optional array: 
  }, []);

  return (
    <div className="container">
      <Header headerSpan={show} />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList 
        todos={todos}
        handleChangeProps = {handleChange}
        deleteTodoProps = {delTodo}
      />
    </div>
  )
}

export default TodoContainer

