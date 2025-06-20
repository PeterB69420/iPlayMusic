import React from "react";
import "../styles/pages/_musicplayer.scss";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import { IoPlaySharp } from "react-icons/io5";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";

export default function MusicPlayer() {
    const track = {
        title: "Don’t Call Me Up",
        artist: "Mabel",
        duration: "3:40",
        currentTime: "0:00"
    };

    return (
        <>
            <Wrapper>
                <Header search heading="PLAYING" color="black" />
                <section className="player">
                    <div className="player__vinyl-container">
                    <div className="player__vinyl">
                        <img
                            className="player__vinyl-image"
                            src="/musicplayer.png"
                            alt="Spinning vinyl record"
                        />
                    </div>
                    </div>
                    <div className="player__waveform"/>
                <section className="player__info">
                    <h2 className="player__title">{track.title}</h2>
                    <p className="player__artist">{track.artist}</p>
                </section>

                <section className="player__progress">
                    <input
                        type="range"
                        className="player__slider"
                        min="0"
                        max="220"
                        value="0"
                    />
                    <div className="player__time">
                        <span className="player__time-current">{track.currentTime}</span>
                        <span className="player__time-duration">{track.duration}</span>
                    </div>
                </section>

                <section className="player__controls">
                    <button className="player__control player__control--skipprev"><IoIosSkipBackward /></button>
                    <button className="player__control player__control--prev"><TbPlayerTrackPrevFilled /></button>
                    <button className="player__control player__control--play"><IoPlaySharp /></button>
                    <button className="player__control player__control--next"><TbPlayerTrackNextFilled /></button>
                    <button className="player__control player__control--skipprev"><IoIosSkipForward /></button>
                </section>
                </section>
            </Wrapper>
        </>
    );
}
