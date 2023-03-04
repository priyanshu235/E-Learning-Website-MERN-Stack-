import React , {useEffect, useState} from 'react'
import * as api from "../../api";

export const Home = () => {
    var [data,setData]= useState();
    const dataFetcher = async () => {  
        const temp = await api.fetchData();  
        setData(temp.data.message);
    };
    useEffect(()=>{
        dataFetcher();
    },[]);
  return (
    <div>
        {data}
    </div>
  )
}
