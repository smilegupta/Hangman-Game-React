import React, { memo } from "react";

const Notification = memo(({ show }) => {
  return (
    <div className={`notification-container ${show ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
});

export default Notification;
