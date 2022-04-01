import { Component } from "react";
class Kvadratukas extends Component {

    constructor() {
        super();
        console.log('constructor');
        this.state = {d: 0}
    }

    componentDidMount() {
        const mas = {v:'bebras', p:'zebras'};

        const {p, v} = mas;
        // const a = mas[0];
        // const b = mas[1];

        console.log('did mount', p, v);
        this.setState({d: this.props.digit})
    }


    componentWillUnmount() {
        console.log('numiro');
    }

    cd = () => {
        let d = this.state.d;
        d++;
        this.setState({d: d});
    }



    render() {
        return (
            <div className={'kv kv_' + this.props.color} onClick={this.cd}>{this.state.d}</div>
        )
    }

}

export default Kvadratukas;