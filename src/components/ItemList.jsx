import React, { memo } from 'react';
import styled from 'styled-components';
import SingleItem from './SingleItem';

const ItemListContainer = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: row;
    margin: auto;
    padding: 30px 0;
    
   
`;
const ItemList = memo(() => {
    return (
        <ItemListContainer>
        <SingleItem/>
        </ItemListContainer>
    );
});

export default ItemList;