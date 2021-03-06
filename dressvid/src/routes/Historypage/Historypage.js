import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  removeHistory,
  clearHistory,
} from "../../features/history/historySlice";
import "./Historypage.css";

const Historypage = () => {
  const historySelected = useSelector((state) => state.history.historySelected);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const navigateToExplore = () => {
    navigate("/explore");
  };

  return (
    <>
      <h1 className="history-heading">History</h1>
      {historySelected.length === 0 ? (
        <div className="empty-message">
          <p>No videos present in History</p>
          <button onClick={navigateToExplore}>Explore</button>
        </div>
      ) : (
        <>
          <div className="history-clearBtn">
            <button onClick={() => dispatch(clearHistory())}>Clear All</button>
          </div>
          <main className="main-section">
            {historySelected.map((ele) => (
              <div className="optionCard" key={ele.id}>
                <div
                  className="image-container"
                  onClick={() => navigate(`/singlepage/${ele.id}`)}
                >
                  <img src={ele.img} alt="video banner" />
                </div>
                <div className="text-container">
                  <h3>{ele.name}</h3>
                  <div className="card-footer">
                    <small className="channel-name">by {ele.channelName}</small>
                    <AiFillDelete
                      title="remove from History"
                      className="deleteCard"
                      onClick={() => dispatch(removeHistory(ele))}
                    />
                  </div>
                </div>
              </div>
            ))}
          </main>
        </>
      )}
    </>
  );
};

export default Historypage;
