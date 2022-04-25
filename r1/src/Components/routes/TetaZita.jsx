import { useParams } from "react-router-dom";
import { tz } from "../../App13";

function TetaZita() {

    const { id } = useParams();

    return (
        <div className="kv aps kv_10">
            {
                tz.filter(m => parseInt(id) === m.id)[0].what
            }
        </div>
    )
}

export default TetaZita;