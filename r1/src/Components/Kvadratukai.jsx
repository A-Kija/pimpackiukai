import { Component } from "react";
import rand from '../Functions/rand'

class Kvadratukai extends Component {

    constructor() {
        super();
        this.state = {kv: []}
    }

    add = () => {
        const kvCopy = [...this.state.kv];// todel kad negalim keist tiesiogiai
        kvCopy.push(rand(10, 20));
        this.setState({kv: kvCopy});
    }

    sort = () => {
        const kvCopy = [...this.state.kv];// todel kad negalim keist tiesiogiai
        kvCopy.sort((a, b) => a - b);
        this.setState({kv: kvCopy});
    }

    render() {
        return(
        <>
            <button onClick={this.add}>ADD kvadratukas</button>
            <button onClick={this.sort}>Pasirūšiuokim</button>
            <div className="kvc">
            {
                this.state.kv.map((k, i) => <div key={i} className="kv">{k}</div>)
            }
            </div>
        </>
        )
    }
}

export default Kvadratukai;