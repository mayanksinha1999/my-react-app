import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = props =>{                                           ///This is a class based component made by using const///
  const [personsState,setPersonsState]=useState({               ///We can also use class app extend component and this keyword also///
    persons:[
      {name: "Mayank", age:22},
      {name: "Nandani", age:20},
      {name: "shivam",age: 21}
    ]
  });

  console.log(personsState);

  const switchNameHandler = () =>{
    // console.log("Was Clicked"); 
    setPersonsState({
      persons:[
        {name: "Sinha", age:22},
        {name: "Nandani", age:20},
        {name: "shivam",age: 36}
      ]
    });
  };
  
    return (
      <div className="App">
       <h1> Hi, I'm a React App</h1>
       <p>This is really working!!</p> 
       <button onClick={switchNameHandler}>Switch name</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>

      </div>
    );
    // return React.createElement('div',null,React.createElement('h1',{className:'App'},'DOES IT WORK??'));
  
}

export default app;

*********************************************************************************************************************

///AND THIS IS THE CLASS METHOD USED WITH RENDER///
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state={
    persons:[
      {name: "Mayank", age:22},
      {name: "Nandani", age:20},
      {name: "shivam",age: 21}
    ]
  }

  switchNameHandler = () =>{
    // console.log("Was Clicked"); 
    this.setState({
      persons:[
        {name: "Sinha", age:22},
        {name: "Nandani", age:20},
        {name: "shivam",age: 36}
      ]
    })
  }


  render() {
    return (
      <div className="App">
       <h1> Hi, I'm a React App</h1>
       <p>This is really working!!</p>
       <button onClick={this.switchNameHandler}>Switch name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
    // return React.createElement('div',null,React.createElement('h1',{className:'App'},'DOES IT WORK??'));
  }
}

export default App;


********************************************************************************************************
  IN PERSON.JS FILE WE HAVE
import React from 'react';

const person =(props)=>{
return (
    <div>
        <p>I am {props.name} and I am {props.age} years old.</p>
        <p> {props.children} </p>
    </div>
)
};

export default person;
