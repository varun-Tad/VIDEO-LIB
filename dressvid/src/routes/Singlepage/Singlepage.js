import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdPlaylistPlay } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { X } from "phosphor-react";
import { useState } from "react";
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
    console.log("sameEnteredPlaylistName", sameEnteredPlaylistName);
  };

  const fullPlaylist = useSelector((state) => state.playListmgmt.fullPlaylist);

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
                        console.log("item", item);
                        dispatch(AddtoPlaylist({ selectedVd, item }));
                      }}
                    >
                      Add to playlist
                    </button>
                    <button
                      className="addToPlaylist-btn"
                      onClick={() => dispatch(DeleteaPlaylist(item))}
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
              <MdPlaylistPlay
                onClick={() => {
                  modalHandler();
                  setSelectedVd(selected);
                }}
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
          <button className="sub-btn">Subscribe</button>
        </div>
      </main>
    </>
  );
};
