import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { prevPrompt } = useContext(Context); // Check if prevPrompts exists
  console.log(prevPrompt);
  return (
    <div className="sidebar">
      <div className="top">
        {/* Toggle Sidebar */}
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="menu"
        />
        {/* New Chat Button */}
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus icon" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {/* Recent Prompts Section */}
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {(prevPrompt && prevPrompt.length > 0) ? (
              prevPrompt.map((item, index) => (
                <div className="recent-entry" key={index}>
                  <img src={assets.message_icon} alt="message icon" />
                  <p>{item.slice(0,18)}...</p>
                </div>
              ))
            ) : (
              <p>No recent prompts</p> // Fallback message if no prompts exist
            )}
          </div>
        ) : null}
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="help icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="settings icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
