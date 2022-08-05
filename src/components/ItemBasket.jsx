import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {getList} from '../slices/LargeBreadSlice'

const BasketContainer = styled.div`
    width: 65%;
    height: 200px;
    background-color: white;
    border-radius: 5px;
    margin:20px 10px;
`;
const ItemBasket = memo(() => {
    useEffect(()=>console.clear(),[]);

    const {data, error} = useSelector((state)=>state.LargeBreadSlice);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getList());
    }, [dispatch]);

    return (
        <BasketContainer>
                {error?(
                <div>
                <h1>이와 같은 에러가 발생했습니다. <br/> : {error.code}</h1>
                </div>
            ):(
                <div className='itemBox'>
                {data && data.map((v,i)=>(
                    <div key={i} className="itemList">
                        <img className='imageBox' src={v.image} alt={v.name} />
                        <h3>{v.name}</h3>
                        <p>{v.price}</p>
                    </div>
                ))}
                </div>
            )}
        </BasketContainer>
    );
});

export default ItemBasket;