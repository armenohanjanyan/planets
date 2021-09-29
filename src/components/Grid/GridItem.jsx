import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

const styles = {
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto',
  },
};

const useStyles = makeStyles(styles);

export default function GridItem(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
}
