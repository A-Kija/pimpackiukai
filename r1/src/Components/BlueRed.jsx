function BlueRed(props) {
    if (props.color === 'B') {
        return (
            <div style={{color:'blue'}}>BLUE COLOR</div>
        )
    }
    if (props.color === 'R') {
        return (
            <div style={{color:'red'}}>RED COLOR</div>
        )
    }
    return null;
}

export default BlueRed;