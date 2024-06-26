import React, { useRef, useState } from "react";

import { BsArrowsFullscreen } from "react-icons/bs";
import VideoPlayer from "../../modules/VideoPlayer";

function Tabs() {
  const [activeTab, setActiveTab] = useState("tab-1");
  const videoRefs = useRef([null, null, null]);

  const toggleFullScreen = (tab) => {
    let videoIndex;
    switch (tab) {
      case "tab-1":
        videoIndex = 0;
        break;
      case "tab-2":
        videoIndex = 1;
        break;
      case "tab-3":
        videoIndex = 2;
        break;
      default:
        videoIndex = 0;
    }

    const video = videoRefs.current[videoIndex];
    if (video && video.current) {
      if (video.current.requestFullscreen) {
        video.current.requestFullscreen();
      } else if (video.current.mozRequestFullScreen) {
        video.current.mozRequestFullScreen();
      } else if (video.current.webkitRequestFullscreen) {
        video.current.webkitRequestFullscreen();
      } else if (video.current.msRequestFullscreen) {
        video.current.msRequestFullscreen();
      }
    }
  };

  const changeTabHandler = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="tabs bg-accent">
      <div className="container py-20 ">
        <div className="flex flex-col items-center gap-6">
          {/* tab items */}
          <div className="w-full flex  justify-between items-center max-w-[950px] mb-3">
            <div onClick={() => changeTabHandler("tab-1")}>
              <p
                className={`text-[13px] sm:text-lg lg:text-3xl font-semibold py-2 md:py-5 px-4 md:px-10 select-none cursor-pointer border-b-4 border-transparent ${
                  activeTab === "tab-1" && "active-tab"
                } `}
              >
                Detect <span className="text-sky-blue ">Trends</span>
              </p>
            </div>
            <div onClick={() => changeTabHandler("tab-2")}>
              <p
                className={`text-[13px] sm:text-lg lg:text-3xl font-semibold py-2 md:py-5 px-4 md:px-10 select-none cursor-pointer border-b-4 border-transparent ${
                  activeTab === "tab-2" && "active-tab"
                }`}
              >
                Keep it <span className="text-sky-blue ">Real</span>
              </p>
            </div>
            <div onClick={() => changeTabHandler("tab-3")}>
              <p
                className={`text-[13px] sm:text-lg lg:text-3xl font-semibold py-2 md:py-5 px-4 md:px-10 select-none cursor-pointer border-b-4 border-transparent ${
                  activeTab === "tab-3" && "active-tab"
                }`}
              >
                Chat to <span className="text-sky-blue ">Trade</span>
              </p>
            </div>
          </div>

          {/* tabs video */}
          {activeTab === "tab-1" && (
            <VideoPlayer
              url="/video/tab-1.mp4"
              ref={(el) => (videoRefs.current[0] = el)}
            />
          )}
          {activeTab === "tab-2" && (
            <VideoPlayer
              url="/video/tab-2.mp4"
              ref={(el) => (videoRefs.current[1] = el)}
            />
          )}
          {activeTab === "tab-3" && (
            <VideoPlayer
              url="/video/tab-3.mp4"
              ref={(el) => (videoRefs.current[2] = el)}
            />
          )}
          <button
            onClick={() => toggleFullScreen(activeTab)}
            className="hidden md:block"
          >
            <BsArrowsFullscreen size="20px" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
