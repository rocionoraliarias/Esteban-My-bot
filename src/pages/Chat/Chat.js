import React, { useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'
import EstebanItem from './EstebanItem/EstebanItem'
import UserItem from './UserItem/Useritem'
import Select from './select/select'
import Input from './InputChat/InputChat'
import { alegre, triste, enojado, ansioso, indeciso} from '../../Data/Actions'
import './chat.css'




const Chat = () => {

let idCounter = 0;

const [ msg, setMsg ] = useState({});

const [ openSelect , setOpenSelect ] = useState(false);


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
        msg: [ 'Mucho Gusto ' + name + '!' , ' mi nombre es esteban, soy un bot aun en desarollo', 'eso quiere decir que aun no estoy preparado para tus preguntas expecificas','pero igualmente podemos interactuar', 'Te ayudare a alegir que comer en base a tu estado de animo, comienza seleccionando una opcion de la lista']
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
        setTimeout(() => setOpenSelect(true),600);
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

let options = [

    {
        id: 'Alegre',
        message:'Estoy Alegre'
    },
    {
        id:'Triste',
        message:'Estoy Triste'
    },
    {
        id:'Enojado',
        message:'Estoy enojado'
    },
    {
        id:'Ansioso',
        message: 'Estoy ansioso'
    },
    {
        id: 'Indeciso',
        message:' Estoy indeciso'
    }

]

const [ interactions, setInteractions ] = useState([]);


function handlerSelectionsOptions(value) {
    let result;
    switch(value) {
        case 'Alegre':
         result = alegre[Math.floor(Math.random()*alegre.length)]
         if(result){
             setInteractions([...interactions,result.msg])
         }
         break;
         case 'Triste':
            result = triste[Math.floor(Math.random()*triste.length)]
            if(result){
                setInteractions([...interactions,result.msg])
            }
            break;
            case 'Enojado':
                result = enojado[Math.floor(Math.random()*enojado.length)]
                if(result){
                    setInteractions([...interactions,result.msg])
                }
                break;
                case 'Ansioso':
                result = ansioso[Math.floor(Math.random()*ansioso.length)]
                if(result){
                    setInteractions([...interactions,result.msg])
                }
                break;
         default:
            result = indeciso[Math.floor(Math.random()*indeciso.length)]
            if(result){
                setInteractions([...interactions,result.msg])
            }
            break;
    }
}







    return ( 
        <div className="chatbot-chat-container">
            <div className="chatbot-chat-content">
                <div className="chatbot-chat">
                    <div className="chatbot-chat-container-body">
                        {chat.map((message, index) => message.emiter === 'esteban' ? 
                        <Fade left>
                        <EstebanItem 
                        key={index}
                        text={message.msg} />
                        </Fade>
                        : 
                        <Fade right>
                        <UserItem 
                        key={index}
                        text={message.msg} />
                        </Fade>
                        )}
                        { openSelect &&
                        <Select
                        handlerSelectionsOptions={handlerSelectionsOptions}
                        options ={options}/>
                       }
                       {
                           interactions.length > 0 &&  interactions.map((interaction, index) => 
                           <>
                           <Fade left>
                               <EstebanItem key={index} text={ interaction}></EstebanItem>
                           </Fade>
                           <Fade right>
                                <Select 
                                 handlerSelectionsOptions={handlerSelectionsOptions}
                                options={options}/>
                           </Fade>
                           </>
                           )
                       }
                    </div>
                    <div className="chatbot-chat-container-input">
                    <Input
                    chat={chat}
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