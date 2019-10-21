import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { patchTheme } from '../../../theme/themeFunctions.js';

const useDurationStyles = makeStyles(muiTheme => {
  const theme = patchTheme(muiTheme);
  return {
    root: {
      display: 'flex',
      border: 'none',
      overflow: 'hidden',
      borderRadius: theme.spacing(0.5),
      padding: 0,
      maxHeight: '32px',
      height: '32px',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'flex-start',
      minWidth: '100px',
      flex: 'auto',
    },
    border: {
      border: `0.5px solid ${theme.palette.error.main}`,
    },
    isLive: {
      flex: 1,
      padding: theme.spacing(1),
      backgroundColor: theme.palette.error.main,
      height: '100%',
      lineHeight: 1.2,
    },
    duration: {
      height: '100%',
      padding: theme.spacing(1),
      lineHeight: 1.2,
      color: theme.custom.whiteShades[0.6],
      fontSize: theme.spacing(1),
    },
  };
});

const DurationInfo = ({ isLive, renderTime }) => {
  const durationClasses = useDurationStyles();

  const time = renderTime();

  return (
    <Box
      className={cx(durationClasses.root, {
        [durationClasses.border]: isLive,
      })}>
      {isLive && (
        <Typography className={durationClasses.isLive} variant='caption'>
          LIVE
        </Typography>
      )}
      <Typography className={durationClasses.duration} variant='caption'>
        {time}
      </Typography>
    </Box>
  );
};

DurationInfo.propTypes = {
  isLive: PropTypes.bool,
  renderTime: PropTypes.func,
};

DurationInfo.defaultProps = {
  isLive: false,
  renderTime: () => {},
};

export default DurationInfo;
