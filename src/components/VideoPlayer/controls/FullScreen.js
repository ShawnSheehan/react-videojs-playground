import React from 'react';
import { Fullscreen as FSIcon } from '@material-ui/icons';
import ControlButton from './ControlButton';

const FullScreen = ({ context }) => {
  const { toggleScreen } = context;

  return <ControlButton fscreen component={FSIcon} onClick={toggleScreen} />;
};

export default FullScreen;
