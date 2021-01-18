import React from 'react';
import Input from '../../Components/Input/Input';
// import InputCheckBox from '../../Components/Input/InputCheckBox';
// import Button from '../../Components/Input/Button';
import Logo from "../../Components/Logo/Logo";
import Radium from 'radium';
import { Link, withRouter } from "react-router-dom";
import './Login.css'

const Login = (props) => {
    const style = {
        backgroundColor: 'white',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        fontSize: '11px',
        textAlign: 'left',
        width: '80%',
        margin: 'auto',
        '@media (min-width : 500px)':{
            width: '550px'
        }
    }
    const btnstyle = {
        width: '75%',
        margin: '10px 10%',
        padding: '10px',
        fontSize: '20px',
        backgroundColor: 'blue',
        color: 'white',
        border: '1px solid #0e128a',
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '20px',
        boxShadow: '0 2px 3px #0e128a',
        ':hover':{
            boxShadow: '0 4px 5px #0e128a',
      }
    }
    /* console.log(props.auth)
    if (props.auth === 'admin')
        props.history.replace('/admin');
    else if (props.auth === 'livreur')
        props.history.replace('/livreur');
    else if (props.auth === 'client')
        props.history.replace('/client');*/
    return(
        <div>
            <Logo value="Login to your Odelivery account"/>
            <div style={style}>
                <Input styleName="inputText" label="Email" typeInput="email" valueChangeHandler={props.valueChangeHandler}/>
                <Input styleName="inputText" label="Password" typeInput="password" valueChangeHandler={props.valueChangeHandler}/>
                <ul>
                    <li><input type="checkbox" /> Remember Me </li>
                    <li><a href="localhost:3000/" style={{textDecoration: 'none'}}>Forgot your password?</a></li>
                </ul>   
                <input type="submit" value="Login" style={btnstyle} onClick={props.loginHandler}/>
                <p className="Input">No account yet?<Link to="/signup" style={{textDecoration: 'none'}}>Get Started for free</Link></p>
            </div>
        </div>
    );
}

export default withRouter(Radium(Login));