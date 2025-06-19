import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/pages/_albumsdetails.scss";
import { IoMdPlay } from "react-icons/io";

export default function AlbumsDetails() {
    const album = {
        title: "Old Town Road",
        songCount: 12,
        genres: ["#country", "#country road"],
        coverImage: "/albumcover.png",
        songs: [
            { title: "Old Town Road", artist: "Billy Ray Cyrus", duration: "3:58" },
            { title: "Don’t Call Me Up", artist: "Mabel", duration: "2:46" },
            { title: "Let Me Down Slowly", artist: "Alec Benjamin", duration: "4:12" },
            { title: "Paradise", artist: "Bazzi", duration: "3:12" },
            { title: "Sucker", artist: "Jonas Brothers", duration: "3:56" },
            { title: "Kill This Love", artist: "BLACKPINK", duration: "2:47" },
        ],
    };

    return (
        <>
            <Wrapper>
                <section className="album-hero">
                    <img
                        className="album-hero__image"
                        src={album.coverImage}
                        alt={`${album.title} cover`}
                    />
                    <div className="album-hero__header">
                        <Header search heading="Album" color="white"  />
                    </div>

                    <div className="album-hero__overlay">
                        <h2 className="album-hero__title">{album.title}</h2>
                        <p className="album-hero__song-count">{album.songCount} Songs</p>
                        <p className="album-hero__genretag">genres hashtags</p>
                        <div className="album-hero__genres">
                            {album.genres.map((genre, index) => (
                                <span key={index} className="album-hero__genre">{genre}</span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="album-songs">
                    <h2 className="album-songs__title">all songs</h2>
                    <ul className="album-songs__list">
                        {album.songs.map((song, index) => (
                            <li key={index} className="album-songs__item">
                                <button className="album-songs__play-button" aria-label={`Play ${song.title}`}>
                                    <span className="album-songs__play-icon"><IoMdPlay /></span>
                                </button>
                                <div className="album-songs__info">
                                    <h3 className="album-songs__song-title">{song.title}</h3>
                                    <p className="album-songs__artist">{song.artist}</p>
                                </div>
                                <p className="album-songs__duration">{song.duration}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </Wrapper>

            <Footer />
        </>
    );
}
