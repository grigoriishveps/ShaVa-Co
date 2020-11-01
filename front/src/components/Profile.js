import {Component, Fragment} from "react";
import '../styles/profile.css';
import lightingImg from '../imgs/lighting.svg';
import closeImg from '../imgs/close.svg';
import {Button} from "reactstrap";

export default class Profile extends Component {
    constructor(props) {
        super(props);


        this.state = {
            add_interes: false,
            add_ability: false,
            arr_interes: ['история', 'астрономия', 'чехов', 'толстой', 'джаз', 'уют', 'ярмарки', 'классическая', 'орган', 'импрессионизм'],
            arr_ability: ['Слабое зрение', 'Коляска'],
            new_interes: '',
            new_ability: ''
        }
        this.handleChangeAbility = this.handleChangeAbility.bind(this);
        this.handleChangeInteres = this.handleChangeInteres.bind(this);
    }

    deleteInteres(index) {
        console.log("qdsdvsdv");
        this.setState(state => {
            const arr = [...state.arr_interes];
            arr.splice(index, 1);
            return {arr_interes: arr};
        });
    }

    deleteAbility(index) {
        console.log("qdsdvsdv");
        this.setState(state => {
            const arr = [...state.arr_ability];
            arr.splice(index, 1);
            return {arr_ability: arr};
        });
    }

    toggleInputInteres() {
        this.setState((state) => {
            return {add_interes: !state.add_interes}
        });
    }

    toggleInputAbility() {
        this.setState((state) => {
            return {add_ability: !state.add_ability}
        });
    }

    handleChangeAbility(event) {
        const value = event.target.value;
        this.setState({new_ability: value});
    }

    handleChangeInteres(event) {
        const value = event.target.value;
        this.setState({new_interes: value});
    }

    handleAddInteres() {
        this.setState((state) => {
            return {
                arr_interes: [...state.arr_interes, state.new_interes],
                new_interes: '',
                add_interes: false
            }
        })
    }

    handleAddAbility() {
        this.setState((state) => {
            return {
                arr_ability: [...state.arr_ability, state.new_ability],
                new_ability: '',
                add_ability: false
            }
        })
    }

    render() {
        return (
            <Fragment>
                <div className="profile-info-block">
                    <h3> Константин Сидоров</h3>
                    <p className="profile-info-text">22.08.1990</p>
                    <p className="profile-info-text">+7-000-000-00-00</p>
                    <p className="profile-info-text">nikita@vernis.com</p>
                    <span className="profile-note-text"> Выможете изменить свои данные, обратившись к администратору библиотеки.</span>
                </div>

                <div className="profile-info-block">
                    <h3> Персонификация</h3>
                    <span className="profile-note-text">
                        Персональные подборки основываются на вашем опыте и опыте пользователей, похожих на вас.
                    </span>
                    <h6>Улучшите персонификацию, подключив дополнительные данные:</h6>

                    <div className="d-flex flex-row justify-content-start">
                        <div className="profile-person-left">
                            <p className="profile-info-text">Instagram</p>
                        </div>
                        <div className="profile-person-right">

                            <div className='custom-control custom-switch'>
                                <input
                                    type='checkbox'
                                    className='custom-control-input profile-switch'
                                    id='customSwitches1'
                                    readOnly
                                />
                                <label className='custom-control-label profile-note-text ' htmlFor='customSwitches1'>
                                    Данные о блогах, хэштеги, упоминаемые в блогах как сферы интересов
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-start">
                        <div className="profile-person-left">
                            <p className="profile-info-text">Facebook</p>
                        </div>
                        <div className="profile-person-right">

                            <div className='custom-control custom-switch'>
                                <input
                                    type='checkbox'
                                    className='custom-control-input profile-switch'
                                    id='customSwitches2'
                                    readOnly
                                />
                                <label className='custom-control-label profile-note-text ' htmlFor='customSwitches2'>
                                    Данные о подписчиках, как сферы интересов.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-start">
                        <div className="profile-person-left">
                            <p className="profile-info-text">ВКонтакте</p>
                        </div>
                        <div className="profile-person-right">

                            <div className='custom-control custom-switch'>
                                <input
                                    type='checkbox'
                                    className='custom-control-input profile-switch'
                                    id='customSwitches3'
                                    readOnly
                                />
                                <label className='custom-control-label profile-note-text ' htmlFor='customSwitches3'>
                                    Данные о подписках, о музыкальных предпочтениях.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-start">
                        <div className="profile-person-left">
                            <p className="profile-info-text">Spotify</p>
                        </div>
                        <div className="profile-person-right">

                            <div className='custom-control custom-switch'>
                                <input
                                    type='checkbox'
                                    className='custom-control-input profile-switch'
                                    id='customSwitches4'
                                    readOnly
                                />
                                <label className='custom-control-label profile-note-text ' htmlFor='customSwitches4'>
                                    <span className="profile-new-text white-space"><img
                                        src={lightingImg}/> Новинка  </span>Данные о музыкальных предпочтениях.
                                </label>
                            </div>
                        </div>
                    </div>

                    <h6>Любимая библиотека</h6>
                    <span className="">
                        Библиотека татататата
                    </span>
                    <div className="mb-4">
                        <a href='' className='mr-2'>Изменить</a>
                        <a href=''>Удалить</a>
                    </div>

                    <h6>Интересы</h6>
                    <span className="profile-note-text"> Вы можете указать сферы ваших интересов, чтобы сделать, персональные подборки еще точнее.
                    </span>
                    <div className="d-flex flex-wrap pt-3">
                        {
                            this.state.arr_interes.map((item, index) => {
                                return (
                                    <div key={item + index} className="profile-item mr-2 d-flex align-content-center">
                                        <span>{item}</span>
                                        <img src={closeImg} onClick={()=>{this.deleteInteres(index)}}  />
                                    </div>)
                            })
                        }
                    </div>
                    <div className="d-flex mt-2">
                        {this.state.add_interes ? <>
                            <input className="profile-input" type='text' onChange={this.handleChangeInteres}/>
                            <button className='login-button-sign-up' onClick={() => this.handleAddInteres()}>Добавить
                                интерес
                            </button>
                        </> : <button className="profile-text-button" onClick={() => this.toggleInputInteres()}>Добавить
                            интерес</button>
                        }
                    </div>

                    <h6>Адрес дома</h6>
                    <span className="profile-note-text"> Укажите свой адрес для подбора событий и мест поблизости.
                    </span>
                    <div className="mt-2">
                        <a href='' className='mr-2'>Изменить</a>
                        <a href=''>Удалить</a>
                    </div>

                    <h6>Особенности доступа</h6>
                    <span className="profile-note-text"> Подбор мест и событий, адаптированных под ваши возможности.
                    </span>
                    <div className="d-flex flex-wrap pt-3">
                        {
                            this.state.arr_ability.map((item, index) => {
                                return (
                                    <div key={item + index} className="profile-item mr-2 d-flex align-content-center">
                                        <span>{item}</span>
                                        <img src={closeImg} onClick={()=>{this.deleteAbility(index)}}  />
                                    </div>)
                            })
                        }
                    </div>
                    <div className="mt-2">
                        {this.state.add_ability ? <>
                            <input className="profile-input" type='text' onChange={this.handleChangeAbility}/>
                            <button className='login-button-sign-up' onClick={() => this.handleAddAbility()}>Добавить
                                особенность
                            </button>
                        </> : <button className="profile-text-button" onClick={() => this.toggleInputAbility()}>Добавить
                            особенность</button>
                        }
                    </div>
                </div>

                <div className="profile-info-block">
                    <h3> Настройка уведомлений</h3>
                    <table className="table profile-table">
                        <thead>
                        <tr>
                            <th scope="col" width="40%"></th>
                            <th scope="col">СМС</th>
                            <th scope="col">Push уведомление</th>
                            <th scope="col">Email</th>
                            <th scope="col">Уведомление в сервисе</th>
                            <th scope="col">Сообщение в Telegram</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td scope="row">Поступление заказной книги</td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck11"/>
                                    <label class="custom-control-label" for="customCheck11"></label>
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck12"/>
                                    <label className="custom-control-label" htmlFor="customCheck12"></label>
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck13"/>
                                    <label className="custom-control-label" htmlFor="customCheck13"></label>
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck14"/>
                                    <label className="custom-control-label" htmlFor="customCheck14"></label>
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck15"/>
                                    <label className="custom-control-label" htmlFor="customCheck15"></label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">Мероприятие, на которое вы пойдете</td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck21"/>
                                    <label className="custom-control-label" htmlFor="customCheck21"></label>
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck22"/>
                                    <label className="custom-control-label" htmlFor="customCheck22"></label>
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck23"/>
                                    <label className="custom-control-label" htmlFor="customCheck23"></label>
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck24"/>
                                    <label className="custom-control-label" htmlFor="customCheck24"></label>
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck25"/>
                                    <label className="custom-control-label" htmlFor="customCheck25"></label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">Мероприятие в любимой библиотеке</td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck31"/>
                                    <label className="custom-control-label" htmlFor="customCheck31"></label>
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck32"/>
                                    <label className="custom-control-label" htmlFor="customCheck32"></label>
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck33"/>
                                    <label className="custom-control-label" htmlFor="customCheck33"></label>
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck34"/>
                                    <label className="custom-control-label" htmlFor="customCheck34"></label>
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck35"/>
                                    <label className="custom-control-label" htmlFor="customCheck35"></label>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }
}
