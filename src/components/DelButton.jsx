import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from  'react-redux';
import {cleanBasket} from '../slices/BasketSlice'

const DelBtn = styled.div`
width:30%;
    font-size: 14px;
    font-weight: 700;
    color: white;
    background-color: #4c4747;
    text-align: center;
    padding: 25px 17px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: black;
    
    }   
`;
const DelButton = memo(() => {
    useEffect(()=>console.clear(),[]);
    const dispatch = useDispatch();

    const handleCleanFromBasket = ()=>{
        dispatch(cleanBasket());
    }
   
    return (
        <DelBtn  onClick={()=>handleCleanFromBasket()}>
            전체삭제
        </DelBtn>
    );
});

export default DelButton;