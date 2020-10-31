import {Fragment, Component} from "react";
import BookBox from "./BookBox";
import EventBox from "./EventBox";

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <BookBox />
                <EventBox />
                <BookBox />
            </Fragment>
        );
    }
}
