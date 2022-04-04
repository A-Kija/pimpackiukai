function Kv({kv}) {

    return (

        <div className='kvc'>
            {
                kv.map((k, i) => <div key={i} className="kv kv_2">{k}</div>)
            }
        </div>
    )

}

export default Kv;