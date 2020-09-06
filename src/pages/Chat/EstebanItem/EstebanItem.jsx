import React from 'react';
import './EstebanItem.css'
import catAvatar from '../../../assets/imagenes/avataresteban.png'

const EstebanItem = ({text}) => {
    return ( 
       <div className="esteban-item-container">
           <img src={catAvatar} alt='avatar Esteban'/>
           
           <div className="esteban-item-messages">
           {text.map((t,index) => 
                <label key= {index}>{t}</label>
           )}
           </div>
       </div>
     );
}
 
export default EstebanItem;