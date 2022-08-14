import React, { memo } from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo/logo.png'

const MainPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .logoImg{
        width:350px;  
        height: 350px;
        position: absolute;
        top: 27%;
        img{
            width: 350px;
        }
  
        .startBtn{
            width: 350px;
            height: 30px;
            text-align: center;
            margin-top: 20px;
            button{
                border: 3px solid  #fec24a;
                font-size: 28px;
                padding: 8px 25px;
                background-color: white;
                font-weight: bold;
                border-radius: 5px;
                color: #595959;

                &:hover{
                    background-color: #fec24a;
                    color: white;
                }
            }
            p{
                font-size: 14px;
                margin-top: 10px;
            }
        }
    }
`;
const StartPage = memo(() => {
    return (
        <MainPageContainer>
            <div className='logoImg'>
            <img src={logo} alt="Logo" />
            

            <div className='startBtn'>
                <button>주문하기</button>
                <p>*주문하기를 눌러주세요</p>
            </div>
            </div>
        </MainPageContainer>
    );
});

export default StartPage;