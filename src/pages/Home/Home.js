import React from 'react';
import Animation from './Components/EstebanAnimation'
import './Home.css'

const Home = ({history}) => {
    return ( 
      <div className="home-esteban-contenedor">   
         <div className ="home-esteban-contenido">
                    <Animation 
                    history={history}
                    />
                      <div className="home-esteban-greeting">
                          <h1>Hola! Soy Esteban</h1>
                              <label>¿No se te ocurre que comer? </label>
                              <label>No te preocupes!</label>
                              <label> Clickea en mi y yo te ayudo!</label>
                      </div>
                  </div>
        </div>
     );
}
 
export default Home;