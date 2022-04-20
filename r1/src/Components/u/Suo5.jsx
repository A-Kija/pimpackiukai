function Suo5({ dogs }) {

    return (
        <div className="kvc">
            {
                dogs.map((d, i) => d.length > 6 ? <div key={i} className="kv kv_5" style={{color: 'green'}}>{d.length}</div> : <div key={i} className="kv kv_5" style={{color: 'crimson'}}>{d.length}</div>)
            }
        </div>
    );
}

export default Suo5;