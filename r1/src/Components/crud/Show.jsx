import Edit from "./Edit";

function Show({ showId, setShowId, show }) {

    if (showId === 0) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" onClick={() => setShowId(0)} className="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Edit setShowId={setShowId} showData={show()}></Edit>
                    </div>
                </div>
            </div>
        </div>
    )



}

export default Show;