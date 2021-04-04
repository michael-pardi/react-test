import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CryptoDisplay } from './CryptoDisplay';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    center: {
      textAlign: 'center'
    },
    crypto: {
      textAlign: 'center',
      marginBottom: '2%'
    }
  }));

export const MainArea = ({quote, image, character, isLoading, imageLoaded, setImageLoaded}) => {
    const classes = useStyles();

    return (
      <div style={{marginTop: "25px"}}>
        <Container maxWidth="sm">
            <Grid container spacing={3} direction="column" justify="flex-end" alignItems="stretch" className={classes.crypto}>
              <CryptoDisplay />
            </Grid>
        </Container>
        {isLoading &&
          <div style={{
            position: 'absolute', left: '50%', top: '30%',
            transform: 'translate(-50%, -50%)'
          }}>
            <CircularProgress size={100} />
          </div>
        }
        {!isLoading &&
          <Container maxWidth="sm">
              <Grid container spacing={3} direction="column" justify="flex-end" alignItems="stretch">
                  <Grid item xs className={classes.center}>
                        <img src={image} alt="" onLoad={() => setImageLoaded(true)} />
                        {imageLoaded &&
                          <div>
                            <Typography>"{quote}"</Typography>
                            <Typography align="center">- {character}</Typography>
                          </div>
                        }
                  </Grid>
                </Grid>
          </Container>
        }
      </div>
    );
};