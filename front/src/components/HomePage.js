import {Fragment, Component, useEffect} from "react";
import BookBox from "./BookBox";
import EventBox from "./EventBox";

export default class HomePage extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // if (!localStorage.getItem('tc-token') ){
        //     this.props.history.push('/login');
        // }
    }

    render() {
        return (
            <Fragment>
                <BookBox box={{first_title:'Рекомендованные вам', last_title:'новинки'}}/>
                <EventBox />
                <BookBox box={{first_title:'Популярные книги', last_title:'у таких как вы',reverse:true}}/>
            </Fragment>
        );
    }
}
