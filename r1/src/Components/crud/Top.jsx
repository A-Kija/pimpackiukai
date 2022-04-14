import Sort from "./Sort";

function Top({doSort}) {

    return (
    <div className="container top">
        <div className="row">
            <div className="col-sm">
                <div className="bin">
                    <h1>Zoo Museum</h1>
                    <Sort doSort={doSort}></Sort>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Top;