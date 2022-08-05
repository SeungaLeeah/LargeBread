import React, {useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";
import {getList, getItem, postItem, putItem, deleteItem} from './slices/LargeBreadSlice';

const Test = () => {
     
    useEffect(()=>console.clear(),[]);
    
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state)=>state.LargeBreadSlice);

    useEffect(()=>{
        //dispatch(getList({query: '몽쉘', page:1, rows: 5}));
        //dispatch(getItem({id:3}));
        //dispatch(postItem({id:6, name:'멜팅 카라멜 케이크',image:'http://www.margo.co.kr/wp-content/uploads/2020/08/IMG_1408_re-1.jpg', price: 5000}));
        //dispatch(putItem({id:6, price:5000}));
        dispatch(deleteItem({id:6}));
    }, [dispatch]);
    console.log(data)
    return (
        loading ? "loading..." : (
            error ? JSON.stringify(error): (
                <>   
                    {JSON.stringify(data)}
                </>
            )
        )
    );
};

export default Test;