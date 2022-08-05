import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { OptionsFilter, AllFilter } from "../../features/explore/exploreSlice";
import { categoriesData } from "./categories.data";
import "./Homepage.css";

const Homepage = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const exploreHandler = () => {
    navigate("/explore");
    dispatch(AllFilter());
  };

  const navExploreHandler = (itemName) => {
    navigate("/explore");
    dispatch(OptionsFilter(`${itemName}`));
  };

  return (
    <div className="home">
      <div className="home-hero">
        <img
          src="https://assets.vogue.com/photos/627eb7867f35b37d9fece617/4:3/w_1600%2Cc_limit/australian-fashion-week-2022-street-style-su-shan-leong-day5-006.jpg"
          alt="images"
        />
        <div className="tag-line">Dive into the World of Fashion</div>
        <button className="exp-btn" onClick={exploreHandler}>
          Explore →
        </button>
      </div>
      <h1 className="title">Categories</h1>
      <section className="categories">
        {categoriesData.map((item) => {
          return (
            <div onClick={() => navExploreHandler(item.name)}>
              <div className="img-cont" key={item.name}>
                <img loading="lazy" src={item.img} alt="category" />
                <div className="img-center">{item.name}</div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Homepage;
