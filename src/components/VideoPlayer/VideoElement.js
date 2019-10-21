import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { patchTheme } from '../../theme/themeFunctions';
import 'video.js/dist/video-js.css';

const useDefaultStyles = makeStyles(muiTheme => {
  const theme = patchTheme(muiTheme);
  return {
    root: {
      display: 'flex',
      width: '100%',
      height: 'auto',
      backgroundColor: theme.custom.blackShades[0.35],
    },
    element: {
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent!important',
    },
  };
});

const VideoElement = forwardRef((props, ref) => {
  const classes = useDefaultStyles();

  const Element = props.useAudio ? 'audio' : 'video';

  return (
    <div data-vjs-player className={classes.root} key={`vjs-${props.url}`}>
      <Element ref={ref} className={`video-js ${classes.element}`} />
    </div>
  );
});
export default VideoElement;
