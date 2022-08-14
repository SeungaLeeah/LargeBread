import React, { memo, useCallback } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const PayBtn = styled.div`
    width: 90%;
    margin: auto;
    text-align: center;
    height: 33.3%;
    display: flex;
    align-items: center;
    .item-payBtn{
        align-items: center;
        background-color: #d9d8d8;
        color: black;
        font-size: 14px;
        font-weight: 700;
        width: 100%;
        height: 90%;
        line-height: 450%;
        border-radius: 5px;
        cursor: pointer;
        &:hover{
            background-color: #fec24a;
            color: white;
        }
    }
`;
const PayButton = memo(() => {
    const PaySwal = withReactContent(Swal);
    const navigate = useNavigate();

    // Promise 방식을 사용한 다이얼로그
    const onButton1Click = useCallback(() => {
        let timerInterval
        PaySwal.fire({
            title: '결제중 입니다.',
            html: '잠시만 기다려주세요.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
          
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              navigate("/");
              PaySwal.fire({
                icon: 'success',
                title:'결제가 완료되었습니다.'
              });
            }
          })
    }, [PaySwal,navigate]);
    return (
        <PayBtn>
            <div  onClick={onButton1Click} className='item-payBtn'>
            결제하기
            </div>
        </PayBtn>
    );
});

export default PayButton;