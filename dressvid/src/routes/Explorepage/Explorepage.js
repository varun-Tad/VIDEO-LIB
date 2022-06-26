import { BsSearch } from "react-icons/bs";
import "./Explorepage.css";

const Explorepage = () => {
  return (
    <div>
      <div className="inputText-container">
        <input
          className="search-box"
          type="search"
          placeholder="Search..."
        ></input>
        <button className="search-btn">
          <BsSearch />
        </button>
      </div>
      <div className="options">
        <button>All</button>
        <button>Brands</button>
        <button>Shows</button>
        <button>Courses</button>
        <button>Vlogs</button>
      </div>
      <main className="main-section"></main>
    </div>
  );
};

export default Explorepage;
