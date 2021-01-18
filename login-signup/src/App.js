import React, {Component} from 'react';
import './App.css';
import asyncComponent from './hoc/asyncComponent';
import { Route, Switch } from 'react-router-dom';
import { Redirect, Router } from 'react-router-dom/cjs/react-router-dom.min';


const SignUp = asyncComponent(() => {
  return import('./Containers/SignUp/Signup')
});

const Login = asyncComponent(() => {
  return import('./Containers/Login/Login')
});

class App extends Component {

    

  componentDidMount() {
    document.title = 'loading....'
  }
  render()
  {
    return(
      <div className="App">
          <Switch>
              <Route path="/signup" exact component={SignUp} />
              <Route path="/login" exact component={Login} /> 
            </Switch>
            <Redirect from="/" to="/login" />
        </div>
    )
  }
}

export default App;
