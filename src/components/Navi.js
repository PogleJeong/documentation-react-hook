import { Link } from "react-router-dom";

export const Navi = () => {
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

export const NaviUseState = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/useState/useInput" >useInput</Link></li>
                <li><Link to="/useState/useTabs">useTabs</Link></li>
            </ul>
        </nav>
    );
}

export const NaviUseEffect = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/useEffect/useClick">useClick</Link></li>
            </ul>
        </nav>
    )
}