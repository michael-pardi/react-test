import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccessibleIcon from '@material-ui/icons/Accessible';
import IconButton from '@material-ui/core/IconButton';
import SimpsonsFetch from '../utils/SimpsonsFetch';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appbarColor: {
      backgroundColor: "#D62828",
      color: 'white'
    },
  }));

export const Appbar = ({setQuote, setImage, setCharacter, setIsLoading, setImageLoaded}) => {
    const classes = useStyles();

    const newSimpson = () => {
      setIsLoading(true);
      setImageLoaded(false);
      SimpsonsFetch()
        .then(response => response.json())
        .then(data => {
          setQuote(data[0].quote);
          setImage(data[0].image);
          setCharacter(data[0].character);
          setIsLoading(false);
        })
    }

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbarColor}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={newSimpson} >
              <AccessibleIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Demoanivate
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
};

export default Appbar;