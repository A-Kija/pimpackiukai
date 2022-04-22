import { useParams } from "react-router-dom";
import { monsters } from "../../App";

function Monster() {


    const {id} = useParams();


    return (
        <div className="kvc">

            {
                monsters.filter(m => parseInt(id) === m.id)[0].type
            }

        </div>
    )
}

export default Monster;