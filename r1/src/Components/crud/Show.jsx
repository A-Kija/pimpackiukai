import Edit from "./Edit";

function Show({ showId }) {

    if (showId === 0) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Edit></Edit>
                    </div>
                </div>
            </div>
        </div>
    )



}

export default Show;