import PropTypes from 'prop-types';

export const IOS =
  typeof navigator !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
  !window.MSStream;

export const AUDIO_EXTENSIONS = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;

export const IS_SAFARI = /^((?!chrome|android).)*safari/i.test(
  navigator.userAgent,
);

export const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;

export const HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;

export function shouldUseAudio(url) {
  return AUDIO_EXTENSIONS.test(url);
}

export function shouldUseHLS(url) {
  return HLS_EXTENSIONS.test(url) && !IOS;
}

export function isMediaStream(url) {
  return (
    typeof window !== 'undefined' &&
    typeof window.MediaStream !== 'undefined' &&
    url instanceof window.MediaStream
  );
}

export function getSource(url) {
  if (url) {
    const useHLS = shouldUseHLS(url);
    if (url instanceof Array || isMediaStream(url) || useHLS) {
      return undefined;
    }
    return url;
  }
}

export function getOptions(props) {
  const options = {
    controls: props.controls,
    fluid: props.fluid,
    autoplay: props.autoplay,
    playinline: props.playinline,
  };
  return options;
}
