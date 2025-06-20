import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Wrapper from "../components/wrapper";
import { IoIosArrowForward, IoIosMore } from "react-icons/io";
import "../styles/pages/_categories.scss";

const categoryData = [
  {
    name: "Alternative",
    color: "#d70060",
    subcategories: ["Indie Rock", "Grunge", "New Wave"],
  },
  {
    name: "Blues",
    color: "#e54028",
    subcategories: [
      "Acoustic Blues",
      "Blues Rock",
      "Canadian Blues",
      "Jazz Blues",
      "Piano Blues",
      "Soul Blues",
      "Swamp Blues",
    ],
  },
  {
    name: "Classical",
    color: "#f18d05",
    subcategories: ["Baroque", "Romantic", "Contemporary"],
  },
  {
    name: "Country",
    color: "#f2bc06",
    subcategories: ["Classic Country", "Bluegrass", "Alt-Country"],
  },
  {
    name: "Dance",
    color: "#5eb11c",
    subcategories: ["House", "Trance", "Dubstep"],
  },
  {
    name: "Electronic",
    color: "#3a7634",
    subcategories: ["Techno", "Ambient", "IDM"],
  },
  {
    name: "Fitness & Workout",
    color: "#0abebe",
    subcategories: ["Cardio", "HIIT", "Stretch"],
  },
  {
    name: "Hip-Hop/Rap",
    color: "#00a1cb",
    subcategories: ["Trap", "Boom Bap", "West Coast"],
  },
  {
    name: "Industrial",
    color: "#115793",
    subcategories: ["Aggrotech", "Noise", "EBM"],
  },
];

export default function Categories() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <>
      <Wrapper>
        <Header search heading="CATEGORIES" />
        <section className="categories">
          <h2 className="categories__title">categories</h2>
          <div className="categories__list">
            {categoryData.map((cat) => (
              <div key={cat.name}>
                <div
                  className="categories__item"
                  style={{ backgroundColor: cat.color }}
                  onClick={() => toggleCategory(cat.name)}
                >
                  <span className="categories__item-title">{cat.name.toLowerCase()}</span>
                  <IoIosMore className="categories__item-icon" />
                </div>
                {openCategory === cat.name && (
                  <div className="categories__dropdown">
                    {cat.subcategories.map((sub) => (
                      <div key={sub} className="categories__subitem">
                        {sub} <IoIosArrowForward />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </Wrapper>
      <Footer />
    </>
  );
}
