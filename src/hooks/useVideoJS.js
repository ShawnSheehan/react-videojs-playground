import { useEffect, useState, useRef } from 'react';
import videojs from 'video.js';
import {
  getSource,
  IS_SAFARI,
} from '../components/VideoPlayer/utils/videoUtils';
import { format, convert } from '../components/VideoPlayer/utils/formatUtils';

function useVideoJS(isLoading, url, options) {
  const playerRef = useRef(null);
  const [domain, setDomain] = useState(null);
  const [values, setValues] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const vjs = videojs(playerRef.current, options);

      vjs.removeChild('controlBar');
      vjs.removeChild('BigPlayButton');

      vjs.src(getSource(url));

      vjs.on('loadedmetadata', () => onVideoLoad());
      vjs.on('play', () => setIsPlaying(true));
      vjs.on('pause', () => setIsPlaying(false));
      vjs.on('timeupdate', () => onTimeUpdate());
      vjs.on('ended', () => setIsPlaying(false));

      return () => {
        vjs.dispose();
      };
    }
  }, [isLoading]);

  const play = () => {
    const player = playerRef.current;
    const promise = player.play();
    if (promise) {
      promise.catch(() => {});
    }
  };

  const pause = () => {
    const player = playerRef.current;
    player.pause();
  };

  const togglePlay = () => {
    const player = playerRef.current;
    if (player.playbackRate !== 1) player.playbackRate = 1;

    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };

  const toggleScreen = () => {
    const player = playerRef.current;

    if (IS_SAFARI) {
      if (!player.webkitDisplayingFullscreen) {
        player.webkitEnterFullscreen();
      } else {
        player.webkitExitFullscreen();
      }
    } else {
      player.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  const onTimeUpdate = event => {
    const player = playerRef.current;
    const time = convert(player.currentTime);

    setValues(() => {
      if (!isSeeking) {
        return [time];
      }
      return null;
    });
  };

  const onVideoLoad = event => {
    const player = playerRef.current;
    if (player) {
      setDomain([0, convert(player.duration)]);
      setValues([convert(player.currentTime)]);
    }
  };

  const renderTime = () => {
    let time = null;

    if (domain && values) {
      time = `${format(values[0])} / ${format(domain[1])}`;
    }

    return time;
  };

  const context = {
    isPlaying,
    isFullScreen,
    togglePlay,
    toggleScreen,
    renderTime,
  };

  return { playerRef, context };
}

export default useVideoJS;
