import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { patchTheme } from '../../theme/themeFunctions';
import VideoElement from '../VideoPlayer/VideoElement';
import { ControlBar, TogglePlay } from '../VideoPlayer/controls';
import { getOptions } from '../VideoPlayer/utils/videoUtils';
import useVideoJS from '../../hooks/useVideoJS';

const useDefaultStyles = makeStyles(muiTheme => {
  const theme = patchTheme(muiTheme);
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: '100%',
      height: '100%',
      backgroundColor: theme.custom.blackShades[0.35],
    },
  };
});

const url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';

const AssetPlayer = () => {
  const classes = useDefaultStyles();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const options = getOptions({
    controls: false,
    autoplay: true,
    fluid: true,
    playinline: true,
  });

  const { playerRef, context } = useVideoJS(isLoading, url, options);

  return (
    <Box className={classes.root}>
      <VideoElement ref={playerRef} />
      <ControlBar context={context}>
        <TogglePlay />
      </ControlBar>
    </Box>
  );
};

export default AssetPlayer;
