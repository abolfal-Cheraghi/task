import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

const VideoPlayer = forwardRef(({ url }, ref) => {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    // برای مثال، می‌توانیم یک تابع play اضافه کنیم
    play: () => {
      videoRef.current.play();
    },
    // یا هر تابع یا متغیر دیگری که نیاز دارید را اضافه کنید
  }));

  useEffect(() => {
    if (videoRef.current) {
      // مثلاً می‌توانید در اینجا به رویدادهای ویدیو گوش کنید
      videoRef.current.addEventListener("ended", () => {
        // اینجا می‌توانید چیزی انجام دهید
      });
    }
  }, [videoRef.current]);

  return (
    <video ref={videoRef} width="100%" autoPlay muted loop>
      <source src={url} type="video/mp4" />
    </video>
  );
});

export default VideoPlayer;
