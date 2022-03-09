import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';

class App extends React.Component{
  constructor(props){
    super(props)
  } 

  render(){
    return (
      <div className="App">

         <Router>
          <Switch>

            <Route path="/" exact> 
              <HomePage/>
               
             </Route>

           

          </Switch> 
         </Router> 
      </div>
    );
  }
}

export default App;


