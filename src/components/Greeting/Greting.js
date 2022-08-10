import React from 'react'



const Greting = ({name,children,fontSize})=>{
    return(
        <> 
        {children}
        
        <h3 style={{
            color:"red",
            fontSize: fontSize,
            textDecoration:"underline"
        }}
        >Hello,{name}</h3>
        <p>how are you</p>
        </>
    )

}
export default Greting