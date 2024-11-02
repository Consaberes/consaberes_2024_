const breakpoints = {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  };

  const styles = {
    box: {
      fontSize: '16px',
      width: '100%',
    },
    [breakpoints.mobile]: {
      box: {
        fontSize: '14px',
      },
    },
    [breakpoints.tablet]: {

        box: {
            width: '50%',
            fontSize: '16px',
          },
        },
        [breakpoints.desktop]: {
          box: {
            width: '30%',
            fontSize: '18px',
          },
        },
      };

      import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

function MyComponent() {
  const classes = useStyles();

  return <div className={classes.box}>Hello World</div>;
}
