import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import NavMenu from "./components/NavMenu";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import {useEffect, useState} from "react";
function App() {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(()=>{
        if (!localStorage.getItem('tc-token') ){
            setIsLogin(true);
        }
    });

    return (
        <div className="App">
            <BrowserRouter>
                <NavMenu/>
                <Switch>
                    <Route path="/login" component={LogIn}/>
                    <Route path="/">
                        <div className='main-wrapper d-flex flex-column align-items-start'>
                            <Switch>
                                <Route exact path="/" component={HomePage}/>
                                <Route path="/profile" component={Profile}/>
                                <Route path="/login" component={LogIn}/>}
                                {/*<Route path="/auth" component={AuthenticationWindow} />*/}
                            </Switch>
                        </div>
                    </Route>
                </Switch>


                <Footer/>
            </BrowserRouter>
        </div>

    );
}

export default App;
