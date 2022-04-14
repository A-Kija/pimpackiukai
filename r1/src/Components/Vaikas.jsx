import { useContext } from "react";
import SenelioZinios from "../Contexts/SenelioZinios";
import SenelioZinios2 from "../Contexts/SenelioZinios2";

function Vaikas() {

const sz = useContext(SenelioZinios);
const sz2 = useContext(SenelioZinios2);

    return (
      <div className="line">
          <h2>Va: {sz}{sz2}</h2>



            {/* <SenelioZinios.Consumer>
                {
                    v => {
                        return (
                        <h2>
                            Va: {v}
                        </h2>
                    )}
                }
            </SenelioZinios.Consumer> */}

    </div>
    );
  }
  
  export default Vaikas;