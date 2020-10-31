import book1 from '../imgs/image2.png'
import {Component} from "react";
import {Link} from "react-router-dom";
import '../styles/event.css';
export default class Event extends Component {
    render() {
        return (
            <div className="">
                <div className="flex flex-column align-content-start event-container text-left">
                    <img src={book1} alt="" className="event-img-box"/>
                    <div >
                        <span className="event-title">
                            Думай медленно... Решай быстро
                        </span>
                    </div>
                    <Link to='/' className="event-writer">22 ноября, 18-00</Link>
                    <div >
                        <span className="event-title">
                            "Буквоед" Бла-бла-бла
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
