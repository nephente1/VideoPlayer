import { useRef, useState, useEffect } from "react";
import { ContainerTitle, Navigation } from "../styles";
import { getRandomItem } from "../../shared/utils";
import { useNavigate } from "react-router-dom";
import { VideoWrapper, OptionsHeaderContainer, MuteWrapper, Video, ButtonsWrapper, ButtonPlayer, ProgressContainer, ProgressBar } from "./VideoPlayer.styles";

interface VideoPlayerProps {
  title?: string;
}
export const VideoPlayer = ({ title }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const navigate= useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressNumber, setProgressNumber] = useState(0);
  const [isMuted, setIsMuted] = useState(true);


  // Toggle play/pause
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Jump forward 10 seconds
  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  // Jump backward 10 seconds
  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  // Handle mute
  const handleMute = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted)
      videoRef.current.muted = isMuted;
    }
  };

  // Update progress indicator
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgressNumber(currentProgress);
    }
  };

  // Handle click on progress bar
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current;
    const videoElement = videoRef.current;

    if (!progressBar || !videoElement) return;

    // Get the bounding rectangle of the progress bar
    const rect = progressBar.getBoundingClientRect();

    // Calculate the click position as a percentage of the total width
    const clickPosition = e.clientX - rect.left;
    const clickPercentage = (clickPosition / rect.width) * 100;

    // Calculate the corresponding time in the video
    const newTime = (clickPercentage / 100) * videoElement.duration;
    
    // Update the video's current time
    videoElement.currentTime = newTime;
    setProgressNumber(clickPercentage);
  };

  // Sync the play/pause button with the video state
  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  // handle keyboard
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const video = videoRef.current;
      if (!video) return;

      switch (event.key) {
        case ' ': // Space: Play/Pause
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
          break;
        case 'ArrowLeft': // Left Arrow: Rewind 10 seconds
          video.currentTime = Math.max(0, video.currentTime - 10);
          break;
        case 'ArrowRight': // Right Arrow: Fast forward 10 seconds
          video.currentTime = Math.min(video.duration, video.currentTime + 10);
          break;
        case 'ArrowUp': // Up Arrow: Increase volume
          video.volume = Math.min(1, video.volume + 0.1);
          break;
        case 'ArrowDown': // Down Arrow: Decrease volume
          video.volume = Math.max(0, video.volume - 0.1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleFullScreen = () => {
    const element = document.getElementById("video-container");
    const isFullScreen = document.fullscreenElement;
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      element?.requestFullscreen()
    }
  }
  const item = getRandomItem();

  return (   
    <VideoWrapper id="video-container">
      <Navigation onClick={() => navigate('/')}><span className="material-symbols-outlined">arrow_back</span>back</Navigation>
      <OptionsHeaderContainer>
      <ContainerTitle>{title}</ContainerTitle>
      <MuteWrapper onClick={handleMute}>
        { isMuted ?
          <span className="material-symbols-outlined">volume_mute</span> :
          <span className="material-symbols-outlined">volume_off</span> 
        }
      </MuteWrapper>
      </OptionsHeaderContainer>
      <div>
      <Video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
      >
        <source
          src={item}
          type="video/mp4"
        />
        Your browser does not support HTML video.
      </Video></div>

      <ButtonsWrapper>
        <ButtonPlayer onClick={handleBackward}>
          <span className="material-symbols-outlined">keyboard_double_arrow_left</span> 
          <div>10s</div>
        </ButtonPlayer>
        <ButtonPlayer onClick={handlePlayPause}>
          {isPlaying ? 
            <>
              <span className="material-symbols-outlined">pause</span>
              <div>Pause</div>
            </> : 
            <>
              <span className="material-symbols-outlined">play_arrow</span>
              <div>Play</div>
            </>
          }</ButtonPlayer>
        <ButtonPlayer onClick={handleForward}>
          <div>10s</div>
          <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
        </ButtonPlayer>
      </ButtonsWrapper>

      <ProgressContainer
        ref={progressBarRef}
        onClick={handleProgressBarClick}
      >
        <ProgressBar style={{width: `${progressNumber}%`}} />
      </ProgressContainer>

      <span>{Math.round(progressNumber)}% watched</span>
      
      <ButtonsWrapper>
        <ButtonPlayer onClick={toggleFullScreen}>
          <div>toggle fullscreen</div>
          <span className="material-symbols-outlined">open_in_new</span>
        </ButtonPlayer>
      </ButtonsWrapper>
    </VideoWrapper>
  );
};
