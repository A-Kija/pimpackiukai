import { Component } from "react";
class Kvadratukas extends Component {

    constructor() {
        super();
        console.log('constructor');
        this.state = {d: 0}
    }

    componentDidMount() {
        console.log('did mount', this.props);
        this.setState({d: this.props.digit})
    }


    componentWillUnmount() {
        console.log('numiro');
    }




    render() {
        return (
            <div className={'kv kv_' + this.props.color}>{this.state.d}</div>
        )
    }

}

export default Kvadratukas;