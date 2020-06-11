// libs
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

const NotificationsList = () => {
  useFirestoreConnect(["notifications"]);
  const { notifications } = useSelector((state) => state.firestore.data);

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              Object.entries(notifications).map(([id, notification]) => (
                <li key={id}>
                  <span className="pink-text">{notification.user}&nbsp;</span>
                  <span>{notification.content}</span>
                  <div className="grey-text note-date">
                    {moment(notification.time.toDate()).fromNow()}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotificationsList;
