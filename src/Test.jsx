import React, {useEffect} from "react";

import { useSelector, useDispath } from "react-redux";
import {getList, getItem, postItem, putItem, deleteItem} from './slices/LargeBreadSlice';

const Test = () => {
    const dispatch = useDispath();
    const {data, loading, error} = useSelector((state)=>state.LargeBreadSlice);

    useEffect(()=>{
        dispatch(getList({query: '케이크', page:2, rows: 5}));
        dispatch(getItem({id:3}));
        dispatch(postItem({id:6, name:'멜팅 카라멜 케이크',image:'http://www.margo.co.kr/wp-content/uploads/2020/08/IMG_1408_re-1.jpg'}));
        dispatch(putItem({id:7, name:'카라멜 케이크2', image:'https://img.79plus.co.kr/megahp/manager/upload/menu/20220701135930_1656651570731_tvjUpL7lNH.jpg' }));
        dispatch(deleteItem({id:6}));
    })
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