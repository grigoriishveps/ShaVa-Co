import {Component} from "react";
import '../styles/nav_menu.css';
import logoImg from '../imgs/logo.svg';
import burgerImg from '../imgs/burger.svg';
import avatarImg from '../imgs/Avatar.svg';
import searchImg from  '../imgs/search.svg'
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

export default class NavMenu extends Component {

    toggleAttachmentForm() {
        console.log("Click");
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-blue text-white align-items-center align-content-center">

                <Link to={'/'}><img src={logoImg} className="logo-img"/></Link>
                {/*<button className="btn-outline- " type="button">*/}
                {/*    <img src={burgerImg} className="burger-image" />*/}
                {/*</button>*/}

                <span className='d-flex flex-column justify-content-center' style={{paddingLeft: '10px'}}>
                      <label align="center" style={{cursor: 'pointer'}} className='d-flex flex-column justify-content-center'>
                      <img
                          src={burgerImg}
                          style={{width: '30px', height: '30px'}}
                          className="burger-image"
                      />
                      <Button
                          color="success"
                          className='btn btn-success account__btn position-absolute'
                          onClick={() => {
                              this.toggleAttachmentForm()
                          }}
                          hidden
                          style={{
                              opacity: "0",
                              width: "0",
                              height: "0"
                          }}
                      />
                      </label>
                </span>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Каталог</a>
                        </li>
                    </ul>
                </div>
                <div className="input-group mx-5 nav-search-div" style={{borderRadius:'14px'}}>
                    <div className="input-group-prepend ">
                        <span className="input-group-text nav-search-icon" id="basic-addon1"  style={{padding:'3px 6px'}}>
                            <img src={searchImg} alt="" className="search-icon" />
                        </span>
                    </div>
                    <input type="text" className="form-control nav-search-input" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="right-avatar-box ">
                    <Link to={'/profile'}><img src={avatarImg} className="logo-img mr-2"/></Link>
                    Подобрано для вас, Константин
                </div>

            </nav>
        );
    }
}
