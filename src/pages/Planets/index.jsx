import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { attemptGetPlanets } from '../../store/planets/actions';
import { styles } from './styles';
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Button from '@mui/material/Button';
import { PlanetTableRow } from './Components/PlanetTableRow';
import { PlantsTableHeadRow } from './Components/PlantsTableHeadRow';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(styles);

const Planets = () => {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets);
  const data = planets?.data;
  const previous = planets?.previous;
  const loading = planets?.loading;
  const next = planets?.next;
  const classes = useStyles();

  useEffect(() => {
    dispatch(attemptGetPlanets());
  }, [dispatch]);

  const onPaginate = (isNext) => {
    let url = previous;
    if (isNext) {
      url = next;
    }
    dispatch(attemptGetPlanets(url));
  };

  return (
    <Container className={classes.container}>
      {loading ? (
        <div className={classes.spinner}>
          <CircularProgress disableShrink />
        </div>
      ) : (
        <>
          <Typography className={classes.tableTitle} align="center" variant="h3" component="h4">
            Planets List
          </Typography>
          <TableContainer className={classes.root} component={Paper}>
            <Table aria-label="caption table">
              <caption>
                <Grid container spacing={2}>
                  <Grid align="center" item xs={2}>
                    <Button onClick={() => onPaginate()} disabled={!previous} size="medium">
                      Prev
                    </Button>
                  </Grid>
                  <Grid item xs={8} />
                  <Grid align="center" item xs={2}>
                    <Button onClick={() => onPaginate(true)} disabled={!next} size="medium">
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </caption>
              <PlantsTableHeadRow />
              <TableBody>
                {data &&
                  data.map((row, index) => (
                    <PlanetTableRow id={index + 1} row={row} key={row.name} />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Container>
  );
};

export default Planets;
