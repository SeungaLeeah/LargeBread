import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from  'react-redux';
import {getList} from '../slices/LargeBreadSlice'

const BasketContainer = styled.div`
    width: 65%;
    height: 200px;
    background-color: white;
    border-radius: 5px;
    margin:20px 10px;
    .itemBox{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
  
        .itemList{
            text-align: center;
            margin: auto;
            padding: 15px 0;
            .imageBox{
                border: 1px solid #eee;
                width: 100px;
                height: 100px;
                box-sizing: border-box;
                margin: 10px; 
            }
            h3{
                font-weight: 700;
                padding: 5px 0 ;
                font-size: 14px;
            }
            P{
                padding-top: 5px;
                font-size: 12px;
            }
        }
    }
`;
const ItemBasket = memo(() => {
    useEffect(()=>console.clear(),[]);
    useEffect(()=>console.clear(),[]);

    const {data,loading, error} = useSelector((state)=>state.LargeBreadSlice);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getList());
    }, [dispatch]);
    console.log(data);
    
    return (
        <BasketContainer>
                {loading ?(
                    <p> Loading...</p>
                ): error?(
                <div>
                <h1>이와 같은 에러가 발생했습니다. <br/> : {error.code}</h1>
                </div>
            ):(
                <div className='itemBox'>
                 {data && data.map((v,i)=>(
                    <div key={i} className="itemList">
                        <img className='imageBox' src={v.image} alt={v.name} />
                        <h3>{v.name}</h3>
                        <p>총 갯수</p>

                    </div>
                ))}
                </div>
            )}
        </BasketContainer>
    );
});

export default ItemBasket;