import React from "react";
import Container from "../Container/Container";
import ContentBox from "../ContentBox/ContentBox";
import '../../Styles/Style.css'
import Post from "./Post";
import PostWithLink from "./PostWithLink";


const  Education = React.forwardRef((props, ref) => {

    return (
        <div id="education" className="body__education">
            <Container>
                <h2 className="education__title title">EDUCATION AND WORK EXPERIENCE</h2>
                <ContentBox>
                    <div className="educational_ladder">
                        <div className="educationalLadderAndWorkExperience__title">EDUCATION</div>
                        <PostWithLink date={'September 2021 - January 2022'} post={'Courses FD2 "JavaScript application development" from-'} />
                        <PostWithLink date={'June 2021 - August 2021'} post={'Courses FD1 "Web site development with HTML, CSS and JavaScript" from-'} />
                        <Post date={'2014 - 2017'} post={'Brest State University named after A.S. Pushkin, faculty of law, specialty jurisprudence'} />
                        <Post date={'2009 - 2012'} post={'Baranovichi State Professional Lyceum of Mechanical Engineering, electrician'} />
                        <div className="workExperience">
                            <div className="educationalLadderAndWorkExperience__title">WORK EXPERIENCE</div>
                            <Post date={'July 2014 - August 2021'} post={'"Stroytrest No. 25", branch "BM No. 172", an electrician installer, 5 category from 2017'} />
                        </div>
                    </div>
                </ContentBox>
            </Container>       
        </div>
       
    )
})

export default Education