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

            .basketItems{
                width: 180px;
                .basketItems-info{
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
            .basketItems-price,    
            .basketItems-quantity,
            .total-price{
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            .product_price,
            .basketItems-price{
                width: 80px;
            }
        .basketItems-quantity{
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

    const handleRemoveFromBasket = (basketItems)=>{
        dispatch(removeFromBasket(basketItems));
    }
    const handleDecreaseBasket = (basketItems)=>{
        dispatch(DecreaseBasket(basketItems));
    }
    const handleIncreaseBasket = (basketItems)=>{
        dispatch(addToBasket(basketItems));
    }

    const basket = useSelector((state)=>state.basket);
    return (
        <BasketContainer onsubmit="return false">
                <div className='itemBox'>
                 {basket.basketItems?.map(basketItems=>(
                    <div key={basketItems.id} className="itemList">
                        <div className='basketItems'>
                            <div className='basketItems-info'>
                            <input className='product_name' type="text" id="product_name" name="product_name" value={basketItems.product_name} readOnly />
                                <button onClick={()=>handleRemoveFromBasket(basketItems)}>주문삭제</button>
                            </div>
                        </div>
                        <div className='basketItems-price'>
                        <input className='product_price' type="text" id="price" name="price" value={basketItems.price +"원"} readOnly />
                        </div>
                        <div className='basketItems-quantity'>
                            <div className='button' onClick={()=>handleDecreaseBasket(basketItems)}>-</div>
                            <input className='product_count' type="text" id="ItemTotalPrice" name="ItemTotalPrice" value={basketItems.basketQuantity} readOnly />
                            <div className='button' onClick={()=>handleIncreaseBasket(basketItems)}>+</div>
                        </div>
                        <div className='total-price'>
                            <input className='basketItems-price' type="text" id="ItemTotalPrice" name="ItemTotalPrice" value={basketItems.price * basketItems.basketQuantity +"원"} readOnly />
                          </div>
                    </div>
                ))}
                </div>

        </BasketContainer>
    );
});

export default ItemBasket;