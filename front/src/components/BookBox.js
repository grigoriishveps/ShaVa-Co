import {Component} from "react";
import Book from './Book';
import '../styles/bookBox.css';
import {Link} from "react-router-dom";
export default class BookBox extends Component {
    constructor(props){
        super(props);
    }

    renderTitle(){
        const {first_title, last_title, reverse} = this.props.box;
        if (reverse){
            return(
                <span className="box-head-text">{first_title}<span className="color-t-pink"> {last_title}</span></span>
            )
        }
        else
            return(
                <span className="box-head-text"><span className="color-t-pink">{first_title}</span> {last_title}</span>
            )
    }

    render() {
        const {first_title, last_title,  reverse} = this.props.box;
        return (
            <div className="text-left">
                <div className="mb-3">
                    {this.renderTitle()}
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
                    <Book book={{}}/>
                    <Book book={{}}/>
                    <Book book={{}}/>
                </div>
            </div>
        );
    }
}
