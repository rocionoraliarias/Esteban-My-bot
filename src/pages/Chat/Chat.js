import React, { useState} from 'react'
import EstebanItem from './EstebanItem/EstebanItem'
import UserItem from './UserItem/Useritem'
import Input from './InputChat/InputChat'
import './chat.css'

const Chat = () => {

let idCounter = 0;

const [ msg, setMsg ] = useState({});

const [chat , setChat ] = useState([
 {
     id:0,
     emiter: 'esteban',
     msg:[ 'Hola!','¿ Como es tu nombre?', 'a ver que onda']
 }])



function GetUserMessage (value){
    idCounter =  idCounter +1;
    setMsg({
        id: idCounter,
        emiter: 'User',
        msg: value
    })
};
 

function sendMessage(e) {
    e.preventDefault();
    setChat([
        ...chat, msg
    ])
};



console.log('chat', chat)
console.log('msg:',msg)

    return ( 
        <div className="chatbot-chat-container">
            <div className="chatbot-chat-content">
                <div className="chatbot-chat">
                    <div className="chatbot-chat-container-body">
                        {chat.map((message, index) => message.emiter === 'esteban' ? 
                        <EstebanItem 
                        key={index}
                        text={message.msg} />
                        : 
                        <UserItem 
                        key={index}
                        text={message.msg} />
                        )}
                        
                       
                    </div>
                    <div className="chatbot-chat-container-input">
                    <Input
                    GetUserMessage={GetUserMessage}
                    sendMessage={sendMessage}
                    />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Chat;