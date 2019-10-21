import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { patchTheme } from '../../theme/themeFunctions';
import Asset from '../../components/Asset';
import Thumbnails from '../../components/Thumbnails';

const useDefaultStyles = makeStyles(muiTheme => {
  const theme = patchTheme(muiTheme);
  return {
    root: {
      width: '100%',
      height: '100vh',
      backgroundColor: theme.palette.common.black,
      overflow: 'hidden',
      position: 'fixed',
      display: 'flex',
      flexFlow: 'row',
    },
  };
});

const Library = () => {
  const classes = useDefaultStyles();

  return (
    <div className={classes.root}>
      <Thumbnails />
      <Asset />
    </div>
  );
};

export default Library;
