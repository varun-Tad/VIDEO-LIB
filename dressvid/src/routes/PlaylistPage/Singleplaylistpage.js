import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { DeleteAVideoFromPlay } from "../../features/Playlist/PlaylistSlice";
import { addHistory } from "../../features/history/historySlice";
import "./Singleplaylistpage.css";

export const Singleplaylistpage = () => {
  const { playid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playListPicked = useSelector((state) => state.playListmgmt[playid]);

  const navigateToExplore = () => {
    navigate("/explore");
  };

  return (
    <div>
      <h1 className="playlist-heading">{playid}</h1>
      {playListPicked.length === 0 ? (
        <div className="empty-message">
          <p>No videos added to selected playlist</p>
          <button onClick={navigateToExplore}>Explore</button>
        </div>
      ) : (
        <main className="main-section">
          {playListPicked.map((ele) => (
            <div className="optionCard" key={ele.id}>
              <div
                className="image-container"
                onClick={() => {
                  navigate(`/singlepage/${ele.id}`);
                  dispatch(addHistory(ele));
                }}
              >
                <img src={ele.img} alt="video banner" />
              </div>
              <div className="text-container">
                <h3>{ele.name}</h3>
                <div className="card-footer">
                  <small className="channel-name">by {ele.channelName}</small>
                  <AiFillDelete
                    title="Delete video from playlist"
                    className="deletePlaylist"
                    onClick={() =>
                      dispatch(DeleteAVideoFromPlay({ ele, playid }))
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </main>
      )}
    </div>
  );
};
