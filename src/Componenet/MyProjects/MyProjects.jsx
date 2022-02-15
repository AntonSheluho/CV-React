import React, { useState } from 'react';
import Container from '../Container/Container';
import ContentBox from '../ContentBox/ContentBox';
import ButtonSwitch from './ButtonSwitch';
import cl from './MyProjects.module.css';
import SlidPost from './SlidPost';
import site from '../../images/progect_1.png';
import midi from '../../images/progect_2.png';


export default function MyProjects() {

    const [slideState, setSlideState] = useState(true) 

    function changeSlide() {
        setSlideState(!slideState);
    }

  return (
    <div id="my_projects" className="body__my_projects">
        <Container>
            <h2 className="my_projects__title title">MY PROJECTS</h2>
            <ContentBox>
                <div className={cl.wrapper}>
                    <ButtonSwitch func={changeSlide} classB={'butt__left'} />
                    {slideState
                        ?   <SlidPost href={"https://antonsheluho.github.io/Diplom/"} src={site} >Diploma project from the course of "Web site development using HTML, CSS, JavaScript"</SlidPost>
                        :   <SlidPost href={"https://antonsheluho.github.io/JavaScript-diplom/"} src={midi} >Diploma project from the course of "JavaScript application development"</SlidPost>
                    }
                    <ButtonSwitch func={changeSlide} classB={'butt__right'} />
                </div>
            </ContentBox>
        </Container>
    </div>
  )
}