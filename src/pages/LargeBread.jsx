import React, { memo } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer'

const LargeBreadContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;

    background-color: #f0f0f0;
`;
const LargeBread = memo(() => {
    return (
        <LargeBreadContainer>
            <Header/>
            
            <Footer/>
        </LargeBreadContainer>
    );
});

export default LargeBread;