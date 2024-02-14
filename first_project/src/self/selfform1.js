import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Niviform } from "./selfform";
import {  Remove, Uppdate, Viewlist } from "./selfform2";
import { Newpage } from "./selfform3";
import { Niviform1 } from "./selfform4";


export let Loginpage=()=>
{

    let[allow,setAllow]=useState(false);

    let[carry,setCarry]=useState([]);  // form la iruka input data va vaagi vachika
    
    let[read,setRead]=useState(false);

    let[pos,setPos]=useState(0);

    let[update,setUpdate]=useState(false);

    let [replacee,setReplacee]=useState([])

    useEffect(()=>
    {
    //alert(""+JSON.stringify(Store))
     setCarry(Viewlist)
    })

    return(
<>
        {
        (allow)?
            <>
        <Niviform/>
        <div className="justify-content-center col-4 row ">
            <button className="btn btn-outline-primary mt-5 ms-5" 
            onClick={()=>
                {
                    setAllow(false)
                }
            }>Back
            </button>
        </div>
            </>
        :

        (read)?
         <>
         <Newpage per={pos}/>
    
         <div className="justify-content-center col-4 row ">
            <button className="btn btn-outline-primary mt-5 ms-5" 
            onClick={()=>
                {
                    setRead(false);
                }
            }>Read
            </button>
            </div>
         </>
         
         :
        (update)?
         <>
         <Niviform1 per={pos} hook={replacee}/>
         <button className="btn btn-outline-primary text-center row ms-5 mt-5" onClick={()=>
                            {
                              setUpdate(false)
                            }}>Back</button>
         </>
          :
          
            <>
        <div className="justify-content-center text-center row col-4">
        <button className="btn btn-outline-primary mt-5 ms-5" onClick={()=>
        {
            setAllow(true)
        }
        }>Go</button>
        </div>
        <table className="table table-secondary table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    carry.map((element,value1)=>         //(data,index)
                        <>
                        <tr>
                            <td>{element.firstname}</td>
                            <td>{element.usernames}</td>
                            <td>{element.passwords}</td>
                            <td>{element.emails}</td>
                            <td>
                            <button className="btn btn-outline-primary" onClick={()=>
                            {
                                setRead(true);
                                setPos(value1);
                            }}>
                            Find</button>

                            <button 
                            className="btn btn-outline-primary text-center row ms-3" 
                            onClick={()=>
                            {
                                  setUpdate(true);
                                  setPos(value1);
                                  setReplacee(Uppdate(Store.firstname));

                            }}>Update</button>

                            <button
                            className="btn btn-outline-danger ms-3"
                            onClick={()=>
                            {
                                
                                setCarry(Remove(value1))
                            }}>
                                DELETE
                            </button>
                            </td>
                        </tr>
                        </>
                    )
                }
                   
            </tbody>
        </table>
                  </>

    }
</>
    
    )
}

let Store=[
    {
     firstname:"Subash",
     usernames:"Maha",
     passwords:"subu1234",
     emails:"subash2713@gmail.com"
    },
    {
        firstname:"Niranjana",
        usernames:"Nivi",
        passwords:"nivi1234",
        emails:"niranjana2713@gmail.com"
       },

       {
        firstname:"nivisubash",
        usernames:"nisu",
        passwords:"nisu1234",
        emails:"nivi2713@gmail.com"
       }

]

export let Thaillu=(obj)=>
{
    Store.push(obj)
}

export let Return =(ret)=>
{
    return Store[ret];
}

