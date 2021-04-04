import React, { useState, useEffect } from 'react';
import CryptoFetch from '../utils/CryptoFetch'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    paper: {
        paddingBottom: '1%',
        marginBottom: '5%'
    }
  }));

export const CryptoDisplay = () => {
    const classes = useStyles();
    const [target, setTarget] = useState('btc');
    const [usdPrice, setUsdPrice] = useState('');

    useEffect(() => {
        CryptoFetch(target)
            .then(response => response.json())
            .then(data => {
                setUsdPrice(data.data.market_data.price_usd);
                console.log(usdPrice);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target]);

    const handleChange = (event) => {
        setTarget(event.target.value);
    };

    return (
        <div>
        <Paper className={classes.paper}>
        <FormControl className={classes.formControl}>
            <InputLabel id="crypto-selector-inputlabel">Crypto Currency</InputLabel>
            <Select
            labelId="crypto-selector-label"
            id="crypto-selector-open-select"
            value={target}
            onChange={handleChange}
            >
                <MenuItem value="btc">Bitcoin</MenuItem>
                <MenuItem value="doge">Doge</MenuItem>
            </Select>
        </FormControl>
        <Typography>Current price of {target.toUpperCase()} in USD: ${Number(usdPrice).toFixed(5)}</Typography>
        </Paper>
    </div>
    );
}