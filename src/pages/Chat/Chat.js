import React from 'react'
import EstebanItem from './EstebanItem/EstebanItem'
import UserItem from './UserItem/Useritem'
import Input from './InputChat/InputChat'
import './chat.css'

const Chat = () => {
    return ( 
        <div className="chatbot-chat-container">
            <div className="chatbot-chat-content">
                <div className="chatbot-chat">
                    <div className="chatbot-chat-container-body">
                        <EstebanItem />
                        <UserItem />
                    </div>
                    <div className="chatbot-chat-container-input">
                    <Input />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Chat;