import React from "react";
import Container from "../Container/Container";
import ContentBox from '../ContentBox/ContentBox.jsx';
import ContactsData from "./ContactsData/ContactsData";

const Contacts = (props) => {
    return (
        <div id="contacts" className="body__contacts">
            <Container>
                <ContentBox>
                 <ContactsData/>
                </ContentBox>
            </Container>
        </div>
    )
}

export default Contacts