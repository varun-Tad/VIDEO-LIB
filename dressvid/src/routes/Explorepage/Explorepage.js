import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { OptionsFilter, AllFilter } from "../../features/explore/exploreSlice";
import {
  addWatchLater,
  removeWatchLater,
} from "../../features/watchLater/watchLaterSlice";
import { MdPlaylistPlay } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";

import "./Explorepage.css";

import { setStatus, removeSetStatus } from "../../features/WlStatus/wlSlice";

const Explorepage = () => {
  const exploreSelected = useSelector(
    (state) => state.explore.selectedExploreOptions
  );

  const watchStatusSelected = useSelector(
    (state) => state.statusLater.watchedLaterNums
  );

  const dispatch = useDispatch();

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
        <button onClick={() => dispatch(AllFilter())}>All</button>
        <button onClick={() => dispatch(OptionsFilter("Brands"))}>
          Brands
        </button>
        <button onClick={() => dispatch(OptionsFilter("Shows"))}>Shows</button>
        <button onClick={() => dispatch(OptionsFilter("Courses"))}>
          Courses
        </button>
        <button onClick={() => dispatch(OptionsFilter("Vlogs"))}>Vlogs</button>
      </div>
      <main className="main-section">
        {exploreSelected.map((ele) => (
          <div className="optionCard" key={ele.id}>
            <div className="image-container">
              <img src={ele.img} alt="video banner" />
            </div>
            <div className="text-container">
              <h3>{ele.name}</h3>
              <small className="channel-name">by {ele.channelName}</small>
              <div className="small-btns">
                <button title="Add to playlist">
                  <MdPlaylistPlay />
                </button>

                {watchStatusSelected.some((everyNum) => everyNum === ele.id) ? (
                  <button
                    onClick={() => {
                      dispatch(removeSetStatus(ele.id));
                      dispatch(removeWatchLater(ele));
                    }}
                    title="Remove from watch later"
                  >
                    <AiFillClockCircle />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch(setStatus(ele.id));
                      dispatch(addWatchLater(ele));
                    }}
                    title="Watch later"
                  >
                    <AiOutlineClockCircle />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Explorepage;
