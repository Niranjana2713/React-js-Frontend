import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Thaillu } from "./selfform2";
import { Boxs } from "./selfform2";

export let Niviform1 = (getit)=> //we have to open a first main function 
{

    let [mind,setMind]=useState(getit.per)

    const[get,setGet]= useState({
     firstname:getit.hook.firstname,
     usernames:getit.hook.usernames,
     passwords:getit.hook.passwords,
     emails:getit.hook.emails
    });



  
    let setter=(para)=>{           //which value we want to use
        const {name,value}=para.target;

        setGet((show)=>         //to view the data
    {
      return{
        ...show,[name]:value,
      }
    })
    }

    let register=()=>
    {
    alert("to show the available data:")
    Boxs( get,mind)
    }


     

    return(
        <>
        <div className=" row container justify-content-center ms-5">
            <div className="text-center">
                <h1>Nivi Student Form</h1>
            </div>
            <div className="row">
            <div className="col-6 mt-5 row justify-content-center ms-5"> 
            <label className="form-label">Name</label>
            <input className="form-control" type="text" name="firstname" onChange={setter} value={setGet.firstname}></input>
            </div>

            <div className="col-6 mt-5 justify-content-center ms-5"> 
            <label className="form-label">Username</label>
            <input className="form-control"type="text" name="usernames"  onChange={setter} value={setGet.usernames}></input>
            </div>

            <div className="col-6 mt-5 justify-content-center ms-5"> 
            <label className="form-label">Password</label>
            <input className="form-control"type="password" name="passwords"  onChange={setter} value={setGet.passwords}></input>
            </div>

            <div className="col-6 mt-5  justify-content-center ms-5"> 
            <label className="form-label">Email</label>
            <input className="form-control"type="email" name="emails"  onChange={setter} value={setGet.emails}></input>
            </div>
 
            <div className="col-6 mt-5 justify-content-center"> 
            <button className="btn btn-outline-primary mt-4 ms-5" onClick={register}>Update</button>
            
            </div>
</div>

        </div>
        </>
    );
}