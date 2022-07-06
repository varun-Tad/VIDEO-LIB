import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdPlaylistPlay } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import {
  addWatchLater,
  removeWatchLater,
} from "../../features/watchLater/watchLaterSlice";
import { setStatus, removeSetStatus } from "../../features/WlStatus/wlSlice";
import {
  addLiked,
  removedLiked,
} from "../../features/LikeDislike/LikeDislikeSlice";
import {
  setLikeStatus,
  removeLikeSetStatus,
} from "../../features/LikeStatus/LikeSlice";
import "./Singlepage.css";

export const Singlepage = () => {
  const { pageid } = useParams();
  const exploreSelected = useSelector(
    (state) => state.explore.selectedExploreOptions
  );

  const watchStatusSelected = useSelector(
    (state) => state.statusLater.watchedLaterNums
  );

  const likeStatusSelected = useSelector((state) => state.statusLike.LikedNums);

  const dispatch = useDispatch();

  const getSelectedOption = (exploreSelected, pageid) => {
    const selected = exploreSelected.find((ele) => ele.id === Number(pageid));
    return selected;
  };

  const selected = getSelectedOption(exploreSelected, pageid);

  return (
    <>
      <main className="video-singlePage">
        <div className="video">
          <iframe
            className="video-frame"
            width="560"
            height="315"
            src={selected.url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h1 className="video-name">{selected.name}</h1>
        <div className="buttons">
          <div className="footer-left">
            <p className="footer-left-para">
              26,900 views | <span>9 Dec 2021</span>
            </p>
          </div>
          <div className="footer-right">
            {likeStatusSelected.some((everyNum) => everyNum === selected.id) ? (
              <button
                className="btn"
                title="Unlike video"
                onClick={() => {
                  dispatch(removeLikeSetStatus(selected.id));
                  dispatch(removedLiked(selected));
                }}
              >
                <AiOutlineDislike />
              </button>
            ) : (
              <button
                className="btn"
                title="Like video"
                onClick={() => {
                  dispatch(setLikeStatus(selected.id));
                  dispatch(addLiked(selected));
                }}
              >
                <AiOutlineLike />
              </button>
            )}
            {watchStatusSelected.some(
              (everyNum) => everyNum === selected.id
            ) ? (
              <button
                className="btn"
                onClick={() => {
                  dispatch(removeSetStatus(selected.id));
                  dispatch(removeWatchLater(selected));
                }}
                title="Remove from watch later"
              >
                <AiFillClockCircle />
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => {
                  dispatch(setStatus(selected.id));
                  dispatch(addWatchLater(selected));
                }}
                title="Watch later"
              >
                <AiOutlineClockCircle />
              </button>
            )}
            <button className="btn">
              <MdPlaylistPlay />
            </button>
          </div>
        </div>
        <div className="footer">
          <div className="left">
            <img
              src={`https://robohash.org/${selected.id}?set=set2`}
              alt="Avatar"
              class="avatar"
            />
            <div>
              <div>{selected.channelName}</div>
              <div>
                <small>391K subscribers</small>
              </div>
            </div>
          </div>
          <button className="sub-btn">Subscribe</button>
        </div>
      </main>
    </>
  );
};
