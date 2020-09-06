import React from 'react';
import './InputChat.css'

const Input = ({sendMessage , GetUserMessage}) => {
    return ( 
        <form 
        onSubmit={ (e) => sendMessage(e)}
        className="chatbot-chat-input-container">            
            <input
            placeholder='Escribi tu nombre'
            type='text'
            onChange = { (e) => GetUserMessage(e.target.value)}
            />
            <button 
            type= 'submit'
            />
        </form>
     );
}
 
export default Input;