import { Link } from "react-router-dom";

function Navi() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/useState" >useState</Link></li>
                <li><Link to="/useEffect">useEffect</Link></li>
            </ul>
        </nav>
    );
};

export default Navi;