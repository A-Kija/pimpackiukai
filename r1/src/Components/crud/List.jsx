import Animal from "./Animal";

function List({animals, deleteAnimal, setShowId}) {

    return (
        <div className="container list">
            <div className="row">
                <div className="col-sm">
                    <div className="card mt-4">
                        <h5 className="card-header">List</h5>
                        <div className="card-body">
                            <ul className="list-group">
                                {
                                    animals.map(a => <Animal key={a.id} a={a} deleteAnimal={deleteAnimal} setShowId={setShowId}></Animal>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;