import book1 from '../imgs/book1.png'
import {Component} from "react";
import {Link} from "react-router-dom";
import '../styles/book.css';
import starImg1 from '../imgs/Star.png'
import starImg0 from '../imgs/Star0.svg'
export default class Book extends Component {
    render() {
        return (

            <div className="flex flex-column align-content-start book-container text-left">
                <img src={book1} alt="" className="book-img-box"/>
                <div >
                    <span className="book-title">
                        Думай медленно... Решай быстро
                    </span>
                </div>
                <Link to='/profile' className="book-writer">Даниэль Канеман</Link>
                <div>
                    <span style={{whiteSpace: 'pre-wrap'}}>
                        <img src={starImg1} /> 5.0
                    </span>
                </div>
            </div>

        );
    }
}
