import "./Header.css";
import { memo } from "react";

const Header = () => {
    return (
        <div className="Header">
            <h2>오늘은 📅</h2>
            <h3>{new Date().toDateString()}</h3>
        </div>
    )
};

export default memo(Header);