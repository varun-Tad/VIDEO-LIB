import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { X } from "phosphor-react";
import "./Playlist.css";
import {
  DeleteaPlaylist,
  AddtoPlaylist,
  createPlaylist,
} from "../../features/Playlist/PlaylistSlice";

const Playlistpage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

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
  const [modalAppear, setModalAppear] = useState(false);
  const [selectedVd, setSelectedVd] = useState();
  const [sameEnteredPlaylistName, setSameEnteredPlaylistName] = useState("");
  const [enteredPlaylistName, setEnteredPlaylistName] = useState("");

  const fullPlaylist = useSelector((state) => state.playListmgmt.fullPlaylist);
  const respectivePlaylist = useSelector((state) => state.playListmgmt);

  return (
    <div>
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
                    className="addToPlaylist-btn"
                    onClick={() => {
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
              Create new Playlist
            </button>
          </div>
        </div>
      )}
      <h1 className="playlist-heading">Playlist</h1>
      {fullPlaylist.length === 0 ? (
        <div className="empty-message">
          <p>No videos added to Playist</p>

          <button
            onClick={() => {
              modalHandler();
            }}
          >
            Create Playlist
          </button>
        </div>
      ) : (
        <>
          <div className="createNewplaylis-btn">
            <button className="playlist-newBtn" onClick={modalHandler}>
              Create New Playlist
            </button>
          </div>
          <main className="main-section">
            {fullPlaylist.map((ele) => (
              <div className="optionCard" key={ele}>
                <div
                  className="image-container"
                  onClick={() => navigate(`/playlist/${ele}`)}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/1/1f/The_Playlist_series_2_logo.png"
                    alt="playlist banner"
                  />
                </div>
                <div className="text-container">
                  <h3 className="playList-title">Playlist: {ele}</h3>
                  <div className="card-footer">
                    <small className="channel-name">
                      Count: {respectivePlaylist[ele].length}
                    </small>
                    <AiFillDelete
                      title="Delete Playlist"
                      onClick={() => dispatch(DeleteaPlaylist(ele))}
                      className="deletePlaylist"
                    />
                  </div>
                </div>
              </div>
            ))}
          </main>
        </>
      )}
    </div>
  );
};

export default Playlistpage;
