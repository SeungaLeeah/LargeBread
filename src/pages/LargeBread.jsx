import React, { memo } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';


const LargeBreadContainer = styled.div`
    width: 960px;
    height: 100vh;
    margin: 0 auto;
    border: 3px solid gray;
`;
const LargeBread = memo(() => {
    return (
        <LargeBreadContainer>
            <Header/>
            

        </LargeBreadContainer>
    );
});

export default LargeBread;