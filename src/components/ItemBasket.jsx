import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from  'react-redux';


const BasketContainer = styled.div`
    width: 65%;
    height: 200px;
    background-color: white;
    border-radius: 5px;
    margin:20px 10px;
    .itemBox{
        .itemList{ 
            display: flex;
            justify-content: space-around;
            padding: 15px 0;

            .basketItem{
                .imageBox{
                    border: 1px solid #eee;
                    width: 100px;
                    height: 100px;
                    box-sizing: border-box;
                    
                }
                .basketItem-info{
                    width: 100%;

                    text-align: center;
                h3{
                    
                    font-weight: 700;
                    padding: 10px 0 ;
                    font-size: 14px;
                }
                button{
                    border: 2px solid #f0f0f0;
                    border-radius: 5px;
                    background-color: white;
                    padding: 5px 7px;
                    font-size: 12px;
                    font-weight: 100;
                &:hover{
                    background-color: #f0f0f0;
                    color: black;
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
        .basketItem-quantity{
            button{
                border: none;
                border-radius: 5px;
                background-color: #ae2a2f;
                color: white;
                padding: 3px 10px;
                font-size: 16px;
                font-weight: 900;
                &:hover{
                    background-color: white;
                    border: 1px solid #ae2a2f;
                    border-radius: 5px;
                    color: #ae2a2f;
                }
            }
            .count{
                padding: 15px;
            }
        }
    }
}
`;
const ItemBasket = memo(() => {
    useEffect(()=>console.clear(),[]);


    const basket = useSelector((state)=>state.basket);

    return (
        <BasketContainer>
                <div className='itemBox'>
                 {basket.basketItems?.map(basketItem=>(
                    <div key={basketItem.id} className="itemList">
                        <div className='basketItem'>
                            <img className='imageBox' src={basketItem.image} alt={basketItem.name} />
                            <div className='basketItem-info'>
                                <h3>{basketItem.name}</h3>
                                <button>주문삭제</button>
                            </div>
                        </div>
                        <div className='basketItem-price'>{basketItem.price}</div>
                        <div className='basketItem-quantity'>
                            <button>-</button>
                            <div className='count'>{basketItem.basketQuantity}</div>
                            <button>+</button>
                        </div>
                        <div className='total-price'>
                            ${basketItem.price * basketItem.basketQuantity}
                        </div>
                    </div>
                ))}
                </div>

        </BasketContainer>
    );
});

export default ItemBasket;