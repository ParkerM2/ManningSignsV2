import React, { useState, useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import { CircularProgress } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const ProgressBar = ({ file, setFile }) => {
    const [color, setColor] = useState()
    const { url, progress } = useStorage(file);

    const progressColor = (progress) => {
        if (progress < 100) {
            setColor('primary')
        } else if (progress === 100) {
            setColor(green[500])
            return;
        }
    }

    useEffect(() => {
        progressColor(progress)
        if (url) {
            setFile(null);
        };
    }, [progressColor]);

    useEffect(() => {
        if (url) {
            setFile(null)
        }  
    }, [url, setFile])
    
    return (
        <CircularProgress variant="determinate" style={{color: color}} value={progress} />
    )
}

export default ProgressBar;
