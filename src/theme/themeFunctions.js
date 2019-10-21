import color from 'color';
import memoizee from 'memoizee';

export const patchTheme = theme => {
  return memoizedCalculateTeam(theme);
};

const upgradeTheme = theme => {
  const { black, white } = theme.palette.common;
  return {
    ...theme,
    custom: {
      iconGray: '#d8d8d8',
      gray: '#575A5A',
      focusShades: getShades(theme.palette.action.focus),
      mainDarkShades: getDarkShades(theme.palette.primary.main),
      baseLightShades: getLightShades(black),
      baseDarkShades: getDarkShades(black),
      blackShades: getShades(black),
      whiteShades: getShades(white),
      shape: {
        lozengeBorderRadius: 42,
      },
    },
    fontSize: {
      // TODO: after all font sizes added here replace fixed values with calculations
      button: '12px',
      label: '12px',
    },
  };
};

const memoizedCalculateTeam = memoizee(upgradeTheme, {
  normalizer: args => {
    const [theme] = args;
    return theme.themeName;
  },
});

const getShades = baseColor => {
  const steps = [0.05, 0.08, 0.1, 0.15, 0.2, 0.35, 0.6];
  return steps.reduce(
    (acc, o) => ({
      ...acc,
      [o]: color(baseColor)
        .fade(1 - o)
        .rgb()
        .string(),
    }),
    {},
  );
};

const getLightShades = baseColor => {
  const steps = [
    0.5,
    0.4,
    0.3,
    0.25,
    0.2,
    0.15,
    0.1,
    0.08,
    0.05,
    0.04,
    0.03,
    0.02,
  ];
  return steps.reduce(
    (acc, o) => ({
      ...acc,
      [o]: color(baseColor)
        .mix(color('#FFFFFF'), o)
        .hex(),
    }),
    {},
  );
};

const getDarkShades = baseColor => {
  const steps = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.02];
  return steps.reduce(
    (acc, o) => ({
      ...acc,
      [o]: color(baseColor)
        .darken(o)
        .hex(),
    }),
    {},
  );
};
