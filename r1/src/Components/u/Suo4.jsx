function Suo4({ dogs }) {

    return (
        <div className="kvc">
            {
                dogs.map((d, i) => d === d.toLowerCase() ? <div key={i} className="kv kv_4">{d}</div> : null)
            }
        </div>
    );
}

export default Suo4;