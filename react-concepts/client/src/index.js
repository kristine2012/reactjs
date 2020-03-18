import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Person from './Person';


ReactDOM.render( <h1>Learning more react concepts</h1>,document.getElementById('root') );

const heading =<h1>Learning more react concepts</h1>

ReactDOM.render(heading ,document.getElementById('root') );

const headings =(
    <div>
      <h1>Learning more react concepts</h1>
      <h2>more tags can go inside the parent container, must be enclosed within parentheses</h2>

    </div>
)
ReactDOM.render(headings ,document.getElementById('root1') );

class Displayheadings extends React.Component{
  render(){
    return (
      <div>
        <h1>Learning more react concepts from Displayheadings class component</h1>
        <h2>more tags can go inside the parent container, must be enclosed within parentheses</h2>

      </div>
    )
  }
}
ReactDOM.render(<Displayheadings />,document.getElementById('root2'));

//function component
function Printheadings(){

  return (
    <div>
      <h1 className="blue">From function component: Learning more react concepts from Displayheadings class component</h1>
      <h2 className="blue">From function component: more tags can go inside the parent container, must be enclosed within parentheses</h2>

    </div>
  );

}
ReactDOM.render(<Printheadings/>,document.getElementById('root3'));





ReactDOM.render(<Person/>,document.getElementById('root4'));

//give input as props for the class
class Displayname extends React.Component{
  render(){
    return (
      <div>
        <h1>Hi, {this.props.name} Learning more react concepts from Displayheadings class component</h1>
        <h2>more tags can go inside the parent container, must be enclosed within parentheses</h2>

      </div>
    )
  }
}
ReactDOM.render(<Displayname name="David"/>,document.getElementById('root5'));

//class with constructor


// return(
//   <div>
//     <h1>{this.state.firstName}</h1>
//     <h2>{this.state.secondName}</h2>
//
//   </div>
// )
class Mystate extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      firstName:"David",
      secondName:"Smith"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    alert(this);
  }

  render(){
    return(
      <div>
        <h1 className="blue"> {this.props.name} {this.props.age}</h1>
        <button className="green" onClick={this.handleClick}>Click me </button>
      </div>
    )

  }
}
ReactDOM.render(<Mystate name="Daniel" age="43"/>,document.getElementById('root6'));



//calling a function with event, not a good practice but use class component to handle events

function clickEvents(){
  alert("i am clicked");
}

const myElement = (
  <button onClick={clickEvents}> click here </button>

)
ReactDOM.render(myElement,document.getElementById('root7'));
