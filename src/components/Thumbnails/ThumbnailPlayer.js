import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { patchTheme } from '../../theme/themeFunctions';
import VideoElement from '../VideoPlayer/VideoElement';
import useVideoJS from '../../hooks/useVideoJS';

const url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';

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

const ThumbnailPlayer = () => {
  const classes = useDefaultStyles();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const { playerRef, context } = useVideoJS(isLoading, url, {});

  console.log(context);

  return (
    <Box className={classes.root}>
      <VideoElement ref={playerRef} />
    </Box>
  );
};

export default ThumbnailPlayer;
