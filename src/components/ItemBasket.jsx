import React, { memo } from 'react';
import styled from 'styled-components';

const BasketContainer = styled.div`
    width: 65%;
    height: 200px;
    background-color: white;
    border-radius: 5px;
    margin:20px 10px;
`;
const ItemBasket = memo(() => {
    return (
        <BasketContainer>
           
        </BasketContainer>
    );
});

export default ItemBasket;