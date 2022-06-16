import { render } from "@testing-library/react";
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
      if(props.userId === undefined) return 
      getPosts(props.userId)
    
   }, [props.userId] )


  

   return(
      <div >
         {posts.length > 0 ?
            <div className='post'>
               {posts.map((post) => {
                  return(                 
                     <span className='spanPosts' key={post.id} >
                        Post: {post.title} 
                        <button className='btn' onClick={() => props.onButnPostsClick(post.id)}>Comments</button>
                     </span>
                  )               
               })}
            </div>
            :
            <div className='post'>
               <span className='spanNoPosts'>Post: This user has no posts!</span>
            </div>         
         }
      </div>
   );

}



export default Posts;