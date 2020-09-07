import React from 'react';
import './select.css'
const Select = ({options, handlerSelectionsOptions}) => {
    return ( 
        <div className='selector-content'>
            <div className='selector-container'>
                { options.map(op => 
                <div 
                onClick={(e) => handlerSelectionsOptions(op.id)}
                key={op.id} className='selector-oprions'>
                    <label>{op.message}</label>
                    </div>
                    )}
            </div>
        </div>
     );
}
 
export default Select;