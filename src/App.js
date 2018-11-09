import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state =  { person:
    [
      {id:"e1" ,name:"khirod", age:24},
      {id:"aed" ,name:"Ajith",age:34},
      {id:"21" ,name:"sam",age:23}

    ]

  };

buttonclickHandler =(newName)=>{
// console.log(`i am clicked`);
this.setState({
  person:
  [
    {name:"Snigdha", age:24},
    {name:newName,age:34},
    {name:"Miki",age:23}

  ],
  toggleState : false


})
};
nameChangeHandler = (event) =>{
  this.setState({
    person:
    [
      {name:"khirod", age:24},
      {name:event.target.value,age:34},
      {name:"Miki",age:23}

    ]


  })

};
//delete a person on clock of the person
deletePersonHandler =(personindex) =>{
 //const person=this.state.person.slice;
 const person =[...this.state.person];
 person.splice(personindex,1);
 this.setState({person:person})
// console.log(`index is ${personindex}`)

};

toggleParagraphHandler= () =>{
  const currentToggleState = this.state.toggleState;
  this.setState({toggleState : !currentToggleState})

};

  render() {

const style ={

  backgroundColor: "green",
  color:"white",
  font:"inherit",
  textAlign: "center",
  padding: "8px",
  curson: "pointer"
}
let classes=[];
let Persons =null;
if(this.state.toggleState){
   Persons =(

          <div>

            {this.state.person.map((eachPerson,index )=> {
                return <Person
                click     = {()=>this.deletePersonHandler(index)}
                name      = {eachPerson.name}
                age       = {eachPerson.age}
                key       = {eachPerson.id}
                change    = {this.nameChangeHandler}/>

            })



            }
          {/* <Person name = {this.state.person[0].name}
                  age= {this.state.person[0].age} > </Person>
          <Person name = {this.state.person[1].name}
                  age= {this.state.person[1].age}
                  click={this.buttonclickHandler.bind(this,"myNewName")}
                  change={this.nameChangeHandler}> Hello I am Child </Person>
          <Person name = {this.state.person[2].name}
                  age= {this.state.person[2].age} > </Person> */}

        </div>

 )

 style.backgroundColor ="red";
 style.color="blue";




 if(this.state.person.length <=2){
  classes.push('red');


 }
 if(this.state.person.length <=1){
   classes.push('bold');
 }

};

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')}>This is awesome !</p>
        <button
        // onClick={this.buttonclickHandler.bind(this,"myFirstname")}
        onClick={this.toggleParagraphHandler}
        style={style}>
        Click Me
        </button>
        {Persons}


      </div>
    );
  }
};

export default App;
