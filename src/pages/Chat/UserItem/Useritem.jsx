import React from 'react';
import './Useritem.css'
import UserAvatar from '../../../assets/imagenes/user.png'

const UserItem = ({text}) => {
    return ( 
        <div className="user-item-container">
           <div className="user-item-messages">
                <label>{text}</label>
           </div>
           <img src={UserAvatar}/>
       </div>
     );
}
 
export default UserItem;