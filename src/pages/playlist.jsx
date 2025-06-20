
import { NavLink } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import Wrapper from "../components/wrapper";
import "../styles/pages/_playlist.scss"
import { IoMdPlay } from "react-icons/io";

export default function Playlist() {

    const playlist = {
        title: 'Top 50 Rock Ballads',
        coverImage: '/coverimage.png',
        songs: [
            { title: 'Old Town Road', artist: 'Billy Ray Cyrus', duration: '3:58' },
            { title: 'Don’t Call Me Up', artist: 'Mabel', duration: '2:46' },
            { title: 'Let Me Down Slowly', artist: 'Alec Benjamin', duration: '4:12' },
            { title: 'Here With Me', artist: 'Marshmello', duration: '3:37' },
            { title: 'Paradise', artist: 'Bazzi', duration: '3:12' },
            { title: 'Let Me Down Slowly', artist: 'Alec Benjamin', duration: '4:12' },
            { title: 'Here With Me', artist: 'Marshmello', duration: '3:37' },
            { title: 'Paradise', artist: 'Bazzi', duration: '3:12' },
        ],
    };
    return (
        <>
            <Wrapper>
            <div className="background">
                    <div className="background__div"></div>
                </div>
                <Header search heading='PLAYLISTS' color="white" />
                <section className="playlists">
                    <h2 className="playlists__title">playlists</h2>
                    <div>
                        <div className="playlists__albums">
                            <NavLink to="/albums">
                            <img className="playlists__cover" src={playlist.coverImage} alt="Cover" />
                            </NavLink>
                            <NavLink to="/albums">
                            <img className="playlists__cover" src={playlist.coverImage} alt="Cover" />
                            </NavLink>
                            <NavLink to="/albums">
                            <img className="playlists__cover" src={playlist.coverImage} alt="Cover" />
                            </NavLink>
                        </div>
                        <h3 className="playlists__top-title">{playlist.title}</h3>
                    </div>

                    <div className="playlists__list">
                        {playlist.songs.map((song, index) => (
                            <div className="playlists__item" key={index}>
                                <NavLink to="/musicplayer">
                                <button className="playlists__play-button"><IoMdPlay /></button>
                                </NavLink>
                                <div className="playlists__info">
                                    <h4 className="playlists__song-title">{song.title}</h4>
                                    <p className="playlists__song-artist">{song.artist}</p>
                                </div>
                                <div className="playlists__duration">{song.duration}</div>
                            </div>
                        ))}
                    </div>
                    <div className="playlists__button-div">
                    <button className="playlists__listen-button">Listen All</button>
                    </div>
                </section>
            </Wrapper>
            <Footer />
        </>
    )
}