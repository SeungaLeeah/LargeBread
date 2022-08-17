import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector,useDispatch } from  'react-redux';
import { addToBasket, removeFromBasket, DecreaseBasket } from '../slices/BasketSlice';

const BasketContainer = styled.form`
    width: 65%;
    height: 200px;
    background-color: white;
    border-radius: 5px;
    margin:20px 10px;
    overflow: scroll;
    .itemBox{
        .itemList{ 
            display: flex;
            justify-content: space-evenly;
            padding: 15px 0;

            .basketItem{
                width: 180px;
                .basketItem-info{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                    
                .product_name{
                    width: 100%;
                    font-weight: 700;
                    padding: 10px 0 ;
                    font-size: 14px;
                    color: black;
                    text-align: center;
                }
                button{
                    width: 80px;
                    margin: auto;
                    border: 2px solid #f0f0f0;
                    border-radius: 5px;
                    background-color: white;
                    padding: 5px 7px;
                    font-size: 12px;
                    font-weight: 100;
                    cursor: pointer;
                &:hover{
                    background-color: black;
                    color: white;
                }
                }
                }
            }
            .basketItem-price,    
            .basketItem-quantity,
            .total-price{
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            .product_price,
            .basketItem-price{
                width: 80px;
            }
        .basketItem-quantity{
            width: 180px;
            display: flex;
            justify-content: center;
            .product_count{

                width: 15%;
                text-align: center;
                font-size: 14px;
                font-weight: 500;
            }
            .button{
                border: none;
                border-radius: 5px;
                background-color: #ae2a2f;
                color: white;
                padding: 7px 10px;
                font-size: 16px;
                font-weight: 900;
                cursor: pointer;
                &:hover{
                    background-color: white;
                    border: 1px solid #ae2a2f;
                    border-radius: 5px;
                    color: #ae2a2f;
                }
            }
        }
    }
}
`;
const ItemBasket = memo(() => {
    useEffect(()=>console.clear(),[]);
    const dispatch = useDispatch();

    const handleRemoveFromBasket = (basketItem)=>{
        dispatch(removeFromBasket(basketItem));
    }
    const handleDecreaseBasket = (basketItem)=>{
        dispatch(DecreaseBasket(basketItem));
    }
    const handleIncreaseBasket = (basketItem)=>{
        dispatch(addToBasket(basketItem));
    }

    const basket = useSelector((state)=>state.basket);
    console.log(basket);
    return (
        <BasketContainer onsubmit="return false">
                <div className='itemBox'>
                    {basket.basketItems?.map(basketItem=>(
                        <div key={basketItem.id} className="itemList">
                            <div className='basketItem'>
                                <div className='basketItem-info'>
                                <input className='product_name' type="text" id="product_name" name="product_name" value={basketItem.product_name} readonly />
                                    <button onClick={()=>handleRemoveFromBasket(basketItem)}>주문삭제</button>
                                </div>
                            </div>

                            <div className='basketItem-price'>
                                <input className='product_price' type="text" id="price" name="price" value={basketItem.price +"원"} readonly />
                            </div>

                            <div className='basketItem-quantity'>
                                <div className='button' onClick={()=>handleDecreaseBasket(basketItem)}>-</div>
                                    <input className='product_count' type="text" id="ItemTotalPrice" name="ItemTotalPrice" value={basketItem.basketQuantity} readonly />
                                <div className='button' onClick={()=>handleIncreaseBasket(basketItem)}>+</div>
                            </div>

                            <div className='total-price'>
                                <input className='basketItem-price' type="text" id="ItemTotalPrice" name="ItemTotalPrice" value={basketItem.price * basketItem.basketQuantity +"원"} readonly />
                            </div>
                        </div>
                    ))}
                </div>

        </BasketContainer>
    );
});

export default ItemBasket;