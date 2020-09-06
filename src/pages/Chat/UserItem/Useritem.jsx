import React from 'react';
import './Useritem.css'
import UserAvatar from '../../../assets/imagenes/user.png'

const UserItem = () => {
    return ( 
        <div className="user-item-container">
           <div className="user-item-messages">
                <label>mensaje.</label>
           </div>
           <img src={UserAvatar}/>
       </div>
     );
}
 
export default UserItem;