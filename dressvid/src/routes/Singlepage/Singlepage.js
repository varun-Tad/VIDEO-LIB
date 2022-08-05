import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdPlaylistPlay } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { X } from "phosphor-react";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  createPlaylist,
  AddtoPlaylist,
} from "../../features/Playlist/PlaylistSlice";
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
import { DeleteaPlaylist } from "../../features/Playlist/PlaylistSlice";
import "./Singlepage.css";

export const Singlepage = () => {
  const { pageid } = useParams();
  const dispatch = useDispatch();
  const exploreSelected = useSelector(
    (state) => state.explore.selectedExploreOptions
  );

  const watchStatusSelected = useSelector(
    (state) => state.statusLater.watchedLaterNums
  );

  const likeStatusSelected = useSelector((state) => state.statusLike.LikedNums);

  const getSelectedOption = (exploreSelected, pageid) => {
    const selected = exploreSelected.find((ele) => ele.id === Number(pageid));
    return selected;
  };

  const selected = getSelectedOption(exploreSelected, pageid);
  const [modalAppear, setModalAppear] = useState(false);
  const [enteredPlaylistName, setEnteredPlaylistName] = useState("");
  const [sameEnteredPlaylistName, setSameEnteredPlaylistName] = useState("");
  const [selectedVd, setSelectedVd] = useState();
  const [subscribeState, setSubscribeState] = useState(false);
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

  const subscribeHandler = () => {
    setSubscribeState(!subscribeState);
  };

  const fullPlaylist = useSelector((state) => state.playListmgmt.fullPlaylist);

  const likeVideoDispatch = (ele) => {
    dispatch(setLikeStatus(ele.id));
    dispatch(addLiked(ele));

    toast.success("Video Liked !", {
      autoClose: 3000,
    });
  };

  const unlikeVideoDispatch = (ele) => {
    dispatch(removeLikeSetStatus(ele.id));
    dispatch(removedLiked(ele));
    toast.success("Video Unliked !", {
      autoClose: 3000,
    });
  };

  const addWatchLaterDispatch = (ele) => {
    dispatch(setStatus(ele.id));
    dispatch(addWatchLater(ele));
    toast.success("Video added to watch later !", {
      autoClose: 3000,
    });
  };

  const removeWatchLaterDispatch = (ele) => {
    dispatch(removeSetStatus(ele.id));
    dispatch(removeWatchLater(ele));
    toast.success("Video removed from watch later!", {
      autoClose: 3000,
    });
  };
  const playlistDispatch = (ele) => {
    modalHandler();
    setSelectedVd(ele);
  };

  return (
    <>
      <main className="video-singlePage">
        {modalAppear && <div className="backdrop"></div>}
        {modalAppear && (
          <div className="playlist-modal">
            <h3 className="playlist-modalTitle">My Playlist</h3>
            <X onClick={modalHandler} className="close-modal" size={24} />
            <div>
              {fullPlaylist.map((item) => (
                <div key={item} className="playlist-item">
                  <div className="playlist-name">{item}</div>
                  <div className="playListItem-btns">
                    <button
                      className="addToPlaylist-btn"
                      onClick={() => {
                        dispatch(AddtoPlaylist({ selectedVd, item }));
                        toast.success("Video added to playlist !", {
                          autoClose: 3000,
                        });
                      }}
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
        <div className="video">
          <iframe
            className="video-frame"
            width="560"
            height="315"
            src={selected.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
                  localStorage.getItem("VideoLibraryToken")
                    ? unlikeVideoDispatch(selected)
                    : toast.error("You are not logged in !", {
                        autoClose: 3000,
                      });
                }}
              >
                <AiOutlineDislike />
              </button>
            ) : (
              <button
                className="btn"
                title="Like Video"
                onClick={() => {
                  localStorage.getItem("VideoLibraryToken")
                    ? likeVideoDispatch(selected)
                    : toast.error("You are not logged in !", {
                        autoClose: 3000,
                      });
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
                  localStorage.getItem("VideoLibraryToken")
                    ? removeWatchLaterDispatch(selected)
                    : toast.error("You are not logged in !", {
                        autoClose: 3000,
                      });
                }}
                title="Remove from watch later"
              >
                <AiFillClockCircle />
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => {
                  localStorage.getItem("VideoLibraryToken")
                    ? addWatchLaterDispatch(selected)
                    : toast.error("You are not logged in !", {
                        autoClose: 3000,
                      });
                }}
                title="Watch later"
              >
                <AiOutlineClockCircle />
              </button>
            )}
            <button className="btn">
              <MdPlaylistPlay
                onClick={() => {
                  localStorage.getItem("VideoLibraryToken")
                    ? playlistDispatch(selected)
                    : toast.error("You are not logged in !", {
                        autoClose: 3000,
                      });
                }}
                title="Add to Playlist"
              />
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
          <button className="sub-btn" onClick={subscribeHandler}>
            {subscribeState ? "Unubscribe" : "Subscribe"}
          </button>
        </div>
      </main>
    </>
  );
};
