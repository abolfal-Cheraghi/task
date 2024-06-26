import React from "react";

import VideoPlayer from "../../modules/VideoPlayer";

function More() {
  return (
    <section className="more-than bg-accent w-full">
      <div className="flex flex-col gap-6 items-center w-full">
        <div className="container relative flex items-center justify-center">
          <img
            src="/public/svg/more-lines.svg"
            alt="more lines"
            className="hidden md:block"
          />
          <h2 className="title w-full absolute -top-9 lg:-top-10 left-1/2 -translate-x-1/2">
            And much more ...
          </h2>
        </div>

        <div className="-mt-6 md:-mt-14">
          <VideoPlayer url="/video/Comploop.mp4" />
        </div>
      </div>
    </section>
  );
}

export default More;
