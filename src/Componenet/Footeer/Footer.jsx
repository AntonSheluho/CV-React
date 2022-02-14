import React from "react";
import Container from "../Container/Container";
import '../../Styles/Style.css';

const Footer = (props) => {
    return (
        <footer className="body__footer">
            <Container>
                <div className="footer">
                    <div className="footer__data_create">Creation date 04.02.2022 
                        <a className="data_create__link" href="https://github.com/"> GitHub</a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
export default Footer