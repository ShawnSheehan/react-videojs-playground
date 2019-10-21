import React from 'react';
import { PlayArrow, Pause } from '@material-ui/icons';
import ControlButton from './ControlButton';

const TogglePlay = ({ context }) => {
  const { togglePlay, isPlaying } = context;

  return (
    <ControlButton
      component={isPlaying ? Pause : PlayArrow}
      wide
      onClick={togglePlay}
    />
  );
};

export default TogglePlay;
