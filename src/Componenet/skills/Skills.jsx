import React from 'react';
import Container from '../Container/Container';
import ContentBox from '../ContentBox/ContentBox';
import logo from '../../images/logo-it-academy.png';
import images from '../../images/images.jpg';
import sertificate from '../../images/sertificate.png';
import sertificate2 from '../../images/sertificate2.png';
import angular from '../../images/angular.png';
import GitHub from '../../images/GitHub.jpg';
import bem from '../../images/bem.png';
import js from '../../images/2GADRz4E6CxENr7vnYcS.png';
import re from '../../images/react.png';
import Course from './Course';
import OtherSkills from './OtherSkills';

const Skills = () => {
    return (
        <div id="skills" className="body__skills">
            <Container>
                <h2 className="skills__title title">SKILLS IN PROGRAMMING</h2>
                <ContentBox>
                <div className="skills__content content_box">
                    <ul>
                        <li className="skills__type">Studied javascript on my own on<span> </span> 
                            <a className="skill_link" href="https://learn.javascript.ru/">learn.javascript.ru</a>
                        </li>
                        <Course logo={logo} images={images} sertificate={sertificate} >Course: Web site development using HTML, CSS, JavaScript</Course>
                        <Course logo={logo} images={js} sertificate={sertificate2} >Course: Web application development with JavaScript</Course>
                        <OtherSkills name={re} text={'React'}>React</OtherSkills>
                        <OtherSkills name={angular} text={'Angular'}>Angular</OtherSkills>
                        <OtherSkills name={GitHub} text={'git_hub'}>GitHub</OtherSkills>
                        <OtherSkills name={bem} text={'BEM_methodology'}>BEM methodology</OtherSkills>
                    </ul>
                </div>
                </ContentBox>
            </Container>  
        </div>
    );
}

export default Skills;
