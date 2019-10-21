import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DurationInfo from './DurationInfo';
import { FullScreen } from '.';

const useDefaultStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'transparent',
      width: '100%',
      marginTop: theme.spacing(2),
      zIndex: 2147483647,
      maxHeight: '45px',
    },
    group: {
      boxShadow: 'none',
      borderRadius: theme.spacing(1),
      overflow: 'hidden',
      justifyContent: 'center',
    },
    flexItem: {
      display: 'flex',
      flexDirection: 'row',
      flex: 'auto',
      margin: theme.spacing(0, 0.5),
      justifyContent: 'flex-end;',
      alignItems: ' center',
      minWidth: '130px',
    },
    fullScreen: {},
  };
});

const ControlBar = ({ isLive, children, context }) => {
  const classes = useDefaultStyles();

  const { isFullScreen, renderTime } = context;

  return (
    <div className={cx(classes.root, { [classes.fullScreen]: isFullScreen })}>
      <DurationInfo isLive={isLive} renderTime={renderTime} />
      <ButtonGroup className={classes.group} size='small'>
        {React.Children.map(children, child =>
          React.cloneElement(child, { context }),
        )}
      </ButtonGroup>
      <div className={classes.flexItem}>
        <FullScreen context={context} />
      </div>
    </div>
  );
};

ControlBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isLive: PropTypes.bool,
};

ControlBar.defaultProps = {
  children: React.createElement('div'),
  isLive: false,
};

export default ControlBar;
