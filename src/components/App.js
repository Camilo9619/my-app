import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import BadgeNew from './pages/Badges';
import Badges from './pages/BadgeNew';
import Layout from './Layout';
import NotFound from '../components/pages/NotFound'

function App(){
   return(
       <BrowserRouter>
       <Switch>
            <Route exact path="/badges" component={Badges}/>
            <Route exact path="/badges/new" component={BadgeNew}/>
            <Route component={NotFound}/>
       </Switch>
       </BrowserRouter>
   );
}
export default App;