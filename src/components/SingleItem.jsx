import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {getLargeBread} from '../slices/LargeBreadSlice';

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
        }
    }
`;
const SingleItem = memo(() => {
 
    useEffect(()=>console.clear(),[]);

    const {data, error} = useSelector((state)=>state.LargeBread);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getLargeBread());
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
                    <div key={i} className="itemList">
                        <img className='imageBox' src={v.image} alt={v.name} />
                        <h3>{v.name}</h3>
                        <p>{v.price}</p>
                    </div>
                ))}
                </div>
            )}
        </SingleItemContainer>
    );
});

export default SingleItem;