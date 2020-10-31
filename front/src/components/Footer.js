import {Component} from "react";
import '../styles/footer.css'
import {Link} from "react-router-dom";
import vkImg from '../imgs/VK.svg'
import facebookImg from '../imgs/Fasebook.svg'
import instagramImg from '../imgs/Instagram.svg'
import logoImg from "../imgs/logo.svg";

export default class Footer extends Component {
    render() {
        return (
            <footer className="d-flex flex-column justify-content-between">
                <div className="d-flex flex-row justify-content-start">
                    <div className="footer-left d-flex flex-column text-left">

                            <Link to='' className="footer-text-xl">Главная</Link>
                            <Link to='' className="footer-text-xl">Каталог</Link>
                            <Link to='' className="footer-text-xl">Книги</Link>
                            <Link to='' className="footer-text-xl">Мероприятия</Link>
                            <Link to='' className="footer-text-xl">Библиотеки Москвы</Link>
                            <Link to='' className="footer-text-xl color-t-pink">Заявка на книгу</Link>


                    </div>
                    <div className="container footer-right ml-0 pl-0">
                        <div className="row justify-content-start ml-0 pl-0">
                            <div className="footer-box d-flex flex-column text-left">

                                <Link to={''} className="footer-text-sm">Новинки</Link>
                                <Link to={''} className="footer-text-sm">Книги для компаний</Link>
                                <Link to={''} className="footer-text-sm">Папамамам</Link>
                                <Link to={''} className="footer-text-sm">Условия доставки</Link>
                                <Link to={''} className="footer-text-sm">Где купить книги</Link>
                                <Link to={''} className="footer-text-sm">Партнерская программа</Link>
                                <Link to={''} className="footer-text-sm">Творчество</Link>
                            </div>
                            <div className="footer-box d-flex flex-column text-left">
                                <Link to={''} className="footer-text-sm">Популярные книги</Link>
                                <Link to={''} className="footer-text-sm">Скоро появятся</Link>
                                <Link to={''} className="footer-text-sm">Бизнес</Link>
                                <Link to={''} className="footer-text-sm">Маркетинг</Link>
                                <Link to={''} className="footer-text-sm">Саморазвитие</Link>
                                <Link to={''} className="footer-text-sm">Культура и искусство</Link>
                            </div>
                            <div className="footer-box d-flex flex-column text-left">
                                <Link to={''} className="footer-text-sm">Комиксы и детские книги</Link>
                                <Link to={''} className="footer-text-sm">Детские книги</Link>
                                <Link to={''} className="footer-text-sm">Креатив</Link>
                                <Link to={''} className="footer-text-sm">Расширяющие кругозор</Link>
                                <Link to={''} className="footer-text-sm">Здоровый образ жизни</Link>
                                <Link to={''} className="footer-text-sm">Научпоп</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div className="mt-auto">
                        <span className="footer-text-sm">&#169; ShaVa&Co 2020</span>
                    </div>
                    <div>
                        <img src={vkImg} className="footer-icon"/>
                        <img src={instagramImg} className="footer-icon"/>
                        <img src={facebookImg} className="footer-icon"/>
                    </div>
                </div>
            </footer>
        );
    }
}
