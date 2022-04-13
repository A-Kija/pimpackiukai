import { useState } from "react";

function Edit() {

    const [type, setType] = useState('');
    const [weight, setWeight] = useState('');
    const [isAlive, setIsAlive] = useState(0);

    // const buttonHandler = () => {
    //     setCreate({type, weight, isAlive});
    //     setType('');
    //     setWeight('');
    //     setIsAlive(0);
    // }

    return (
        <div className="container edit">
            <div className="row">
                <div className="col-sm">
                    <div className="card mt-4">
                        <h5 className="card-header">Edit</h5>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Animal</label>
                                <input type="text" className="form-control" onChange={e => setType(e.target.value)} value={type} />
                                <small className="form-text text-muted">Enter animal type or name</small>
                            </div>
                            <div className="form-group">
                                <label>Animal weight</label>
                                <input type="text" className="form-control" onChange={e => setWeight(e.target.value.replace(/,/g, '.'))} value={weight} />
                                <small className="form-text text-muted">How big is the animal</small>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onChange={() => setIsAlive(a => a ? 0 : 1)} checked={isAlive} type="checkbox" />
                                <label className="form-check-label">
                                    Is alive
                                </label>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;