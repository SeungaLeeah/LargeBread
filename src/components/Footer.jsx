import React, { memo } from 'react';
import styled from 'styled-components';
import ItemBasket from './ItemBasket';
import ButtonBox from './ButtonBox';

const Bottom =styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    background-color: #f0f0f0;
    position: fixed;
    bottom: 0;
`;
const Footer = memo(() => {
    return (
        <Bottom>
            <ItemBasket/>
            <ButtonBox/>
        </Bottom>
    );
});

export default Footer;