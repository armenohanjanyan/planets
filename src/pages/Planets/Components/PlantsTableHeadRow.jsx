import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { styles } from '../styles';

const useStyles = makeStyles(styles);
export const PlantsTableHeadRow = () => {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.th}>Name</TableCell>
        <TableCell className={classes.th} align="right">
          Diameter
        </TableCell>
        <TableCell className={classes.th} align="right">
          Population
        </TableCell>
        <TableCell className={classes.th} align="right">
          Terrain
        </TableCell>
        <TableCell className={classes.th} align="right">
          Gravity
        </TableCell>
        <TableCell className={classes.th} align="right">
          Climate
        </TableCell>
        <TableCell className={classes.th} align="right">
          Rotation Period
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
