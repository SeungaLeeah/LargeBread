import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {getList} from '../slices/LargeBreadSlice';

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

    const {data, error} = useSelector((state)=>state.LargeBreadSlice);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getList());
    }, [dispatch]);

    return (
        <SingleItemContainer>
            {error?(
                <div>
                    <h1>{error.code}이러한 에러가 발생했습니다.</h1>
                </div>
            ):(
                <div className='itemBox'>
                {data && data.map((v,i)=>(
                    <div key={v.id} className="itemList">
                        <img className='imageBox' src={v.image} alt={v.name} />
                        <h3>{v.name}</h3>
                        <p>{v.price}</p>
                        <button className='choice' data-id={v.id}>선택하기</button>
                    </div>
                ))}
                </div>
            )}
        </SingleItemContainer>
    );
});

export default SingleItem;