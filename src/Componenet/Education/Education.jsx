import React from "react";
import Container from "../Container/Container";
import ContentBox from "../ContentBox/ContentBox";
import '../../Styles/Style.css'


const  Education = React.forwardRef((props, ref) => {

    return (
        <div id="education" className="body__education">
            <Container>
                <h2 className="education__title title">EDUCATION AND WORK EXPERIENCE</h2>
                <ContentBox>
                    <div className="educational_ladder">
                        <div className="educationalLadderAndWorkExperience__title">EDUCATION</div>
                        <div className="education__type">
                            <div className="education__years">September 2021 - January 2022</div>
                            <div className="education__called">Courses FD2 "JavaScript application development" from-  
                                <a className="IT_link" href="https://www.it-academy.by/course/front-end-developer/">IT-Academy</a>
                            </div>
                        </div>
                        <div className="education__type">
                            <div className="education__years">June 2021 - August 2021</div>
                            <div className="education__called">Courses FD1 "Web site development with HTML, CSS and JavaScript" from- 
                                <a className="IT_link" href="https://www.it-academy.by/course/front-end-developer/">IT-Academy</a>
                            </div>
                        </div>
                        <div className="education__type">
                            <div className="education__years">2014 - 2017</div>
                            <div className="education__called">Brest State University named after A.S. Pushkin, faculty of law, specialty jurisprudence</div>
                        </div>
                        <div className="education__type">
                            <div className="education__years">2009 - 2012</div>
                            <div className="education__called">Baranovichi State Professional Lyceum of Mechanical Engineering, electrician</div>
                        </div>
                        <div className="workExperience">
                            <div className="educationalLadderAndWorkExperience__title">WORK EXPERIENCE</div>
                            <div className="education__type">
                                <div className="education__years">July 2014 - August 2021</div>
                                <div className="education__called">"Stroytrest No. 25", branch "BM No. 172", an electrician installer, 5 category from 2017</div>
                            </div>
                        </div>
                    </div>
                </ContentBox>
            </Container>       
        </div>
       
    )
})

export default Education