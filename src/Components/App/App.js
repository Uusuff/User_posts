import React, { useState} from 'react'
import Posts from '../Posts/Posts';
import Comments from '../Comments/Comments';
import UsersList from '../UsersList/UsersList';



import './App.css';


function App() {
const [userId, setUserId] = useState(window.sessionStorage.getItem('userId'));

const [postsId, setPostsId] = useState();


function saveUserId(userId) {
   window.sessionStorage.setItem('userId', userId);
   setUserId(userId);
   setPostsId("undefined");
};




return (
      <div>
        
         <div className='wrapper'>   
            <UsersList onUserClick={saveUserId} />
            <div  className='content'>
                              
               <Posts userId={userId} onButnPostsClick={setPostsId}/>             
               <Comments postsId={postsId}/>
            </div>
         </div>
      </div>


  );
}

export default App;
