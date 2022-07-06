import { useDispatch, useSelector } from "react-redux";
import {
  OptionsFilter,
  AllFilter,
  SearchFilter,
} from "../../features/explore/exploreSlice";
import {
  addWatchLater,
  removeWatchLater,
} from "../../features/watchLater/watchLaterSlice";
import {
  addLiked,
  removedLiked,
} from "../../features/LikeDislike/LikeDislikeSlice";
import { addHistory } from "../../features/history/historySlice";
import { setStatus, removeSetStatus } from "../../features/WlStatus/wlSlice";
import {
  setLikeStatus,
  removeLikeSetStatus,
} from "../../features/LikeStatus/LikeSlice";
import { MdPlaylistPlay } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import "./Explorepage.css";
import { useNavigate } from "react-router-dom";

const Explorepage = () => {
  const exploreSelected = useSelector(
    (state) => state.explore.selectedExploreOptions
  );

  const watchStatusSelected = useSelector(
    (state) => state.statusLater.watchedLaterNums
  );

  const likeStatusSelected = useSelector((state) => state.statusLike.LikedNums);

  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    dispatch(SearchFilter(e.target.value));
  };

  let navigate = useNavigate();

  return (
    <div>
      <div className="inputText-container">
        <input
          className="search-box"
          type="search"
          placeholder="Search..."
          onChange={inputChangeHandler}
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
            <div
              onClick={() => {
                dispatch(addHistory(ele));
                navigate(`/singlepage/${ele.id}`);
              }}
              className="image-container"
            >
              <img src={ele.img} alt="video banner" />
            </div>
            <div className="text-container">
              <h3>{ele.name}</h3>
              <small className="channel-name">by {ele.channelName}</small>
              <div className="small-btns">
                <button title="Add to playlist">
                  <MdPlaylistPlay />
                </button>

                {likeStatusSelected.some((everyNum) => everyNum === ele.id) ? (
                  <button
                    title="Unlike video"
                    onClick={() => {
                      dispatch(removeLikeSetStatus(ele.id));
                      dispatch(removedLiked(ele));
                    }}
                  >
                    <AiOutlineDislike />
                  </button>
                ) : (
                  <button
                    title="Like video"
                    onClick={() => {
                      dispatch(setLikeStatus(ele.id));
                      dispatch(addLiked(ele));
                    }}
                  >
                    <AiOutlineLike />
                  </button>
                )}

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
