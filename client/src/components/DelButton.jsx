import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { useDispatch } from  'react-redux';
import {cleanBasket} from '../slices/BasketSlice'

const DelBtnContainer = styled.form`
  width: 90%;
    margin: auto;
    text-align: center;
    height: 33.3%;
    display: flex;
    align-items: center;
    .delBtn{
        align-items: center;
        background-color: black;
        color: white;
        font-size: 14px;
        font-weight: 700;
        width: 100%;
        height: 90%;
        line-height: 450%;
        border-radius: 5px;
        cursor: pointer;
        &:hover{
            background-color: #ae2a2f;
            color: white;
        }
    }
`;
const DelButton = memo(() => {
    useEffect(()=>console.clear(),[]);

    const dispatch = useDispatch();
    const handleCleanFromBasket = ()=>{
        Swal.fire({
            title: '정말 삭제하시겠습니까?',
            text: "장바구니에 있는 모든 상품이 삭제됩니다.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '전체 삭제',
            cancelButtonText: '취소',
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(cleanBasket());
              Swal.fire(
                '삭제 완료',
                '장바구니가 전체 삭제되었습니다.',
                'success'
              )
            } 
          })
    }
   
    return (
        <DelBtnContainer>
            <div className='delBtn'  onClick={()=>handleCleanFromBasket()}>
                전체삭제
            </div>
        </DelBtnContainer>
    );
});

export default DelButton;