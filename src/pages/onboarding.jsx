import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../components/wrapper";
import "../styles/pages/_onboarding.scss";
import { IoRadioSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { IoIosMusicalNote } from "react-icons/io";

export default function Onboarding() {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            navigate("/home");
        }
    };

    return (
        <Wrapper>
            <section className="onboarding-hero">
                <img
                    className="onboarding-hero__image"
                    src="/onboardingimage.png"
                    alt=""
                />
            </section>
            <section className="onboarding">
                {step === 1 && (
                    <div className="onboarding__step onboarding__step--welcome">
                        <div className="onboarding__content">
                            <h2 className="onboarding__title">where words fail, music speaks</h2>
                            <p className="onboarding__description">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                        </div>
                        <div className="onboarding__icons">
                            <div className="onboarding__icon-item--active">
                                <IoRadioSharp className="onboarding__icon onboarding__icon--radio" />
                            </div>
                            <div className="onboarding__icon-item">
                                <IoIosHeart className="onboarding__icon onboarding__icon--heart" onClick={nextStep} />
                            </div>
                            <div className="onboarding__icon-item">
                                <IoIosMusicalNote className="onboarding__icon onboarding__icon--note" />
                            </div>
                        </div>
                        <Link to="/featured" className="onboarding__button" onClick={nextStep}>skip</Link>
                    </div>
                )}
                {step === 2 && (
                    <div className="onboarding__step onboarding__step--music">
                        <div className="onboarding__content">
                            <h2 className="onboarding__title">no music no life</h2>
                            <p className="onboarding__description">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                        </div>
                        <div className="onboarding__icons">
                            <div className="onboarding__icon-item">
                                <IoRadioSharp className="onboarding__icon onboarding__icon--radio" />
                            </div>
                            <div className="onboarding__icon-item--active">
                                <IoIosHeart className="onboarding__icon onboarding__icon--heart" />
                            </div>
                            <div className="onboarding__icon-item">
                                <IoIosMusicalNote className="onboarding__icon onboarding__icon--note" onClick={nextStep} />
                            </div>
                        </div>
                        <Link to="/featured" className="onboarding__button" onClick={nextStep}>skip</Link>
                    </div>
                )}
                {step === 3 && (
                    <div className="onboarding__step onboarding__step--finish">
                        <div className="onboarding__content">
                            <h2 className="onboarding__title">peace, love and music</h2>
                            <p className="onboarding__description">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                        </div>
                        <div className="onboarding__icons">
                            <div className="onboarding__icon-item">
                                <IoRadioSharp className="onboarding__icon onboarding__icon--radio" />
                            </div>
                            <div className="onboarding__icon-item">
                                <IoIosHeart className="onboarding__icon onboarding__icon--heart" />
                            </div>
                            <div className="onboarding__icon-item--active">
                                <IoIosMusicalNote className="onboarding__icon onboarding__icon--note" />
                            </div>
                        </div>
                        <Link to="/featured" className="onboarding__button" onClick={nextStep}>skip</Link>
                    </div>
                )}
            </section>
        </Wrapper>

    );
}