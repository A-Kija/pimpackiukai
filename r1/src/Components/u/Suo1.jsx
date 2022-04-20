function Suo1({ dogs }) {

    return (
        <div className="kvc">
            {
                dogs.map((d, i) => <div key={i} className="kv kv_2">{d}</div>)
            }
        </div>
    );
}

export default Suo1;