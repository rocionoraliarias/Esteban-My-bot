import React from 'react';
import './InputChat.css'

const Input = ({sendMessage , GetUserMessage , msg, chat}) => {
    return ( 
        <form 
        onSubmit={ (e) => sendMessage(e)}
        className="chatbot-chat-input-container">            
            <input
            disabled={chat.length >= 3 ? true : false }
            placeholder={chat.length >= 3 ? 'Ya no puedes escribir':'Escribi tu nombre'}
            value={msg.msg}
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