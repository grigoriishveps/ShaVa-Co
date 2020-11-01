import Event from './Event';
import '../styles/eventBox.css';
import {Link} from "react-router-dom";
import {Component} from "react";
import Book from "./Book";
export default class EventBox extends Component {
    constructor(props){
        super(props);

        this.state={
            events:{}
        }
    }

    render() {
        return (
            <div className="text-left">
                <div className="mb-3">
                    <span className="box-head-text"><span className="color-t-pink">Рекомендованные вам</span> новинки</span>
                    <span className="filter-text mbhr">Фильтры</span>
                    <div className="dropdown d-inline dropdown-text mbhr">
                        <button className="btn btn-secondary dropdown-toggle dropdown-text-button" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Категория
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
                            Время
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
                            Даты
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
                    {/*{this.state.events.map((item, index)=>{*/}
                    {/*    const event={*/}
                    {/*        title: item['Название мероприятия'],*/}
                    {/*        address: item['Место проведения'],*/}
                    {/*    }*/}
                    {/*    return <Event event={event} />*/}
                    {/*})}*/}
                    <Event event={{}}/>
                </div>
            </div>
        );
    }
}
