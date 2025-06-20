import { useState, useEffect } from "react";
import { IoIosContact } from "react-icons/io";
import { IoIosKey } from "react-icons/io";
import { IoIosFingerPrint } from "react-icons/io";
import Wrapper from "../components/wrapper";
import "../styles/pages/_login.scss";
import "../styles/components/_splashscreen.scss";
import "animate.css";
import { Link } from "react-router";
import "../styles/base/_resets.scss"

export default function Login() {
    const [showSplash, setShowSplash] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setShowSplash(false);
            }, 1000);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showSplash && (
                <div className={`splash-screen ${fadeOut ? "splash-screen--fade-out" : ""}`}>
                    <img
                        src="/splashscreenlogomusicapp.png"
                        alt="Splash Screen Logo"
                        className="splash-screen__logo animate__animated animate__rubberBand"
                    />
                </div>
            )}
            {!showSplash && (
                <Wrapper>
                    <section className="login">
                        <h2 className="login__title">Log In</h2>
                        <form className="login__form">
                            <div className="login__form-group">
                                <label className="login__label" htmlFor="username">Username</label>
                                <input
                                    className="login__input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username"
                                    required
                                />
                                <IoIosContact className="login__icon" />
                                
                            </div>
                            <div className="login__form-group">
                                <label className="login__label" htmlFor="password">Password</label>
                                <input
                                    className="login__input"
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                />
                                <IoIosKey className="login__icon" />
                            </div>
                            <Link to="/onboarding" className="login__button" type="submit">Log In</Link>
                        </form>
                        <div className="touch">
                            <IoIosFingerPrint className="touch__icon" />
                        </div>
                        <p className="touch__text">one-touch login</p>
                    </section>
                </Wrapper>
            )}
        </>
    );
}