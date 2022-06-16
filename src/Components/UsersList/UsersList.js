import React, { useState, useEffect } from "react";
import './UsersList.css';


function UsersList(props) {
   const [users, setUsers] = useState([]);
   
   async function getUsers() {
      const data = await fetch('https://gorest.co.in/public/v2/users');
      const users = await data.json();

      setUsers(users);
   }


   useEffect(() =>{
      getUsers();
   }, []);

   return(
      <ul className='list'>
         {users.map((user) => {
           
            return(
               <li className='user' key={user.id} >
                  {user.name}
                  <button className='button' onClick={() => props.onUserClick(user.id)}>Posts</button>
               </li>
            );
         })}   
      </ul>
   )
}


export default UsersList;