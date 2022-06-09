import React, { useState, useEffect } from 'react'
import './App.css';


function App() {
   const [users, setUsers] = useState([]);
   const [posts, setPosts] = useState([]);

   async function getUsers() {
      const data = await fetch('https://gorest.co.in/public/v2/users');
      const users = await data.json();

      setUsers(users);
   }

   async function getPosts(user_id) {
      const data = await fetch('https://gorest.co.in/public/v2/users/' + user_id + '/posts');
      const posts = await data.json();
     
      setPosts(posts);
   }


   useEffect(() =>{
      getUsers();
   }, []);

  return (
      <div className='content'>   
         <ul className='list'>
            {users.map((user) => {
              return(
                  <li className='user' key={user.id} onClick={() => getPosts(user.id)} >
                     {user.name}
                  </li>
               );
            })}   
         </ul>
         <div className='post'>
            {posts.map((post) => {
               return(
                  <span  key={post.id}>Post: {post.title}</span> 
               )
            })
         }
         </div>
      </div>

  );
}

export default App;
