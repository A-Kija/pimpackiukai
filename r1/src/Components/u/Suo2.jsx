function Suo2({ dogs }) {

    return (
        <div className="kvc">
            {
                dogs.map((d, i) => <div key={i} className="kv kv_1 aps">{d}<span className="number">{i + 1}</span></div>)
            }
        </div>
    );
}

export default Suo2;