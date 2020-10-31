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

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavMenu/>
                <div className='main-wrapper d-flex flex-column align-items-start'>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/profile" component={Profile}/>
                        {/*<Route path="/history" component={HistoryQuiz} />*/}
                        {/*<Route path="/auth" component={AuthenticationWindow} />*/}
                    </Switch>
                </div>

                <Footer/>
            </BrowserRouter>
        </div>

    );
}

export default App;
