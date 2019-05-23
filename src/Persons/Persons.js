import React from 'react';
import './Persons.css';

const Persons = ( props ) => {
  return (
    <div className="Persons">
    <div className="card">
<p onClick={props.click}>Name: {props.name}</p>
<p>Title: {props.title}</p>
<p>Age: {props.age}</p>
<input type ="text" onChange={props.changed} value={props.name}/>
</div>

    </div>
  )
};

export default Persons;
