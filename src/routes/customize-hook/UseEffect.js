import { Navi, NaviUseEffect } from "../../components/Navi";
import { Link } from "react-router-dom";
function UseEffect() {
    return(
        <div>
            <Navi />
            <hr/>
            <Link to="/useEffect">&larr; UseState Effect</Link><br/>
            <NaviUseEffect />
        </div>
    );
}

export default UseEffect;