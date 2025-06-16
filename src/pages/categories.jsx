import Footer from "../components/footer";
import Header from "../components/header";
import Wrapper from "../components/wrapper";
import { IoIosMore } from "react-icons/io";
import "../styles/pages/_categories.scss"

export default function Categories() {
  return (
    <>
      <Wrapper>
        <Header search heading='CATEGORIES' />
        <section className="categories">
          <h2 className="categories__title">categories</h2>
          <div className="categories__list">
            <div className="categories__item" style={{ backgroundColor: '#d70060'}}>
              <span className="categories__item-title">alternative</span>
              <IoIosMore className="categories__item-icon" />
            </div>
            <div className="categories__item" style={{ backgroundColor: '#e54028'}}>
              <span className="categories__item-title">blues</span>
              <IoIosMore className="categories__item-icon" />
            </div>
            <div className="categories__item" style={{ backgroundColor: '#f18d05'}}>
              <span className="categories__item-title">classical</span>
              <IoIosMore className="categories__item-icon" />
            </div>
            <div className="categories__item" style={{ backgroundColor: '#f2bc06'}}>
              <span className="categories__item-title">country</span>
              <IoIosMore className="categories__item-icon" />
            </div>
            <div className="categories__item" style={{ backgroundColor: '#5eb11c'}}>
              <span className="categories__item-title">dance</span>
              <IoIosMore className="categories__item-icon" />
            </div>
            <div className="categories__item" style={{ backgroundColor: '#3a7634'}}>
              <span className="categories__item-title">electronic</span>
              <IoIosMore className="categories__item-icon" />
            </div>
            <div className="categories__item" style={{ backgroundColor: '#0abebe'}}>
              <span className="categories__item-title">fitness & workout</span>
              <IoIosMore className="categories__item-icon" />
            </div>
            <div className="categories__item" style={{ backgroundColor: '#00a1cb'}}>
              <span className="categories__item-title">hip-hop/rap</span>
              <IoIosMore className="categories__item-icon" />
            </div>
            <div className="categories__item" style={{ backgroundColor: '#115793'}}>
              <span className="categories__item-title">industrial</span>
              <IoIosMore className="categories__item-icon" />
            </div>
          </div>
        </section>
      </Wrapper>

      <Footer />
    </>
  )
}