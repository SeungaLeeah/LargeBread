import React, { memo } from 'react';
import styled from 'styled-components';

const SingleItemContainer = styled.div`
margin: 30px 0;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
div{
    width: 150px;
    height: 150px;
    background-color: white;
    box-sizing: border-box;
    margin: 10px;
    
}
`;
const SingleItem = memo(() => {
    return (
        <SingleItemContainer>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </SingleItemContainer>
    );
});

export default SingleItem;