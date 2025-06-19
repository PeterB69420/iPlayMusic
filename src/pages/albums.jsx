import Footer from "../components/footer";
import Header from "../components/header";
import Wrapper from "../components/wrapper";
import { NavLink } from "react-router-dom";
import "../styles/pages/_albums.scss";

export default function Albums() {
    const featuredAlbums = [
        { img: '/albumone.png' },
        { img: '/albumtwo.png' },
        { img: '/albumthree.png' },
    ];

    const newReleases = [
        { title: 'Old Town Road', artist: 'Billy Ray Cyrus', songs: 12, img: '/albumthree.png' },
        { title: 'Victory Lab', artist: 'Nipsey Hussle', songs: 8, img: '/albumfour.png' },
        { title: 'Thank U, Next', artist: 'Ariana Grande', songs: 13, img: '/albumfive.png' },
        { title: 'Death Race For Love', artist: 'Juice WRLD', songs: 11, img: 'albumsix.png' },
    ];

    return (
        <>
            <Wrapper>
                <Header search heading='MUSIC' />
                <section className="albums">
                    <h2 className="albums__title">all albums</h2>
                    <section className="albums__section">
                        <div className="albums__section-header">
                            <h2 className="albums__section-title">featured albums</h2>
                            <p className="albums__view-all">view all</p>
                        </div>
                        <div className="albums__featured-list">
                            {featuredAlbums.map((album, index) => (
                                <div className="albums__featured-item" key={index}>
                                    <NavLink to="/albumsdetails">
                                        <img src={album.img} alt="Featured" className="albums__featured-img" />
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="albums__section">
                        <div className="albums__section-header">
                            <h2 className="albums__section-title">new releases</h2>
                            <p className="albums__view-all">view all</p>
                        </div>
                        <ul className="albums__list">
                            {newReleases.map((album, index) => (
                                <li className="albums__item" key={index}>
                                    <NavLink to="/albumsdetails">
                                        <img src={album.img} alt={album.title} className="albums__thumb" />
                                    </NavLink>
                                    <div className="albums__info">
                                        <h3 className="albums__album-title">{album.title}</h3>
                                        <p className="albums__artist">{album.artist}</p>
                                    </div>
                                    <p className="albums__songs">{album.songs} Songs</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>
            </Wrapper>
            <Footer />
        </>
    );
}