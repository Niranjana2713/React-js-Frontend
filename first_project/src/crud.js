import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Form } from './form';
import { temp2 } from './temp';


 export let Back =()=>
{

  const [Setterdetails, setSetterdetails] = useState(false);
 const[getter,setGetter] = useState([]);
  
 
 useEffect(()=>
  {
  setGetter(temp2)
  }
  )
 
    return(
        
        <>       
{
            (Setterdetails)?
            <>
                <Form/>
                <button className='btn btn-outline-primary text-center' onClick={
                    ()=>
                {
                    setSetterdetails(false)
                }
                }>
                    Cancel</button>
            </>:
            <>
            <button className='btn btn-outline-primary text-center' onClick={
                ()=>
            {
                setSetterdetails(true)
            }
            }>
                Join</button>
                <table className='table'>

                    <thead className='bg-primary'>
                        <tr>
                            <th>Studentname</th>
                            <th>Studentage</th>
                            <th>StudentEmail</th>
                            <th>StudentPlace</th>
                            <th>Pin Number</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            getter.map(
                                (names)=>
                                <>
                                <tr>
                                <td>{names.Studentname}</td>
                                <td>{names.Studentage}</td>
                                <td>{names.StudentEmail}</td>
                                <td>{names.StudentPlace}</td>
                                <td>{names.PinNumber}</td>
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
    