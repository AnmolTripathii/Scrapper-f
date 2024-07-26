import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const WebContext = createContext(null);

const WebContextProvider=(props)=>{
    const[allGenerate,setAllGenerate]=useState([]);
    const[selectedLen,setSelectedLen]=useState(0)
    const [selectIds, setSelectIds] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get('https://scrapper-back-pied.vercel.app/api/v1/webs/allwebs');
              setAllGenerate(response.data.data); 
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
    },[])


    
    const contextValue={allGenerate,setSelectedLen,selectedLen,selectIds, setSelectIds};
    return(
        <WebContext.Provider value={contextValue}>{props.children}</WebContext.Provider>
    )
}

export default WebContextProvider