import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export const PlanetTableRow = ({ row, id }) => {
  const dispatch = useDispatch();
  return (
    <TableRow
      sx={{ cursor: 'pointer' }}
      onDoubleClick={() => dispatch(push(`/planets/${id}`))}
      key={row.name}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.diameter}</TableCell>
      <TableCell align="right">{row.population}</TableCell>
      <TableCell align="right">{row.terrain}</TableCell>
      <TableCell align="right">{row.gravity}</TableCell>
      <TableCell align="right">{row.climate}</TableCell>
      <TableCell align="right">{row.rotation_period}</TableCell>
    </TableRow>
  );
};
