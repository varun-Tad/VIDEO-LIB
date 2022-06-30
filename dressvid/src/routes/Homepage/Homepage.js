import { Link } from "react-router-dom";
import { categoriesData } from "./categories.data";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home">
      <div>
        <img
          src="https://assets.vogue.com/photos/627eb7867f35b37d9fece617/4:3/w_1600%2Cc_limit/australian-fashion-week-2022-street-style-su-shan-leong-day5-006.jpg"
          alt="images"
        />
        <div className="tag-line">Dive into the World of Fashion</div>
      </div>
      <h1 className="title">Categories</h1>
      <section className="categories">
        {categoriesData.map((item) => {
          return (
            <div key={item.name} className={item.cName}>
              <h2>{item.name}</h2>
              <Link to={item.path}>
                <div className="background-image">
                  <img src={item.img} alt="catgeory" />
                </div>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Homepage;
