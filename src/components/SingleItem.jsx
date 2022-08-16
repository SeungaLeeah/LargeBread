import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {getItem} from '../slices/LargeBreadSlice';
import {addToBasket} from '../slices/BasketSlice';
import {useNavigate, useParams} from 'react-router-dom';

const SingleItemContainer = styled.div`
height: 100%;
width: 100%;
margin: auto;
    .itemBox{
        display: flex;
        flex-direction: row;
        justify-content: left;
        flex-wrap: wrap;
  
        .itemList{
            text-align: center;
            padding: 10px 15px;
            .imageBox{
                width: 150px;
                height: 150px;
                box-sizing: border-box;
                margin: 10px; 
            }
            h3{
                font-weight: 700;
                padding:5px 0;
                font-size: 14px;
                
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
                cursor: pointer;
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
    const navigate = useNavigate();
    const handleAddToBasket =(item) =>{
        dispatch(addToBasket(item));    
    };
    const params = useParams();
 

    useEffect(()=>{
        dispatch(getItem({
            category_id: params.category_id
        }));
        navigate(`/product/${params.category_id}`);
    }, [dispatch, navigate,params.category_id]);

    
    return (
        <SingleItemContainer>
            {loading ?(
                    <p> Loading...</p>
                ): error?(
                <div>
                    <h1>이와 같은 에러가 발생했습니다. <br/> : {error.code}</h1>
                </div>
            ):(
                <div className='itemBox'>
            {data && data.data.item.map((v, i) => {
                return(
                    <div className="itemList" key={i}>
                    <img className='imageBox'src={'http://localhost:3001/'+ v.img_url} alt={v.product_name}  />
                    <h3>{v.product_name}</h3>
                    <p>{v.price}원</p>
                    <button onClick={()=> handleAddToBasket(v)} className='choice' data-id={v.id}>
                        선택하기
                    </button>
                </div>
               );
            })}
                 </div>
            )}
        </SingleItemContainer>
    );
});

export default SingleItem;