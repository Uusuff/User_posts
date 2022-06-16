import React, { useEffect, useState } from "react";
import './Comments.css';

function Comments(props) {
   const [comments, setComments] = useState([]);


   async function getPosts(posts_id) {
      const data = await fetch('https://gorest.co.in/public/v2/posts/' + posts_id + '/comments');
      const comments = await data.json();
    
      setComments(comments);
   }

   useEffect(() => {
      if(props.postsId === undefined) return;
      getPosts(props.postsId)
   }, [props.postsId]);



   return(
      <div >
         {(comments.length > 0)  ?
            <div className='comment'>  
               {comments.map((comment) => {
                  return(                 
                     <span className='spanComments' key={comment.id} >
                        Comment: {comment.body}
                     </span> 
                  )
               })} 
            </div>
            :  (props.postsId != "undefined") ?
            <div className='comment'>
               <div className='comment '>
                  <span className='spanNoComments'>Comments: This post has no comments!</span>
               </div>  
            </div>
            :
            <div>

            </div> 
           
           
         }     
      </div>
   )
}



export default Comments;