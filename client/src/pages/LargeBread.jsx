import React, { memo } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer'
import ItemList from '../components/ItemList';


const LargeBreadContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;

    background-color: #f0f0f0;
`;
const LargeBread = memo(() => {
    return (
        <LargeBreadContainer>
            <Header/>
            <ItemList/>
            <Footer/>
        </LargeBreadContainer>
    );
});

export default LargeBread;