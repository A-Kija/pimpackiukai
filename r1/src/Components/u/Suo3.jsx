function Suo3({ dogs }) {

    return (
        <div className="kvc">
            {
                dogs.map((d, i) => i % 2 ? <div key={i} className="kv kv_3 aps">{d}</div> : <div key={i} className="kv kv_3">{d}</div>)
            }
        </div>
    );
}

export default Suo3;