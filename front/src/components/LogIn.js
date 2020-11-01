import {useState} from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {signIn} from "../actions/app";
import '../styles/login.css';
import {Link} from "react-router-dom";
function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-wrapper">
            <div className="login-box d-flex flex-column">
                <h5>Вход</h5>

                <h6>Логин</h6>
                <input type='text' value={email} placeholder='№ читательского билета, email или телефон' onChange={setEmail}/>
                <h6>Пароль</h6>
                <input type='text' value={password} placeholder='Пароль' onChange={setPassword}/>

                <div className="d-flex justify-content-between mb-40">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input login-checkbox" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label login-label" htmlFor="inlineCheckbox1">Запомнить</label>
                    </div>
                    <Link to='' className='login-link'>Забыли пароль?</Link>
                </div>
                <div className="d-flex justify-content-between">
                    <button className='login-button-sign-up'>Зарегистрироваться</button>
                    <button className='login-button-sign-in' onClick={()=>{}}>Войти</button>
                </div>
            {/*<Button onClick={}></Button>*/}
            </div>
        </div>
    );

}

function mapStateToProps(state) {
    return {
        //pageData: state.infringements.pagination,

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        signIn
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);



