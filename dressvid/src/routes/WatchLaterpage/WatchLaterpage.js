import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { removeWatchLater } from "../../features/watchLater/watchLaterSlice";
import { removeSetStatus } from "../../features/WlStatus/wlSlice";
import { useNavigate } from "react-router-dom";
import "./WatchLaterpage.css";

const WatchLaterpage = () => {
  const watchLaterSelected = useSelector(
    (state) => state.watchLater.watchLaterSelected
  );

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
      <h1 className="watchLater-heading">Watch Later</h1>
      {watchLaterSelected.length === 0 ? (
        <div className="empty-message">
          <p>No videos added to watch later</p>
          <button onClick={navigateToExplore}>Explore</button>
        </div>
      ) : (
        <main className="main-section">
          {watchLaterSelected.map((ele) => (
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
                    title="remove from watch later"
                    className="deleteCard"
                    onClick={() => {
                      dispatch(removeSetStatus(ele.id));
                      dispatch(removeWatchLater(ele));
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

export default WatchLaterpage;
