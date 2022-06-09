import React, {useState, useEffect} from 'react'
import './App.css';


function App() {
   const [users, setUsers] = useState([]);
   

   async function getUsers() {
      const data = await fetch('https://gorest.co.in/public/v2/users');
      const users = await data.json();

      setUsers(users);
   }

   useEffect(() => {
      getUsers();
   }, []);

  return (
      <div className='div'>   
         <ul className='list'>
            {users.map((user) => {
              return(
                  <li className='user' key={user.id} >
                     {user.name}
                  </li>
               );
            })}   
         </ul>  
      </div>
  );
}

export default App;
