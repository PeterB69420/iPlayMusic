import { IoIosPulse } from "react-icons/io";
import { IoIosMicrophone } from "react-icons/io";
import { TbBroadcast } from "react-icons/tb";
import { IoIosContrast } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "../styles/components/_footer.scss";

export default function Footer() {
    return (
        <nav className="dock">
            <ul className="dock__list">
                <li className="dock__item">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `dock__link${isActive ? " dock__link--active" : ""}`
                        }
                    >
                        <IoIosPulse className="dock__icon" />
                    </NavLink>
                </li>
                <li className="dock__item">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `dock__link${isActive ? " dock__link--active" : ""}`
                        }
                    >
                        <IoIosMicrophone className="dock__icon" />
                    </NavLink>
                </li>
                <li className="dock__item">
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            `dock__link${isActive ? " dock__link--active" : ""}`
                        }
                    >
                        <TbBroadcast className="dock__icon" />
                    </NavLink>
                </li>
                <li className="dock__item">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `dock__link${isActive ? " dock__link--active" : ""}`
                        }
                    >
                        <IoIosContrast className="dock__icon" />
                    </NavLink>
                </li>
                <li className="dock__item">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `dock__link${isActive ? " dock__link--active" : ""}`
                        }
                    >
                        <IoMdSettings className="dock__icon" />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}