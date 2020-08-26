import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from './components/Login.js';
import {TodoApp} from './components/TodoApp.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class App extends Component {

    

    constructor(props) {        
        super(props);

        this.state = {isLoggedIn: false}
    }


    render() {
        
        const LoginView = () => (
            <Login/>
        );
      
        const TodoAppView = () => (
            <TodoApp/>
        );

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        {!localStorage.getItem("isLoggedIn") && (<li><Link to="/">Login</Link></li>)}
                        {localStorage.getItem("isLoggedIn") && (<li><Link to="/todo">Todo</Link></li>)}
                    </ul>

                    <ul>
                        {!localStorage.getItem("isLoggedIn") && (<Route exact path="/" component={LoginView}/>)}
                        {localStorage.getItem("isLoggedIn") && (<Route exact path="/todo" component={TodoAppView}/>)}
                    </ul>
                </div>
            </Router>
        );
    }

}

export default App;
