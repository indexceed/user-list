import axios from "axios";
import { useEffect, useState } from "react";
import URL from "../constants/api.constant";

export const getUserData = (id:String | undefined) => {

  const [data, setData] = useState< []|null>(null);
  const [loading, setLoading] = useState(true)
  
  const getData = async () => {
      await axios.get( id?`${URL}/${id}`: URL)
        .then((response) => {
          const res = response.data
          setData(res);
          setLoading(false)
        });
    };

    useEffect( () => {
      if(loading){
        setLoading(true)
        getData()
      }
    },[]);

    return {
      loading, 
      data,
    }
};


