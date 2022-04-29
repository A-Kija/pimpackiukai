function Ranger({minMax}) {

    return (
        <div>
        <div><label>Book minimal price:</label></div>
        <input type="range" min={Math.floor(minMax[0])} max={Math.ceil(minMax[1])} />
        </div>
    )
}

export default Ranger;