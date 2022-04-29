function Ranger({minMax, filter, setFilter}) {

    return (
        <div>
        <div><label>Book minimal price: {filter}</label></div>
        <input type="range" min={Math.floor(minMax[0])} max={Math.ceil(minMax[1])} value={filter} onChange={e => setFilter(e.target.value)}/>
        </div>
    )
}

export default Ranger;