// import React, { Component } from "react";

// class InputTodo extends Component {
//   state = {
//     title: ""
//   };
//   onChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.addTodoProps(this.state.title);
//     this.setState({
//       title: ""
//     });
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="form-container">
//         <input
//           type="text"
//           className="input-text"
//           placeholder="Add todo..."
//           value={this.state.title}
//           name="title"
//           onChange={this.onChange}
//         />
//         <input type="submit" className="input-submit" value="Submit" />
//       </form>
//     );
//   }
// }
// export default InputTodo;


//NOTES:
//Here we will create the same thing with using React Hooks, based on function instead of Class. We will use useState instead if state.
// the useState Hook returns an array which ALWAYS contains two items. The first item is the current value passed-in (in our case, hello), and the second is a function that will allow us to update the value.
//Unlike the class component, the state doesn’t have to be an object. It can hold an array, number and string (as seen above).
//We convert the class methods to function by adding the const keyword to them. With this simple change, you can call the function within the JSX without using this keyword.
import React, {useState} from "react"

const InputTodo = (props) =>{
    const [inputText, setInputText] = useState({
      title: "",
    })

  const onChange = e =>{
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addTodoProps(inputText.title)
    setInputText({
      title: "",
    })
  }

 return(
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />

      <input type="submit" className="input-submit" value="Submit"/>
    </form>

 )

}

export default InputTodo