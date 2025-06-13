import Footer from "../components/footer";
import Header from "../components/header";
import Wrapper from "../components/wrapper";
import "../styles/pages/_home.scss";


export default function HomePage() {

    return (
        <>
            <Wrapper>
                <Header search heading='FEATURED' />
                <section className="featured">
                    <h2 className="featured__title">featured</h2>
                    <div className="featured__card">
                        <img
                            src="/featured-image-one.png"
                            alt="The Greatest Showman"
                            className="featured__image"
                        />
                        <div className="featured__card-info">
                            <h3 className="featured__card-info-title">the greatest showman</h3>
                            <p className="featured__card-info-desc">soundtrack</p>
                        </div>
                    </div>

                    <div className="featured__card">
                        <img
                            src="/featured-image-two.png"
                            alt="Another Album"
                            className="featured__image"
                        />
                        <div className="featured__card-info">
                            <h3 className="featured__card-info-title">another album</h3>
                            <p className="featured__card-info-desc">soundtrack</p>
                        </div>
                    </div>
                </section>
            </Wrapper>
            <Footer />
        </>
    );
}