import React from "react";
import Container from "../Container/Container";
import ContentBox from "../ContentBox/ContentBox";
import style from './AboutMe.module.css';
import video from '../../video/video_2021-12-17_09-30-09 (online-video-cutter.com).mp4'

const AboutMe = (props) => {
    return (
        <div id="about_me" className="body__about_me">
            <Container>
                <h2 className={style.title}>ABOUT ME</h2>
                <ContentBox className={style.about_me__content}>
                    <video className={style.about_me__iframe} src={video} controls></video>
                </ContentBox>
            </Container>
        </div>
    )
}

export default AboutMe

// "about_me__title "