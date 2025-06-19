import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router";
import "../styles/components/_header.scss";

export default function Header({ heading, search = false, color = "black" }) {
    let navigate = useNavigate();
    return (
        <header className="header" style={{ color }}>
            <div className="header-icon__div"><IoIosArrowBack size={24} onClick={() => (navigate(-1))} className="headerSide__icon" /></div>
            <h1 className="header__title" style={{ color }}>{heading}</h1>
            <div className="header-icon__div">
                {search ? <IoIosSearch size={24} className="header__icon" /> : ""}
            </div>
        </header>
    )
}