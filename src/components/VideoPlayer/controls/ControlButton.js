import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core';
import { patchTheme } from '../../../theme/themeFunctions.js';

const defaultButtonStyles = makeStyles(muiTheme => {
  const theme = patchTheme(muiTheme);
  return {
    root: {
      backgroundColor: theme.custom.whiteShades[0.15],
      borderRadius: 0,
      margin: '1px',
      padding: theme.spacing(0.5),
      minWidth: '34px',
      fontSize: '12px',
      position: 'relative',
      border: `1px solid transparent`,

      '&:hover': {
        backgroundColor: theme.custom.whiteShades[0.35],
        border: `1px solid ${theme.palette.action.focus}`,
      },
      '&:active': {
        backgroundColor: theme.palette.primary.dark,
        border: `1px solid transparent`,
      },
    },
    label: {
      color: theme.palette.primary.light,
      position: 'absolute',
      right: theme.spacing(0.5),
      bottom: 0,
      fontSize: '10px',
    },
    wide: {
      padding: theme.spacing(0.5, 1.5),
    },
    thin: {
      minWidth: theme.spacing(1),
      '& span': {
        width: theme.spacing(1),
      },
    },
    offset: {
      right: theme.spacing(5),
    },
    fscreen: {
      borderRadius: theme.spacing(0.5),
    },
  };
});

const ControlButton = ({
  value,
  onClick,
  component: Component,
  text,
  label,
  offset,
  wide,
  fscreen,
  thin,
}) => {
  const classes = defaultButtonStyles();

  const handleClick = e => {
    e.preventDefault();
    onClick && onClick(e);
  };

  return (
    <Button
      disableRipple={true}
      className={cx(
        classes.root,
        { [classes.wide]: wide },
        { [classes.fscreen]: fscreen },
        { [classes.thin]: thin },
      )}
      data-ctrl={value}
      onClick={handleClick}>
      {!text ? <Component /> : text}
      {label && (
        <Typography
          className={cx(classes.label, { [classes.offset]: offset })}
          variant='caption'>
          1
        </Typography>
      )}
    </Button>
  );
};

ControlButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.any,
  ]),
  text: PropTypes.string,
  label: PropTypes.bool,
  wide: PropTypes.bool,
  offset: PropTypes.bool,
  fscreen: PropTypes.bool,
  thin: PropTypes.bool,
};

ControlButton.defaultProps = {
  component: null,
  value: null,
  text: null,
  label: false,
  wide: false,
  offset: false,
  fscreen: false,
  thin: false,
};

export default ControlButton;
