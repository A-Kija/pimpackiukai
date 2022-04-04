function Kv({kv}) {

    return (

        <>
            {
                kv.map((k, i) => <div key={i} className="kv kv_2">{k}</div>)
            }
        </>
    )

}

export default Kv;