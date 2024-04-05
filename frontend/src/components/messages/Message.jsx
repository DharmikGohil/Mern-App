// eslint-disable-next-line no-unused-vars
import React from "react";

function Message() {
  return (
    <div className={`chat chat-end`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://static-00.iconduck.com/assets.00/profile-icon-512x512-w0uaq4yr.png"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 pb-2`}>
        H, whats up?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
}

export default Message;
