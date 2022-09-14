import axios from "axios";
import { useEffect, useState } from "react";
import URL from "../constants/api.constant";

export const getUserData = () => {
  const [users, setUsers] = useState<[]>([]);
  const [loading, setLoading] = useState(true)
  
      const getData = async () => {
        await axios.get( URL)
          .then((response) => {
            const data = response.data
            console.log(data)
            setUsers(data);
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
        users,
      }
};
