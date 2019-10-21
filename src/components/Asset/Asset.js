import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { patchTheme } from '../../theme/themeFunctions';
import AssetPlayer from './AssetPlayer';

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
  };
});

const Asset = () => {
  const classes = useDefaultStyles();

  return (
    <Box className={classes.root}>
      <AssetPlayer />
    </Box>
  );
};

export default Asset;
