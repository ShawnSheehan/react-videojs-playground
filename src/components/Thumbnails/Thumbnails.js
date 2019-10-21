import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { patchTheme } from '../../theme/themeFunctions';
import ThumbnailPlayer from './ThumbnailPlayer';

const useDefaultStyles = makeStyles(muiTheme => {
  const theme = patchTheme(muiTheme);
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      padding: theme.spacing(4),
      height: '100%',
      backgroundColor: theme.custom.blackShades[0.35],
      margin: theme.spacing(2),
      flex: 1,
    },
    item: {
      display: 'inline-block',
      width: '210px',
      minHeight: '210px',
      maxHeight: '240px',
      marginRight: '4px',
      marginBottom: '24px',
      backgroundColor: theme.palette.common.black,
      zIndex: -1,
    },
  };
});

const Thumbnails = () => {
  const classes = useDefaultStyles();

  return (
    <div className={classes.root}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((a, i) => (
        <Box key={a} className={classes.item}>
          <ThumbnailPlayer />
        </Box>
      ))}
    </div>
  );
};

export default Thumbnails;
