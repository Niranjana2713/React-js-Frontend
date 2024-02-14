import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'

export let Firsthooks = () =>{

    let [Myname,setMyname] = useState("");

    function setter(temp)
    {
          setMyname(temp.target.value)
    }
    function getter()
    {
        alert("Enter your sweet name here :"+ Myname)
    }
    return(
        <>
          <div className='row justify-content-center mt-4'>
            <div className='col-8 mt-5'>
            <input type="text" placeholder="Name" onChange={setter} className='form-control'/>
            </div>
            <div className='text-center justify-content-center'>
                <button className='btn btn-outline-primary mt-4 'onClick={getter}>Click Here</button>
            </div>
            
          </div>
        </>
    )
}