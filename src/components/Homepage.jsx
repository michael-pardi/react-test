import React, { useState, useEffect } from 'react';
import { Appbar } from './Appbar';
import { MainArea } from './MainArea';
import SimpsonsFetch from '../utils/SimpsonsFetch';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Homepage = () => {
    const [quote, setQuote] = useState('');
    const [image, setImage] = useState('');
    const [character, setCharacter] = useState('');
    const [isLoadingHome, setIsLoadingHome] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    
    useEffect(() => {
        SimpsonsFetch()
            .then(response => response.json())
            .then(data => {
                setQuote(data[0].quote);
                setImage(data[0].image);
                setCharacter(data[0].character);
                setIsLoadingHome(false);
            });
    }, []);

    if (isLoadingHome) {
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '30%',
                transform: 'translate(-50%, -50%)'
            }}>
                <CircularProgress size={100} />
            </div>
        );
    }

    return (
        <div>
            <Appbar setQuote={setQuote} setImage={setImage} setCharacter={setCharacter} isLoading={isLoading} setIsLoading={setIsLoading} setImageLoaded={setImageLoaded} />
            <MainArea quote={quote} image={image} character={character} isLoading={isLoading} imageLoaded={imageLoaded} setImageLoaded={setImageLoaded} />
        </div>
    );
};