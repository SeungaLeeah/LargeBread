import React, { memo } from 'react';
import styled from 'styled-components';
import SingleItem from './SingleItem';

const ItemListContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
   
`;
const ItemList = memo(() => {
    return (
        <ItemListContainer>
            <SingleItem/>
        </ItemListContainer>
    );
});

export default ItemList;