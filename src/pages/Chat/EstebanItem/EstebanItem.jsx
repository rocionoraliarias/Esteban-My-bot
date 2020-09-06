import React from 'react';
import './EstebanItem.css'
import catAvatar from '../../../assets/imagenes/avataresteban.png'

const EstebanItem = () => {
    return ( 
       <div className="esteban-item-container">
           <img src={catAvatar}/>
           <div className="cat-item-messages">
                <label>mensaje.</label>
           </div>
       </div>
     );
}
 
export default EstebanItem;