import React, { memo } from 'react';
import styled from 'styled-components';
const DelBtn = styled.div`
    font-size: 14px;
    font-weight: 700;
    width: 30%;
    color: white;
    background-color: #4c4747;
    text-align: center;
    padding: 25px 17px;
    border-radius: 5px;
    &:hover{
        background-color: black;
    }
`;
const DelButton = memo(() => {
    return (
        <DelBtn>
            전체삭제
        </DelBtn>
    );
});

export default DelButton;