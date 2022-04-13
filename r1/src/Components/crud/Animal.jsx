function Animal({a, deleteAnimal}) {

    return (
        <li className="list-group-item">
            <div className="bin">
                <div className="content">
                    <strong>{a.type}</strong>
                    <small>{a.weight}</small>
                    <span style={{visibility: a.isAlive ? 'visible' : 'hidden'}}></span>
                </div>
                <div className="buttons">
                <button type="button" className="btn btn-outline-success mr-3">Edit</button>
                <button type="button" onClick={() => deleteAnimal(a.id)} className="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Animal;