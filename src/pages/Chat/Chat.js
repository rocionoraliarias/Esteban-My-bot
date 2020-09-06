import React, { useState, useEffect} from 'react'
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
     msg:[ 'Hola!','¿ Como es tu nombre?']
 }])


function firstResponse (name){
    let newChat ={
        id: idCounter + 2,
        emiter: 'esteban',
        msg: [ 'Mucho Gusto ' + name + '!' , ' mi nombre es esteban, soy un bot aun en desarollo', 'eso quiere decir que aun no estoy preparado para tus preguntas expecificas','pero igualmente podemos interactuar', 'selecciona una ocpion de la lista y con gusto te ayudare']
    }
    if(newChat){
        setChat([
            ...chat, newChat
        ])
    }
}

useEffect(() => {
    if(chat.length === 2 ){
        setTimeout(() => firstResponse(msg.msg),500);
        setMsg({ ...msg, msg: ''});
        //setTimeout(() => setOpenSelect(true),600);
    }
   }, [chat]);


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
                    msg={msg}
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