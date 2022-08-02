import React, { memo } from 'react';
import styled from 'styled-components';

const PayBtn = styled.div`
    width: 90%;
    margin: auto;
    text-align: center;
    height: 33.3%;
    display: flex;
    align-items: center;
    .item-payBtn{
        align-items: center;
        background-color: #d9d8d8;
        color: black;
        font-size: 14px;
        font-weight: 700;
        width: 100%;
        height: 90%;
        line-height: 450%;
        border-radius: 5px;
        &:hover{
            background-color: #fec24a;
            color: white;
        }
    }
`;
const PayButton = memo(() => {
    return (
        <PayBtn>
            <div className='item-payBtn'>
            결제하기
            </div>
        </PayBtn>
    );
});

export default PayButton;