import { Component } from "react";

class State extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>{this.props.hello}</div>
        )
    }

}


export default State;