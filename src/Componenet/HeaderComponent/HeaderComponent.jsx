import React from 'react';
import Container from '../Container/Container.jsx';
import Header from './Header/header.jsx';

const HeaderComponent = (props) => {
    return (
        <header className="body__title">
            <Container>
                <Header></Header>
            </Container> 
        </header>
    )
}

export default HeaderComponent