import { Component } from "react";

class Kvadratukai extends Component {

    constructor() {
        super();
        this.state = {kv: []}
    }

    add = () => {
        const kvCopy = [...this.state.kv];
        kvCopy.push(1);
        this.setState({kv: kvCopy});
    }


    render() {
        return(
        <>
            <button onClick={this.add}>ADD kvadratukas</button>
            {
                this.state.kv.map((k, i) => <div key={i} className="kv"></div>)
            }
            
        </>
        )
    }
}

export default Kvadratukai;