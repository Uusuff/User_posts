import React, { useState} from 'react'
import Posts from '../Posts/Posts';
import UsersList from '../UsersList/UsersList';
import './App.css';


function App() {
const [userId, setUserId] = useState(window.sessionStorage.getItem('userId'));

function saveId(userId) {
   window.sessionStorage.setItem('userId', userId);
   setUserId(userId);
}


return (
      <div className='content'>   
        <UsersList onUserClick={saveId} />
        <Posts userId={userId}/>
      </div>

  );
}

export default App;
