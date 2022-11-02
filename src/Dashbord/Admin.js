import React from 'react'
import { toast } from 'react-toastify';

const Admin = ({user,refetch}) => {
    const {email ,role}=user;
  const makeAdmin=()=>{
    fetch(`http://localhost:4000/user/admin/${email}`,{
      method:'PUT',
  headers:{
    authorization:`Bearer ${localStorage.getItem('accessToken')}`
  }
    })
    .then(res=>res.json())
    .then(data=>{
        if (data.modicount>0){
            refetch();
            toast.success('successfully made an admin');
        }
      
    })
  }
  return (
    
      <tr>
                        <th>1</th>
                        <td>{email}</td>
                        <td>{role !== 'admin' &&<button onClick={makeAdmin} className="btn btn-primary">Make Admin</button>}</td>
                        <td><button className="btn btn-primary">Remove User</button></td>
                      </tr>
    
  )
}

export default Admin;
