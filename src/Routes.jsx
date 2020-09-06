import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import Home from './pages/Home/Home'
import Chat from './pages/Chat/Chat'


const Routes = () => {

    const history = useHistory();


    return ( 
        <Router >
            <Switch History={history}>
                <Route exact path='/' component={Home}/>
                <Route exact  path='/chat' component={Chat}/>
            </Switch>
        </Router>

     );
}
 
export default Routes;