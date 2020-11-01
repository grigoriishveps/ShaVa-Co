import book1 from '../imgs/image2.png'
import {Component} from "react";
import {Link} from "react-router-dom";
import '../styles/event.css';
export default class Event extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {title, date, srcImg, address} = this.props.event;
        return (
            <div className="">
                <div className="flex flex-column align-content-start event-container text-left">
                    <img src={book1} alt="" className="event-img-box"/>
                    <div >
                        <span className="event-title">
                           {title?title:'Думай медленно... Решай быстро'}
                        </span>
                    </div>
                    <Link to='/' className="event-writer">
                        {date?date:'22 ноября, 18-00'}
                    </Link>
                    <div >
                        <span className="event-title">
                            {address?address:"\"Буквоед\" Бла-бла-бла"}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
