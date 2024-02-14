import { useState } from "react"

 export const AddUserForm =(props)=>
{
    const initialFormState = {name:'',username:''}
    const [user,setUser]=useState(initialFormState);
    const setUsers=(event)=>{
    const {name,value} = event.target

    setUser({...user,[name]:value})
    }

    const register=()=>
    {

        alert("submitteed"+JSON.stringify(initialFormState))
        Create(initialFormState)
    }
    return(
        <form onSubmit={
            event =>
            {
                event.preventDefault();
                props.addUser(user);
                setUser(setUsers);
            }
        }>
            <label>Name</label>
            <input type="text" onChange={setUsers} name="name" ></input>
            <label>Username</label>
            <input type="text"  onChange={setUsers} name="username"></input>
            <button className="btn btn-outline-primary">Register</button>
        </form>
    )
}
