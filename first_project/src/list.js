import {useState} from'react'
export let Terminal=()=>{
    let [image,setImage]=useState({});    
     function one(temp)
     {
        setImage(temp.target.value)
     }
     function two()
     {

     }
    return(
        <>
        <div> 
            <div>
            <input type="text"></input>
            </div>
            <div>
            <button>Click</button>
            </div>
            <div>
                <img src='./src/summer season'/>
            </div>
            <div><p> LDB is an advanced container tracking software in India and international that provides online logistics of movement of inland shipment of goods.One tracking system to manage all shipments. Container Tracking system allows you to determine current position of containers on the World Map.
                </p></div>
        </div>
        </>
    )
} 