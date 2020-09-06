import React from 'react'
import EstebanItem from './EstebanItem/EstebanItem'
import UserItem from './UserItem/Useritem'
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
                </div>
            </div>
        </div>
     );
}
 
export default Chat;