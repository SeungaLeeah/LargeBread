import React, { memo } from 'react';
import styled from 'styled-components';

const ItemBtn = styled.div`
    width: 90%;
    margin: auto;
    text-align: center;
    height: 33.3%;
    display: flex;
    align-items: center;
    
    .item-choseBtn{
        align-items: center;
        background-color: white;
        color: black;
        font-size: 14px;
        font-weight: 700;
        width: 100%;
        height: 90%;
        line-height: 450%;
        border-radius: 5px;
        &:hover{
            background-color: #ae2a2f;
            color: white;
        }
        
    }
`;
const ItemButton = memo(() => {
    return (
        <ItemBtn>
            <div className='item-choseBtn'>
            선택한 상품
            </div>
        </ItemBtn>
    );
});

export default ItemButton;