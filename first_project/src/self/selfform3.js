import { useEffect, useState } from "react"
import { Return } from "./selfform1";

export let Newpage=(taken)=>        //newpage la per poii pos ku data anupidichu adhu vaagi vaika taken function 
{
    let [space,setSpace]=useState(
        [
        {
        firstname:"",
        usernames:"",
        passwords:"",
        emails:""
        }
    ]

    );

    useEffect(()=>
    {
        setSpace(Return(taken.per))
    })
   
return(
    <>
    <div>
        <p>LDB is an advanced container tracking software in India and international that provides online logistics of movement of inland shipment of goods.One tracking system to manage all shipments. Container Tracking system allows you to determine current position of containers on the World Map.</p>
        <ol>
            <li>firstname {space.firstname}</li>
            <li>usernames {space.usernames}</li>
            <li>passwords{space.passwords}</li>
            <li>emails{space.emails}</li>

        </ol>
    </div>
    </>
)
}
