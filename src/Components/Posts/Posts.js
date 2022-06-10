import React, { useEffect, useState } from "react";
import './Posts.css';

function Posts(props) {
   const [posts, setPosts] = useState([]);

   async function getPosts(user_id) {
      const data = await fetch('https://gorest.co.in/public/v2/users/' + user_id + '/posts');
      const posts = await data.json();
    
      setPosts(posts);
   }

   useEffect(() => {
    
      if(props.userId === undefined) return;
      getPosts(props.userId)
   }, [props.userId] )

   return(
      <div className='post'>
         Post:
            {posts.map((post) => {
               return(
                  <span  key={post.id}> {post.title}</span> 
               )
            })}
            
      </div>
   )
}



export default Posts;