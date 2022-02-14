import React from 'react';
import './App.css';
import Contacts from './Componenet/Contacts/Contacts.jsx';
import AboutMe from './Componenet/AboutMe/AboutMe.jsx';
import Education from './Componenet/Education/Education.jsx';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';



function NavRouter() {

  // const [value, setValue] = useState('');
  // const inputRef = useRef();
  // const addNewPost = (event) => {
  //   event.preventDefault();
  //   console.log(value);
  //   console.log(inputRef.current.value);
  // }

  return (
    <div>
      <Contacts/>
      <AboutMe/>
      <Education/>
    </div>
  );
}

export default NavRouter;