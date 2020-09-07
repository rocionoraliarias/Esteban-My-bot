import React from 'react';
import Lottie from 'react-lottie';
import AnimationEsteban from './Esteban.json';
import  './Esteban.css';

const Esteban = ({history}) => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: AnimationEsteban

    }

function handleOnClick(){
    history.push('./chat')
}

    return (  
        <div className="Contenedor-animation" onClick={handleOnClick}>
                <Lottie 
                options={defaultOptions}
                />
                
        </div>
    );
}
 
export default Esteban;