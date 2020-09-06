import React from 'react';
import './InputChat.css'

const Input = () => {
    return ( 
        <form className="chatbot-chat-input-container">
            <input
            placeholder='Escribi tu nombre'
            type='text'
            value=''
            />
            <button 
            type= 'submit'
            />
        </form>
     );
}
 
export default Input;