import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Input from './Input';

function HelloWorld(props) {
  const [isTrue, setIsTrue] = useState(true)
  const [crowd, setCrowd] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDob] = useState('')

  const toggleTrue = () => {
    if (isTrue) {
      setIsTrue(false);
      return
    }
    setIsTrue(true)
  };

  useEffect(() => {
    console.log("useEffect fired");

    let people = [
      {
        id: 1,
        firstName: "Mary",
        lastName: "Jones",
        dob: "1997-05-02",
      },
      {
        id: 2,
        firstName: "Jack",
        lastName: "Smith",
        dob: "1990-02-04",
      }
    ]
    setCrowd(people)
  }, []);

  return (
    <Fragment>
      <hr />
      <h1 className='h1-green'>{props.msg}</h1>
      <hr />
      {isTrue &&
        <Fragment>
          <p>The current value of isTrue is true</p>
          <hr />
        </Fragment>
      }
      <hr />
      {isTrue ? <p>Is true</p> : <p>Is false</p>}
      <hr />
      <a
        href='#!'
        className='btn btn-outline-secondary'
        onClick={toggleTrue}> Toggle isTrue
      </a>
      <hr />

      <form autoComplete='off'>

        <div className='mb-3'>
          <label htmlFor='first-name' className='form-label'></label>

          <Input
            title='First Name'
            type="text"
            name="first-name"
            id="first-name"
            autoComplete='first-name-new'
            className='form-control'
            onChange={(event) => setFirstName(event.target.value)}
          ></Input>
        </div>

        <Input
          title="Last Name"
          type='text'
          name='last-name'
          autoComplete='last-name-new'
          className='form-control'
          onChange={(event) => setLastName(event.target.value)}
        />

        <Input
          title="DOB"
          type='date'
          name='dob'
          autoComplete='dob-new'
          className='form-control'
          onChange={(event) => setDob(event.target.value)}
        />
      </form>

      <div>
        First Name: {firstName} <br />
        Last Name: {lastName} <br />
        DOB: {dob} <br />
      </div>
      <hr />


      <h3>People</h3>
      <ul className='list-group'>
        {crowd.map((person) => (
          <li key={person.id} className='list-group-item'>
            {person.firstName} {person.lastName}
          </li>
        ))}
      </ul>

    </Fragment>
  );
}

export default HelloWorld;