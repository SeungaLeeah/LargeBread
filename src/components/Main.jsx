import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../slices/LargeBreadSlice';

const Main = memo(() => {
    const {data,loading, error} = useSelector((state)=>state.LargeBreadSlice);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getList());
    }, [dispatch]);
    return (
        <div>
            초기화면
        </div>
    );
});

export default Main;