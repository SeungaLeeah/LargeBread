import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {getList} from '../slices/LargeBreadSlice';
import {addToBasket} from '../slices/BasketSlice';

const SingleItemContainer = styled.div`
height: 100%;
width: 100%;
    .itemBox{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
  
        .itemList{
            text-align: center;
            margin: auto;
            padding: 10px 0;
            .imageBox{
                width: 150px;
                height: 150px;
                box-sizing: border-box;
                margin: 10px; 
            }
            h3{
                font-weight: 700;
                padding:5px 0 ;
            }
            P{
                padding-bottom:10px;
            }
            .choice{
                width: 150px;
                height: 40px;
                border-radius: 5px;
                margin: auto;
                border: 2px solid #ae2a2f;
                font-weight: 700;
                color: #222;
                &:hover{
                    background-color: #ae2a2f;
                    color: white;
                    
                }
            }
        }
    }
`;
const SingleItem = memo(() => {
 
    useEffect(()=>console.clear(),[]);

    const {data,loading, error} = useSelector((state)=>state.LargeBreadSlice);
    const dispatch = useDispatch();

    const handleAddToBasket =(i) =>{
        dispatch(addToBasket(i));    
    }

    useEffect(()=>{
        dispatch(getList());
    }, [dispatch]);
    
    
    return (
        <SingleItemContainer>
            {data && data.data.item.map((v, i) => {
                return(
                    <>
                        <img className='imageBox' src={'http://localhost:3001/'+ v.img_url} alt={v.product_name} />
                        <h3>{v.product_name}</h3>
                        <p>{v.price}원</p>
                    </>
                );
            })}
        </SingleItemContainer>
    );
});

export default SingleItem;