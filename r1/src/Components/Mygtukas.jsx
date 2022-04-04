function Mygtukas({sniurelis, sniurelis2, count}) {
    return (
        <>

        <button onClick={sniurelis}>+</button>
        <button onClick={sniurelis2}>[{count}]</button>

        </>
    )
}

export default Mygtukas;