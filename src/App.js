import React, { Component } from 'react';
import './App.css';
import Persons from './Persons/Persons'

class App extends Component {
state = {
  persons:[
    {name: 'Kati',title: 'designer', age: 28, id:"1"},
    {name: 'Mari',title: 'director', age: 29, id:"2"},
    {name: 'Marianne',title: 'engineer', age: 30, id:"3"},
    {name: 'Marianne',title: 'engineer', age: 30, id:"4"},
    {name: 'Marianne',title: 'engineer', age: 30, id:"5"}
  ],
  showPersons:false
};

/* click on the name area and names are changed */
changeNameHandler = (newName) => {
  this.setState({
    persons:[
      {name: newName,title: 'designer', age: 28},
      {name: 'Karmen',title: 'director', age: 29},
      {name: 'Karita',title: 'engineer', age: 30}
    ]
  })
}
/* click on the button and all names are changed */
changeNameButtonHandler = () => {
  this.setState({
    persons:[
      {name: 'Katri',title: 'designer', age: 28},
      {name: 'Karmen',title: 'director', age: 29},
      {name: 'Karita',title: 'engineer', age: 30}
    ]
  })
}

/* input name appearing on the card */
inputNameHandler = (event, id) => {

const personIndex = this.state.persons.findIndex(
  p =>{
    return p.id===id;
  }
);

const person = {
  ...this.state.persons[personIndex]
};// we take right object and with spread operator we create a new object
//(copy)distribute all atributes from that object

person.name = event.target.value;// we take name and replace it with event.target.value

const persons = [...this.state.persons];//we spread original array
persons[personIndex] = person;//and we put update object back to that array




// and finally we update state updated object, updated array 
  this.setState ({
    persons:persons
  })
}

/*making card visible-invisible*/
togglePersonsHandler = () => {
  const checkToggle =this.state.showPersons;
  this.setState({
    showPersons: !checkToggle
  })
};
  removeItemHandler=(personIndex) =>{
    const persons = [...this.state.persons];
    //const persons=this.state.persons.slice();
    persons.splice(personIndex, 1)
    this.setState({persons : persons});
  }


  render (){
    const buttonStyle = {
      backgroundColor:" blue",
      padding: "10px",
      cursor: "pointer",
      color: "white",
      border: "none",
      borderRadius: "5px"
    }

    let personsIf = null;

    if(this.state.showPersons){
    personsIf = (
      <div className="allcards">
    {this.state.persons.map((p,index) => {
      return <Persons
      click={()=>this.removeItemHandler(index)}
      name={p.name}
      title={p.title}
      age={p.get}
      key = {p.id}
      changed={(event) => this.inputNameHandler(event, p.id)}
      />;

    })}
      </div>

)}
    return (
      <div>
      {personsIf}
      <button style={buttonStyle} onClick={this.changeNameButtonHandler}>Push it</button>
<button onClick={this.togglePersonsHandler}>Invisible</button>
      </div>
    )
  }
};

export default App;
