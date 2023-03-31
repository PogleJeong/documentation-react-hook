import { Link } from "react-router-dom";
import Navi from "../components/Navi";


function UseState() {
    return(
        <div>
            <Navi />
            <Link to="useInput">++ useInput</Link>
        </div>
    );
};

export default UseState;