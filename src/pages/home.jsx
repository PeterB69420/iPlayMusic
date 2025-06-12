import Footer from "../components/footer";
import Header from "../components/header";
import Tags from "../components/tags";
import Wrapper from "../components/wrapper";
import "../styles/pages/_home.scss";


export default function HomePage() { 
    return (
        <>
        <Wrapper>
            <Header search />
            <section className="home">
                <h2 className="home__title">events feed</h2>
                <Tags />
            </section>
        </Wrapper>
        <Footer />
    </>
    );
}