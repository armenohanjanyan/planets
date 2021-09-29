import React, { useEffect } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Parallax from '../../components/Parallax/Parallax';

import styles from './styles.js';
import { useParams } from 'react-router';
import getPlanetImage from '../../utils/getPlanetImage';
import { useDispatch, useSelector } from 'react-redux';
import { attemptGetPlanet } from '../../store/planet/actions';
import { push } from 'connected-react-router';
import routes from '../../routes/routesCode';

const info = {
  climate: 'Climate',
  diameter: 'Diameter',
  gravity: 'Gravity',
  orbital_period: 'Orbital period',
  population: 'Population',
  rotation_period: 'Rotation period',
  surface_water: 'Surface water',
  terrain: 'Terrain',
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles(styles);

export default function Planet() {
  const { planetLoading, planet } = useSelector((state) => state.planet);
  const dispatch = useDispatch();
  const { id } = useParams();

  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);

  useEffect(() => {
    dispatch(attemptGetPlanet(id));
  }, [dispatch, id]);

  if (planetLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      <IconButton
        sx={{ position: 'absolute', top: 20, left: 20 }}
        onClick={() => {
          dispatch(push(routes.planets.path));
        }}>
        <ArrowBackIcon sx={{ zIndex: 10, color: 'white' }} />
      </IconButton>
      <Parallax image={require('../../assets/img/profile-bg.jpg').default} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={getPlanetImage()} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{planet.name}</h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <Grid container spacing={4}>
                {Object.keys(info).map((key) => (
                  <Grid item xs={6} key={key}>
                    <Item>
                      <span className={classes.gray}>{info[key]}</span> - {planet[key]}
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
