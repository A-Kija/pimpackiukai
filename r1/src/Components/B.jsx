
function B({showBlue}) {


    return (
        <div className="kvc">
        { showBlue ?
        <h2 style={{
            width: '100px',
            height: '100px',
            background: 'blue'
            }}></h2>
        : null
        }
        </div>

    )
    
}

export default B;