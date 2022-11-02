import React from 'react'
import { useQuery } from 'react-query';
import Admin from './Admin';

const Alluser = () => {
  const {data:users,isLoading,refetch}=useQuery('users',()=>fetch('http://localhost:4000/user',{
  method:'GET',
  headers:{
    authorization:`Bearer ${localStorage.getItem('accessToken')}`
  }



  }).then(res=>res.json()));
  if(isLoading){
      return <button className="btn loading">loading</button>
  }
  const {email}=users;
  const makeAdmin=()=>{
    fetch(`http://localhost:4000/user/admin/${email}`,{
      method:'PUT',
  headers:{
    authorization:`Bearer ${localStorage.getItem('accessToken')}`
  }
    })
    .then(res=>res.json())
    .then(data=>{
      
    })
  }
return (
  <div>
      <h1 className='userlength'>All user : {users.length}</h1>
    
    <div class="overflow-x-auto tablestyle">
              <table class="table w-full">
              <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
                  <tbody>
                     {
                         users.map(user=><Admin 
                          user={user}
                          refetch={refetch}
                          ></Admin>
                         )   
                     }
                  </tbody>
              </table>
          </div>
    
    </div>
)
}

export default Alluser;
