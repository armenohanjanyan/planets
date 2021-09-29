import React from 'react';
import { makeStyles } from '@mui/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function Parallax({ image }) {
  const classes = useStyles();

  return (
    <div
      className={`${classes.parallax}`}
      style={{
        backgroundImage: 'url(' + image + ')',
      }}
    />
  );
}
