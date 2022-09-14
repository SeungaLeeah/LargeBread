import React, { memo } from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo/logo.png';
import { NavLink} from 'react-router-dom';

const Header = styled.div`
    width: 100%;
    height: 150px;
    margin: 0 auto;
    background-color: #fec24a;
    .first-line{
        width: 90%;
        height: 40px;
        margin: auto;

        .icon{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            .logo{
                width: 60px;
                height: 60px;
                margin-top: 10px;
            }
            .title{
                color: white;
                font-size: 24px;
                font-weight: 700;
            }
        }
    }
    .main-menu{
        width: 90%;
        height: 120px;
        margin: auto;
        

        .category{
            display: block;
            margin-top: 50px;
           
            ul{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                line-height: 40px;
                
            
            }
        }
    }
`;
const ManuLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    
    padding: 10px 30px;
    cursor: pointer;
    &.active{
        background-color: #f0f0f0;
        color: #ae2a2f;
        border-radius: 5px 5px 0 0;
    }
    &:hover{
            background-color: #f0f0f0;
            color: #ae2a2f;
            border-radius: 5px 5px 0 0;
        }  
`;

const header = memo(() => {
    
    return (
        <Header>
            <div className='first-line'>
                <div className='icon'>
                    <img className='logo' src={logo} alt="mainLogo" />
                    <p className='title'>Easy KIOSK</p>
                    <div className='empty'></div>
                </div>
            </div>
            <div className='main-menu'>
                <div className='category'>
                    <ul>
                        <ManuLink to='/product/1'>케이크</ManuLink>
                        <ManuLink to='/product/2'>마카롱</ManuLink>
                        <ManuLink to='/product/3'>빵</ManuLink>
                        <ManuLink to='/product/4'>쿠키</ManuLink>
                        <ManuLink to='/product/5'>샌드위치</ManuLink>
                        <ManuLink to='/product/6'>크로플</ManuLink>
                        <ManuLink to='/product/7'>기타</ManuLink>
                    </ul>
                </div>
            </div>
        </Header>
    );
});

export default header;