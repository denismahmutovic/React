import React, { useState } from "react";

const Cas = () => {
    const [number,setnumber] = useState(0)

    const mojaFunc =()=>{
        console.log("moja ff u Eff")

    }
    useEffect (()=>{
        mojaFunc()
    },[])
  return (
    <strong onClick={()=> setnumber(Math.random())}>
        {number}
    </strong>
    
  )                                              // componedidmonte (spremna za rad)
// };                                                      sitedefeket pozicanje servera

export default Cas;


