import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './Componenet/Contacts/Contacts';
import AboutMe from './Componenet/AboutMe/AboutMe';
import Education from './Componenet/Education/Education';
import Page from './page/Page';
import Skills from './Componenet/skills/Skills';
import Languages from './Componenet/Languages/Languages';
import MyProjects from './Componenet/MyProjects/MyProjects';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page/>}>
          <Route index element={<Contacts/>}/>
          <Route path='contacts' element={<Contacts/>}/>
          <Route path='about_me' element={<AboutMe/>}/>
          <Route path='education' element={<Education/>}/>
          <Route path='skills' element={<Skills/>}/>
          <Route path='my_projects' element={<MyProjects/>}/>
          <Route path='my_projects/:id' element={<MyProjects/>}/>
          <Route path='languages' element={<Languages/>}/>
          <Route path='*' element={<h1 style={{color: 'red', textAlign: 'center'}}>Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;