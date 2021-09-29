import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

const styles = {
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto',
  },
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
}
