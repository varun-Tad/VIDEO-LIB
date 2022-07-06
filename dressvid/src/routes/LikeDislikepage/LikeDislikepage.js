import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { removedLiked } from "../../features/LikeDislike/LikeDislikeSlice";
import { removeLikeSetStatus } from "../../features/LikeStatus/LikeSlice";
import "./LikeDislikepage.css";

export const LikeDislikepage = () => {
  const likedSelected = useSelector((state) => state.likeDislike.likeSelected);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const navigateToExplore = () => {
    navigate("/explore");
  };

  const navigateToSinglepageHandler = (id) => {
    navigate(`/singlepage/${id}`);
  };

  return (
    <div>
      <h1 className="liked-heading">Liked Videos</h1>
      {likedSelected.length === 0 ? (
        <div className="empty-Likemessage">
          <p>No videos Liked</p>
          <button onClick={navigateToExplore}>Explore</button>
        </div>
      ) : (
        <main className="main-section">
          {likedSelected.map((ele) => (
            <div className="optionCard" key={ele.id}>
              <div
                className="image-container"
                onClick={() => navigateToSinglepageHandler(ele.id)}
              >
                <img src={ele.img} alt="video banner" />
              </div>
              <div className="text-container">
                <h3>{ele.name}</h3>
                <div className="card-footer">
                  <small className="channel-name">by {ele.channelName}</small>
                  <AiFillDelete
                    className="deleteCard"
                    title="Unlike video"
                    onClick={() => {
                      dispatch(removeLikeSetStatus(ele.id));
                      dispatch(removedLiked(ele));
                    }}
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
