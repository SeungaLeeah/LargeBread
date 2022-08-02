import React, { memo } from 'react';
import styled from 'styled-components';
import ItemBasket from './ItemBasket';
import ButtonBox from './ButtonBox';

const Bottom =styled.div`
    width: 100vw;
    height: 250px;
    display: flex;

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