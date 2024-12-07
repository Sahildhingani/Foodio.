import React from "react";
function Billcard({dishname,price,cnt}){
    return(
        <>
        <div className="">
            <div className="flex justify-around">
            <h1>{dishname}</h1>
            <h1>{cnt}</h1>
            <h1>{price}</h1>
            </div>
           
        </div>
        </>
    )
}
export default Billcard;