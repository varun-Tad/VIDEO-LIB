import { useDispatch, useSelector } from "react-redux";
import { X } from "phosphor-react";
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
import {
  createPlaylist,
  AddtoPlaylist,
  DeleteaPlaylist,
} from "../../features/Playlist/PlaylistSlice";
import { MdPlaylistPlay } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Explorepage.css";
import { toast } from "react-toastify";

const Explorepage = () => {
  const word = "selectedExploreOptions";
  const exploreSelected = useSelector((state) => state.explore[word]);
  const watchStatusSelected = useSelector(
    (state) => state.statusLater.watchedLaterNums
  );
  const likeStatusSelected = useSelector((state) => state.statusLike.LikedNums);
  const fullPlaylist = useSelector((state) => state.playListmgmt.fullPlaylist);
  const dispatch = useDispatch();
  const inputChangeHandler = (e) => {
    dispatch(SearchFilter(e.target.value));
  };
  let navigate = useNavigate();

  const [modalAppear, setModalAppear] = useState(false);
  const [enteredPlaylistName, setEnteredPlaylistName] = useState("");
  const [sameEnteredPlaylistName, setSameEnteredPlaylistName] = useState("");
  const [selectedVd, setSelectedVd] = useState();

  const modalHandler = () => {
    setModalAppear(!modalAppear);
  };

  const playlistNameInputHandler = (e) => {
    setEnteredPlaylistName(e.target.value);
    setSameEnteredPlaylistName(e.target.value);
  };

  const addToplayListArr = () => {
    dispatch(createPlaylist(enteredPlaylistName));
    setEnteredPlaylistName("");
  };

  return (
    <div className="explore-page">
      {modalAppear && <div className="backdrop"></div>}
      {modalAppear && (
        <div className="playlist-modal">
          <h3 className="playlist-modalTitle">My Playlists</h3>
          <X onClick={modalHandler} className="close-modal" size={24} />
          <div>
            {fullPlaylist.map((item) => (
              <div key={item} className="playlist-item">
                <div className="playlist-name">{item}</div>
                <div className="playListItem-btns">
                  <button
                    onClick={() => {
                      dispatch(AddtoPlaylist({ selectedVd, item }));
                      toast.success("Video added to playlist !", {
                        autoClose: 3000,
                      });
                    }}
                    className="addToPlaylist-btn"
                  >
                    Add to playlist
                  </button>
                  <button
                    className="addToPlaylist-btn"
                    onClick={() => {
                      dispatch(DeleteaPlaylist(item));
                      toast.success("Playlist deleted !", {
                        autoClose: 3000,
                      });
                    }}
                  >
                    Delete playlist
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="addPlaylist-container">
            <input
              value={enteredPlaylistName}
              type="text"
              onChange={playlistNameInputHandler}
              className="createPlaylist-input"
              placeholder="Enter new playlist..."
            />
            <button className="createPlaylist-btn" onClick={addToplayListArr}>
              Create Playlist
            </button>
          </div>
        </div>
      )}

      <div className="inputText-container">
        <input
          className="search-box"
          type="search"
          placeholder="Search..."
          onChange={inputChangeHandler}
        ></input>
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
                  <MdPlaylistPlay
                    onClick={() => {
                      modalHandler();
                      setSelectedVd(ele);
                    }}
                  />
                </button>

                {likeStatusSelected.some((everyNum) => everyNum === ele.id) ? (
                  <button
                    title="Unlike video"
                    onClick={() => {
                      dispatch(removeLikeSetStatus(ele.id));
                      dispatch(removedLiked(ele));
                      toast.success("Video Unliked !", {
                        autoClose: 3000,
                      });
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
                      toast.success("Video Liked !", {
                        autoClose: 3000,
                      });
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
                      toast.success("Video removed from watch later!", {
                        autoClose: 3000,
                      });
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
                      toast.success("Video added to watch later !", {
                        autoClose: 3000,
                      });
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
