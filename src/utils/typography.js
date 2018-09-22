import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
});

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;

const { rhythm, scale } = typography;
export { rhythm };

export const scaled = (x, y) => {
  const {
    fontSize,
    lineHeight,
  } = scale(x, y);
  return `font-size: ${fontSize}; line-height: ${lineHeight}`;
};
