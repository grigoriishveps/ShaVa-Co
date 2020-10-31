import {Component} from "react";
import Book from './Book';
import '../styles/bookBox.css';
import {Link} from "react-router-dom";
export default class BookBox extends Component {
    render() {
        return (
            <div className="text-left">
                <div className="mb-3">
                    <span className="box-head-text"><span className="color-t-pink">Рекомендованные вам</span> новинки</span>
                    <span className="filter-text mbhr">Фильтры</span>
                    <div className="dropdown d-inline dropdown-text mbhr">
                        <button className="btn btn-secondary dropdown-toggle dropdown-text-button" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Жанры
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="dropdown d-inline dropdown-text mbhr">
                        <button className="btn btn-secondary dropdown-toggle dropdown-text-button" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Темы
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <Link to='/' className="box-head-link mbhr">Вся подборка</Link>
                </div>

                <div className="d-flex d-row justify-content-start">
                    <Book />
                    <Book />
                    <Book />
                </div>
            </div>
        );
    }
}
