import React, { memo } from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo/logo.png';

const Header = styled.div`
    width: 960px;
    height: 120px;
    margin: 0 auto;
    background-color: red;
    .first-line{
        width: 95%;
        height: 50px;
        margin: auto;

        .icon{
            display: flex;
            flex-direction: row;
            img{
                width: 40px;
                height: 40px;
                margin-top: 10px;
            }
        }
    }
`;

const header = memo(() => {
    return (
        <Header>
            <div className='first-line'>
                <div className='icon'>
                    <img src={logo} alt="mainLogo" />
                    <p>Easy KIOSK</p>
                </div>
            </div>
        </Header>
    );
});

export default header;