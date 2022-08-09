import React, { memo,useEffect  } from 'react';
import styled from 'styled-components';
import DelButton from './DelButton';
import ItemButton from './ItemButton';
import PayButton from './PayButton';
import {TotalPrice} from '../slices/BasketSlice'
import { useDispatch, useSelector } from 'react-redux';

const ButtonContainer = styled.div`
    width: 30%;
    height: 200px;
    background-color: #f0f0f0;
    border-radius: 5px;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    
    .system-info{
        width: 100%;
        height: 33.3%;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .time-info{
            text-align: center;
            font-weight: 700;
            width: 40%;
            font-size: 14px;
            
            p{
                font-size: 14px;
                b{
                    color: #ae2a2f;
                    font-size: 24px;
                    font-weight: 900;
                }
                
            }
        }
    }
`;

const ItemBox = memo(() => {
    useEffect(()=>console.clear(),[]);
    const {basketTotalAmount} = useSelector((state)=>state.basket);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(TotalPrice())
    },[basketTotalAmount, dispatch]);

    
    return (
        <ButtonContainer>
            <div className='system-info'>
            <div className='time-info'>
                <h3>총 결재금액</h3>
                <p><b>{basketTotalAmount}</b>원</p>
            </div>
            <DelButton/>
            </div>
            <ItemButton/>
            <PayButton/>
        </ButtonContainer>
    );
});

export default ItemBox;