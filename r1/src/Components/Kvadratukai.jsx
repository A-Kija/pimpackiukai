import { Component } from "react";
import rand from '../Functions/rand';
import colors from '../Constants/colors';

class Kvadratukai extends Component {

    constructor() {
        super();
        this.state = {kv: []}
    }

    add = () => {
        const kvCopy = [...this.state.kv];// todel kad negalim keist tiesiogiai
        kvCopy.push(
            {
                digit: rand(10, 20),
                color: rand(1, 3)
            }
            );
        this.setState({kv: kvCopy});
    }

    sort = () => {
        const kvCopy = [...this.state.kv];// todel kad negalim keist tiesiogiai
        kvCopy.sort((a, b) => b.digit - a.digit);
        this.setState({kv: kvCopy});
    }

    render() {
        return(
        <>
            <button onClick={this.add}>ADD kvadratukas</button>
            <button onClick={this.sort}>Pasirūšiuokim</button>
            <div className="kvc">
            {
                this.state.kv.map((k, i) => <div key={i} className={'kv kv_' + k.color}>{k.digit}</div>)
            }
            </div>
        </>
        )
    }
}

export default Kvadratukai;